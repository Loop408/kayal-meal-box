import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define subscription interface
interface Subscription {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  mealPreference: "veg" | "non-veg";
  startDate: string;
  address: string;
  createdAt: string;
}

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

    // Prepare new subscription record
    const newSubscription: Subscription = {
      id: Math.random().toString(36).substring(2, 9) + Date.now().toString(36),
      name,
      email,
      phone,
      plan,
      mealPreference,
      startDate,
      address,
      createdAt: new Date().toISOString(),
    };

    // Path to save file: lib/subscriptions.json
    const dataDir = path.join(process.cwd(), "lib");
    
    // Ensure lib directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, "subscriptions.json");

    let subscriptions: Subscription[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf8");
        subscriptions = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error parsing existing subscriptions, resetting file:", err);
      }
    }

    // Append new subscription
    subscriptions.push(newSubscription);

    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(subscriptions, null, 2), "utf8");

    return NextResponse.json({ success: true, data: newSubscription });
  } catch (error: any) {
    console.error("Error in subscription API:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
