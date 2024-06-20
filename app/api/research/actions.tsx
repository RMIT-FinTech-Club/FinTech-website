import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client(
    {
        region: process.env.NEXT_PUBLIC_BUCKET_REGION!,
        credentials: {
            accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY!,
            secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY!,
        }
    }
);

const acceptedTypes = [
    "image/png",
    "image/jpeg",
    "application/pdf",
]

const maxFileSize = 1024 * 1024 * 25 // 25MB

export async function getSignedURL( name: string, type: string, size: number, checkSum: string) {
    // add authenticaiton before upload the file to s3 bucket

    if (!acceptedTypes.includes(type)) {
        return { failure: "Invalid file type" }
    }

    if (size > maxFileSize) {
        return { failure: "File size is too large" }
    }

    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME!,
        Key: name,
        ContentType: type,
        ContentLength: size,
        ChecksumSHA256: checkSum,
        // may be add the metadata user id to know which user upload the file
        
        // Metadata: {
        //     userId: 
        // }
    })

    const signedURL = await getSignedUrl(s3, putObjectCommand, {
        expiresIn: 60
    })

    if (!signedURL) {
        return { failure: "Failed to get signed URL" }
    }

    return { success: { url: signedURL.split("?")[0] } }
}