// app/api/subscriptions/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Subscription {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  subscriptionType: "weekly" | "monthly";
  startDate: string;
  address: string;
  createdAt: string;
}

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "lib");
    const filePath = path.join(dataDir, "subscriptions.json");

    if (!fs.existsSync(filePath)) {
      // No subscriptions yet – return empty array
      return NextResponse.json({ success: true, data: [] }, { status: 200 });
    }

    const raw = fs.readFileSync(filePath, "utf8");
    const subscriptions: Subscription[] = JSON.parse(raw);
    return NextResponse.json({ success: true, data: subscriptions }, { status: 200 });
  } catch (error: any) {
    console.error("Error reading subscriptions:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
