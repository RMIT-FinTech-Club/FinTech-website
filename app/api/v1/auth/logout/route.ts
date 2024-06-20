// import { NextApiRequest, NextApiResponse } from "next";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		// Create response
		const response = NextResponse.json(
			{
				message: "Logout successful",
				success: true,
			},
			{ status: 200 },
		);
		// Set cookie expire
		response.cookies.set("token", "", {
			httpOnly: true,
			expires: new Date(0),
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
