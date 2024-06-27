import connectMongoDb from "@/libs/mongodb";
import ResearchPaper from "@/models/researchPaper";
import { NextResponse } from "next/server";

type ResearchPaper = {
	title: string;
	author: string;
	publicationDate: string;
	description: string;
	fileURL: string;
};

export async function POST(req: Request) {
	const { title, author, publicationDate, description, fileURL } =
		await req.json();
	connectMongoDb();
	const researchPaper = await ResearchPaper.create({
		title,
		author,
		publicationDate,
		description,
		fileURL,
	});
	return NextResponse.json({ message: "Research paper created successfully", researchPaper },{ status: 200 });
}

