import {
	DeleteObjectCommand,
	PutObjectCommand,
	S3Client,
} from "@aws-sdk/client-s3";
import crypto from "crypto";

const AUDIO_MAX_SIZE = 1024 * 1024 * 1024 * 4; //4GB
const IMAGE_MAX_SIZE = 1024 * 1024 * 5; //5MB
const AUDIOTYPE = ["audio/mpeg", "audio/wav"];
const IMAGETYPE = ["image/jpeg", "image/png", "image/webp"];

const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const s3ClientObject:object = {
	region,
	credentials: {
		accessKeyId,
		secretAccessKey,
	},
};
const s3Client = new S3Client(s3ClientObject);
// console.log(uploadParams);
// console.log(s3ClientObject);

export async function uploadFileData(fileBuffer:any, fileName: string, mimetype: string) {
	try {
		const uploadParams = {
			Bucket: bucketName,
			Body: fileBuffer,
			Key: fileName,
			ContentType: mimetype,
		};
        console.log(`uploadParams: ${JSON.stringify(uploadParams)}`);
		const result =  s3Client.send(new PutObjectCommand(uploadParams));
        return result;
	} catch (e:any) {
		console.error(e.message);
	}
}

export function deleteFileData(fileName: string) {
	const deleteParams = {
		Bucket: bucketName,
		Key: fileName,
	};

	return s3Client.send(new DeleteObjectCommand(deleteParams));
}
export function randomName(bytes = 32){
    return crypto.randomBytes(bytes).toString("hex");
}


export function checkFile(file: any) {
  let validatedStatus = true;
  console.log(
    `allowed Image type: ${IMAGETYPE}\n allowed image size: ${IMAGE_MAX_SIZE}\n allowed Audio type: ${AUDIOTYPE}\n allowed audio size: ${AUDIO_MAX_SIZE}\n file type: ${file.type}\n file size: ${file.size}`
  );
  if (
    !(
      (IMAGETYPE.includes(file.type) && file.size < IMAGE_MAX_SIZE) ||
      (AUDIOTYPE.includes(file.type) && file.size < AUDIO_MAX_SIZE)
    )
  ) {
    validatedStatus = false;
  }
  return validatedStatus;
}
export function checkFiles(files: Array<any>) {
  let validatedStatus = true;
  // console.log(
  //   `\n\n\nallowed Image type: ${IMAGETYPE}\n allowed image size: ${IMAGE_MAX_SIZE}\n allowed Audio type: ${AUDIOTYPE}\n allowed audio size: ${AUDIO_MAX_SIZE}\n`
  // );
  // console.log(files);
  for (let i = 0; i < files.length; ++i) {
    // console.log(
    //   `index: ${i}: file type: ${files[i]?.type}, file size: ${files[i]?.size}`
    // );
    if (
      !(
        (IMAGETYPE.includes(files[i].type) && files[i].size < IMAGE_MAX_SIZE) ||
        (AUDIOTYPE.includes(files[i].type) && files[i].size < AUDIO_MAX_SIZE)
      )
    ) {
      validatedStatus = false;
    }
  }
  return validatedStatus;
}

export async function getBuffer(file: File){
	// console.log('run get Buffer');
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer;
}