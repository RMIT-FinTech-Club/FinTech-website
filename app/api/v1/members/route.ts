import connectMongoDb from "@/libs/mongodb";
import Member from "@/models/member";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	await connectMongoDb();

	try {
		const members = await Member.find({});
		return NextResponse.json({
			status: 200,
			members,
		});
	} catch (error) {
		return NextResponse.json({
			status: 500,
			message: "Error fetching members",
		});
	}
}
