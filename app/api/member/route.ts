import { connectToDB } from "@/lib/mongodb";
import MemberModel from "@/models/MemberSchema";
import { NextResponse } from "next/server";

// GET API Route
export async function GET() {
  try {
    // Connect to the database (no need to destructure `db` if not used)
    await connectToDB();

    // Query the database to fetch team members (with pagination if needed)
    const members = await MemberModel.find().sort({ name: 1 });

    // Return the response with member data
    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    // Handle errors
    console.error("Error fetching team members:", error);
    return NextResponse.json({ message: "Failed to fetch team members" }, { status: 500 });
  }
}
