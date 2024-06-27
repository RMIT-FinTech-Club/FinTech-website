import { connect } from "@/db/dbConfig";
import UpCommingEvents from "@/models/upCommingEvents";
import { type NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
	try {
		// Create response
		const { id } = await req.json();
		const event = await UpCommingEvents.findById(id);
		const response = NextResponse.json(
			{
				message: "Get data successfully",
				success: true,
				data: event,
			},
			{ status: 200 },
		);
		return response;
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
