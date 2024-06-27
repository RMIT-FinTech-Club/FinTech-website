import { connect } from "@/db/dbConfig";
import UpCommingEvents from "@/models/upCommingEvents";
import { type NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
	try {
		const {
			description,
			imageUrl,
			registrationLink,
			dateTime,
			time,
			date,
			location,
			type,
		} = await req.json();

		// Create event
		const newEvent = await new UpCommingEvents({
			description,
			imageUrl,
			registrationLink,
			dateTime,
			time,
			date,
			location,
			type,
		}).save();

		return NextResponse.json(
			{ message: "Event created", data: newEvent },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
