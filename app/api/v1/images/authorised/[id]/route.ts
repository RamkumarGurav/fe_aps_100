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

/* =======================================================================
        UPDATE ONE IMAGE
   ======================================================================= */
export async function PATCH(req: NextRequest, context: { params: any }) {
  try {
    await connect();
    const body = await req.json();
    const id = context.params.id;

    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid or missing image id");
    }

    const image = await Image.findById(id);
    if (!image) {
      throw new ApiError(404, "Image not found");
    }

    const updatedImage = await Image.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedImage) {
      throw new ApiError(500, "Error While Updating");
    }

    return NextResponse.json(
      { success: true, data: updatedImage, message: "Updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error, req);
  }
}

/* =======================================================================
        DELETE ONE IMAGE
   ======================================================================= */
export async function DELETE(req: NextRequest, context: { params: any }) {
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

    const deletedImage = await Image.findByIdAndDelete(id);
    console.log(deletedImage);

    if (!deletedImage) {
      throw new ApiError(500, "Error while Deleting ");
    }

    return NextResponse.json(
      { success: true, message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error, req);
  }
}
