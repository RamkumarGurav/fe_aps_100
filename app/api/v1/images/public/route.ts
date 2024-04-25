import connect from "@/app/api/_api_database/db";
import errorHandler from "@/app/api/_api_lib/helpers/errorHandler";
import Image from "@/app/api/_api_models/imageModel";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/* =======================================================================
    GET ALL WITH PAGINATION
 ======================================================================= */
export async function GET(req: NextRequest) {
  try {
    await connect();

    // Extract query parameters from the request
    const searchParams = req.nextUrl.searchParams;

    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const search = searchParams.get("search") || "";
    const sortBy = searchParams.get("sortBy") || "position";
    // logger(sortBy);
    const sortOrder = searchParams.get("sortOrder") || "asc";

    // Construct the filter object based on the status parameter
    const filter = { status: "active" };

    // Construct the search query
    const searchQuery = search
      ? { imageName: { $regex: new RegExp(search, "i") } } // Case-insensitive search
      : {};

    // Find images based on the filter and search query
    const images = await Image.find({
      ...filter,
      ...searchQuery,
    })
      .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 }) // Sort images based on sortBy and sortOrder
      .skip((page - 1) * limit) // Skip documents based on pagination
      .limit(limit); // Limit the number of documents returned per page

    // Get the total count of images matching the filter and search query
    const count = await Image.countDocuments({
      ...filter,
      ...searchQuery,
    });

    // Get the count of found images

    // Get the count of total active images

    return NextResponse.json({
      success: true,
      count,
      currentPage: page,
      limit: limit,
      totalPages: Math.ceil(count / limit),
      data: images,
    });
  } catch (error) {
    return errorHandler(error, req);
  }
}
