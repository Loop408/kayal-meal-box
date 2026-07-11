import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Set route to force dynamic so it isn't statically cached
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data: subscriptions, error } = await supabase
      .from('subscriptions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Map supabase columns back to frontend expected camelCase if needed,
    // but we can just map it here to ensure compatibility with existing frontend
    const mappedSubs = subscriptions?.map(sub => ({
      id: sub.id,
      name: sub.name,
      email: sub.email,
      phone: sub.phone,
      plan: sub.plan,
      subscriptionType: sub.subscription_type,
      startDate: sub.start_date,
      address: sub.address,
      createdAt: sub.created_at
    })) || [];

    return NextResponse.json({ success: true, subscriptions: mappedSubs });
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

    const { error } = await supabase
      .from('subscriptions')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true, message: "Subscription deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting subscription:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const updatedSub = await request.json();

    if (!updatedSub || !updatedSub.id) {
      return NextResponse.json(
        { success: false, error: "Invalid data or missing ID" },
        { status: 400 }
      );
    }

    const { id, name, email, phone, plan, subscriptionType, startDate, address } = updatedSub;

    const { data, error } = await supabase
      .from('subscriptions')
      .update({
        name,
        email,
        phone,
        plan,
        subscription_type: subscriptionType,
        start_date: startDate,
        address
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    const mappedSub = {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      plan: data.plan,
      subscriptionType: data.subscription_type,
      startDate: data.start_date,
      address: data.address,
      createdAt: data.created_at
    };

    return NextResponse.json({ success: true, subscription: mappedSub });
  } catch (error: any) {
    console.error("Error updating subscription:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
