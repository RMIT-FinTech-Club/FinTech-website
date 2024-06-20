import { connect } from "@/db/dbConfig";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		await connect();
		// Get data from user
		const { email, password } = await request.json();
		const user = await User.findOne({ email: email });
		// Check if user existed
		if (!user) {
			return Response.json(
				{ error: "User doesn't exist" },
				{ status: 403 },
			);
		}
		// Compare password
		const isMatch = await bcryptjs.compare(password, user.password);
		if (!isMatch) {
			return Response.json(
				{ error: "Password not matched" },
				{ status: 403 },
			);
		}
		// Create JWT token
		const token = await jwt.sign(
			{ id: user._id, email: user.email, role: user.role },
			process.env.JWT_SECRET || "",
			{ expiresIn: "3d" },
		);
		// Create response
		const response = NextResponse.json(
			{ message: "Login successfully!" },
			{ status: 200 },
		);
		// Store token in cookie
		response.cookies.set("token", token, {
			httpOnly: true,
		});

		return response;
	} catch (error) {
		return Response.json({ error: error }, { status: 500 });
	}
}
