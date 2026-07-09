import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, plan, mealPreference, startDate, address } = body;

    // Validate request data
    if (!name || !email || !phone || !plan || !mealPreference || !startDate || !address) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('subscriptions')
      .insert([
        { 
          name, 
          email, 
          phone, 
          plan, 
          meal_preference: mealPreference, 
          start_date: startDate, 
          address 
        }
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error in subscription API:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
