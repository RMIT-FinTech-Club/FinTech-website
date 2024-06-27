import formidable from "formidable";
import { NextRequest } from "next/server";

export const FormidableError = formidable.errors.FormidableError;

export const parseForm = async (
  req: NextRequest 
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  return await new Promise(async (resolve, reject) => {
   
    const form = formidable();

    
  });
};