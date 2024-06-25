import Podcast from "@/models/podcast";
import { NextResponse, NextRequest } from "next/server";
import { randomName, uploadFileData, checkFile, checkFiles, getBuffer } from "./actions";
import connectMongoDB from "@/libs/mongodb";


connectMongoDB();

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const title = form.get("title");
    const description = form.get("description");
    const publisher = form.get("publisher");
    const publicationDate = form.get("publicationDate");
    const language = form.get("language");
    let authors = form.getAll("authors[]");
    const authorFiles = form.getAll("authorFiles[]");
    const audioFile = form.get("audioFile");
    const thumnailFile = form.get("thumnailFile");
    authors = authors.map(item=>JSON.parse(item));

    if (
      checkFile(audioFile) &&
      checkFile(thumnailFile) &&
      checkFiles(authorFiles)
    ) {
      const uploadObject = {
        title: title,
        description: description,
        authors: authors,
        publisher: publisher,
        publicationDate: publicationDate,
        language: language,
      }
      const audioFileName = randomName();
      const thumnailFileName = randomName();

      await uploadFileData(await getBuffer(audioFile), audioFileName, audioFile.type);
      await uploadFileData(await getBuffer(thumnailFile), thumnailFileName, thumnailFile.type);
      uploadObject.thumnailFileUrl =`https://d2prwyp3rwi40.cloudfront.net/${thumnailFileName}`;
      uploadObject.audioFileUrl=`https://d2prwyp3rwi40.cloudfront.net/${audioFileName}`;
      for(let i = 0; i < authorFiles.length; ++i){
        const authorFileName = randomName();
        await uploadFileData(await getBuffer(authorFiles[i]), authorFileName,authorFiles[i].type);
        uploadObject.authors[i].profileImageUrl = `https://d2prwyp3rwi40.cloudfront.net/${authorFileName}`;
      }
      const podcast = await Podcast.create(uploadObject);
      podcast.save();
      return NextResponse.json({message: "create podcast success!"}, {status: 201});
    } else {
    }
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
