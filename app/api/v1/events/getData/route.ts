import { connect } from "@/db/dbConfig";
import UpCommingEvents from "@/models/upCommingEvents";
import { type NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
	try {
		// Create response
		const allEvents = await UpCommingEvents.find({});
		const response = NextResponse.json(
			{
				message: "Get data successfully",
				success: true,
				data: allEvents,
			},
			{ status: 200 },
		);
		return response;
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
