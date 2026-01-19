import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Add submission metadata
    const submission = {
      id: crypto.randomUUID(),
      submission_type: "advisory",
      created_at: new Date().toISOString(),
      answers: data,
      status: "new",
    };

    // TODO: Save to database (Supabase/Postgres) or Airtable
    // TODO: Send notification email on submission
    // TODO: Optionally push to Slack webhook

    console.log("Advisory submission received:", submission);

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing advisory submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
