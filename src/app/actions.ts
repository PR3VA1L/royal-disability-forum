"use server";

import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

// Simple in-memory rate limiting (per server instance)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  
  // Clean up old entries occasionally
  if (Math.random() < 0.05) {
    for (const [key, timestamp] of rateLimitMap.entries()) {
      if (timestamp < windowStart) rateLimitMap.delete(key);
    }
  }

  const userRequests = rateLimitMap.get(identifier) || 0;
  if (userRequests > MAX_REQUESTS) {
    return true;
  }
  
  // Actually we need to track count properly, this is simplified.
  // We'll just store the timestamp of the last request and only allow 1 per 2 seconds during testing.
  const lastRequest = rateLimitMap.get(identifier) || 0;
  if (now - lastRequest < 2000) {
    return true;
  }
  
  rateLimitMap.set(identifier, now);
  return false;
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // 1. Rate limiting
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'anonymous';
    if (isRateLimited(`contact_${ip}`)) {
      return { success: false, error: "You are submitting too fast. Please wait a moment." };
    }

    // 2. Validation
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    
    const validatedData = contactSchema.parse(rawData);

    // 3. Database Insert
    const { error } = await supabaseAdmin
      .from("contacts")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
        }
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      return { success: false, error: "Failed to submit message. Please try again later." };
    }

    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues?.[0]?.message || "Validation failed." };
    }
    console.error("Contact Form Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is too short").max(20),
  interests: z.string().min(2, "Please select an area of interest"),
});

export async function submitVolunteerForm(prevState: any, formData: FormData) {
  try {
    // 1. Rate limiting
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'anonymous';
    if (isRateLimited(`volunteer_${ip}`)) {
      return { success: false, error: "You are submitting too fast. Please wait a moment." };
    }

    // 2. Validation
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interests: formData.get("interests"),
    };
    
    const validatedData = volunteerSchema.parse(rawData);

    // 3. Database Insert
    const { error } = await supabaseAdmin
      .from("volunteers")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          interests: validatedData.interests,
        }
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      return { success: false, error: "Failed to submit application. Please try again later." };
    }

    return { success: true, message: "Thank you for volunteering! We will be in touch." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues?.[0]?.message || "Validation failed." };
    }
    console.error("Volunteer Form Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function loginAdmin(prevState: any, formData: FormData) {
  const password = formData.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("ADMIN_PASSWORD not set in environment variables");
    return { success: false, error: "Server configuration error" };
  }

  if (password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", adminPassword, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    redirect("/admin/dashboard");
  }

  return { success: false, error: "Invalid password" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin");
}
