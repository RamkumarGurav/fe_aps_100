import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "next/dist/server/api-utils";
import connect from "@/app/api/_api_database/db";
import errorHandler from "@/app/api/_api_lib/helpers/errorHandler";
import Album from "@/app/api/_api_models/albumModel";

/* =======================================================================
        GET ONE ALBUM
   ======================================================================= */
export async function GET(req: NextRequest, context: { params: any }) {
  try {
    await connect();
    const id = context.params.id;

    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid or missing album id");
    }

    const album = await Album.findById(id);
    if (!album) {
      throw new ApiError(404, "Album not found");
    }
    return NextResponse.json({ success: true, data: album });
  } catch (error) {
    return errorHandler(error, req);
  }
}
