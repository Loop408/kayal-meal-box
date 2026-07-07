import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Set route to force dynamic so it isn't statically cached
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "lib", "subscriptions.json");
    
    let subscriptions = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf8");
        subscriptions = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error parsing subscriptions:", err);
      }
    }

    // Sort by newest first
    subscriptions.sort((a: any, b: any) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return NextResponse.json({ success: true, subscriptions });
  } catch (error: any) {
    console.error("Error in admin API:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "lib", "subscriptions.json");
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, error: "No subscriptions found" },
        { status: 404 }
      );
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    let subscriptions = JSON.parse(fileContent);
    
    const filteredSubscriptions = subscriptions.filter((sub: any) => sub.id !== id);

    if (subscriptions.length === filteredSubscriptions.length) {
      return NextResponse.json(
        { success: false, error: "Subscription not found" },
        { status: 404 }
      );
    }

    fs.writeFileSync(filePath, JSON.stringify(filteredSubscriptions, null, 2), "utf8");

    return NextResponse.json({ success: true, message: "Subscription deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting subscription:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
