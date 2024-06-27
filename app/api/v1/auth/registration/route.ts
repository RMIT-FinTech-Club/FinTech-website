import { connect } from "@/db/dbConfig";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import { type NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest, res: NextResponse) {
	// TODO: Implement logout logic
	try {
		// Get data from user
		const { email, password } = await req.json();
		const user = await User.findOne({ email });
		// Check if user existed
		if (user) {
			return NextResponse.json(
				{ error: "User already existed" },
				{ status: 400 },
			);
		}
		// Hash password
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);
		// Create new user
		const newUser = new User({
			email,
			password: hashedPassword,
		}).save();
		// Response
		return NextResponse.json({ message: "User created" }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
