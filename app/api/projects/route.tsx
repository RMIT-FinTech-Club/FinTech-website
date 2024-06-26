import { NextResponse } from "next/server";
import axios from "../(axios)/axios";
import connectMongoDB from "@/libs/mongodb";
import ResearchPaper from "@/models/researchPaper";

export async function GET() {
    connectMongoDB();
    const researchPaper = await ResearchPaper.find();
    return NextResponse.json(researchPaper);
}

export async function getProjects() {
    return axios
        .get("/api/projects")
        .then((res) => res.data)
        .catch((err) => {
            return Promise.reject(new Error(err.response.data.message));
        });
}