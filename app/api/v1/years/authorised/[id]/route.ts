import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "next/dist/server/api-utils";
import connect from "@/app/api/_api_database/db";
import errorHandler from "@/app/api/_api_lib/helpers/errorHandler";
import Year from "@/app/api/_api_models/yearModel";

/* =======================================================================
        GET ONE YEAR
   ======================================================================= */
export async function GET(req: NextRequest, context: { params: any }) {
  try {
    await connect();
    const id = context.params.id;

    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid or missing year id");
    }

    const year = await Year.findById(id);
    if (!year) {
      throw new ApiError(404, "Year not found");
    }
    return NextResponse.json({ success: true, data: year });
  } catch (error) {
    return errorHandler(error, req);
  }
}

/* =======================================================================
        UPDATE ONE YEAR
   ======================================================================= */
export async function PATCH(req: NextRequest, context: { params: any }) {
  try {
    await connect();
    const body = await req.json();
    const id = context.params.id;

    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid or missing year id");
    }

    const year = await Year.findById(id);
    if (!year) {
      throw new ApiError(404, "Year not found");
    }

    const updatedYear = await Year.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedYear) {
      throw new ApiError(500, "Error While Updating");
    }

    return NextResponse.json(
      { success: true, data: updatedYear, message: "Updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error, req);
  }
}

/* =======================================================================
        DELETE ONE YEAR
   ======================================================================= */
export async function DELETE(req: NextRequest, context: { params: any }) {
  try {
    await connect();
    const id = context.params.id;

    if (!id || !Types.ObjectId.isValid(id)) {
      throw new ApiError(400, "Invalid or missing year id");
    }

    const year = await Year.findById(id);
    if (!year) {
      throw new ApiError(404, "Year not found");
    }

    const deletedYear = await Year.findByIdAndDelete(id);
    console.log(deletedYear);

    if (!deletedYear) {
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
