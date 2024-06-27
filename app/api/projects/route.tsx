import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import ResearchPaper from "@/models/researchPaper";

export async function GET() {
    connectMongoDB();
    const researchPaper = await ResearchPaper.find();
    return NextResponse.json(researchPaper);
}
