import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "next/dist/server/api-utils";
import connect from "@/app/api/_api_database/db";
import errorHandler from "@/app/api/_api_lib/helpers/errorHandler";
import Image from "@/app/api/_api_models/imageModel";

/* =======================================================================
        GET ONE IMAGE
   ======================================================================= */
export async function GET(req: NextRequest, context: { params: any }) {
  try {
    await connect();
    const id = context.params.id;

    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid or missing image id");
    }

    const image = await Image.findById(id);
    if (!image) {
      throw new ApiError(404, "Image not found");
    }
    return NextResponse.json({ success: true, data: image });
  } catch (error) {
    return errorHandler(error, req);
  }
}
