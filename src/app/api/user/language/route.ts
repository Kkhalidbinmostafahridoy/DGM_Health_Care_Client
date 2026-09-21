// app/api/user/language/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Fetch user language preference from database, session, or cookie
  const language = "en";

  return NextResponse.json({ language });
}

export async function PATCH(request: Request) {
  try {
    const { language } = await request.json();

    // Save language preference to database or cookie here

    return NextResponse.json({ success: true, language });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update language" },
      { status: 400 },
    );
    console.error("Error updating language:", error);
  }
}
