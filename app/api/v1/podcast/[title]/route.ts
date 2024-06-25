import Podcast from "@/models/podcast";
import { NextResponse, NextRequest } from "next/server";
export async function GET(req: Request, context: any){
    try {
        const {params} = context;
        const podcast = await Podcast.findOne({title: params.title});
        console.log(`podcast: ${podcast}`);
        return NextResponse.json(podcast, {status: 200})
    } catch (error:any) {
          console.error(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
    }
}