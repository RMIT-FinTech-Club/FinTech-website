import connectMongoDB from "@/libs/mongodb";
import ResearchPaper from "@/models/researchPaper";
import { NextResponse } from "next/server";
import axios from "../(axios)/axios";

type ResearchPaper = {
    title: string;
    author: string;
    publicationDate: string;
    description: string;
    fileURL: string;
}

export async function POST(req: Request) {
    const { title, author, publicationDate, description, fileURL } = await req.json();
    connectMongoDB();
    const researchPaper = await ResearchPaper.create({ title, author, publicationDate, description, fileURL });
    console.log(fileURL)
    return NextResponse.json({ message: "Research paper created successfully", researchPaper }, { status: 200 });
}

export async function createResearchPaper({ title, author, publicationDate, description, fileURL }: ResearchPaper) {
    return axios.post("/api/research", { title, author, publicationDate, description, fileURL })
        .then((res) => res.data)
        .catch((err) => {
            return Promise.reject(new Error(err.response.data.message));
        })
}
