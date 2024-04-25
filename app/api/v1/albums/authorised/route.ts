import connect from "@/app/api/_api_database/db";
import errorHandler from "@/app/api/_api_lib/helpers/errorHandler";
import Album from "@/app/api/_api_models/albumModel";
import { ApiError } from "next/dist/server/api-utils";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/* =======================================================================
            CREATE ALBUM
   ======================================================================= */
export async function POST(req: NextRequest) {
  try {
    await connect();

    const { yearId, name, file, position, status } = await req.json();
    let albumBody = {
      yearId,
      name,
      file,
      position,
      status,
    };

    const album = new Album({ ...albumBody });
    const newAlbum = await album.save();
    if (!newAlbum) {
      throw new ApiError(500, "Error while creating new album");
    }

    return NextResponse.json(
      { success: true, data: newAlbum },
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error, req);
  }
}

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
    const status = searchParams.get("status") || "";
    // Construct the filter object based on the status parameter
    const filter = status ? { status } : {};

    // Construct the search query
    const searchQuery = search
      ? { name: { $regex: new RegExp(search, "i") } } // Case-insensitive search
      : {};

    // Find albums based on the filter and search query
    const albums = await Album.find({
      ...filter,
      ...searchQuery,
    })
      .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 }) // Sort albums based on sortBy and sortOrder
      .skip((page - 1) * limit) // Skip documents based on pagination
      .limit(limit); // Limit the number of documents returned per page

    // Get the total count of albums matching the filter and search query
    const count = await Album.countDocuments({
      ...filter,
      ...searchQuery,
    });

    // Get the count of found albums
    const totalCount = await Album.countDocuments();

    // Get the count of total active albums
    const activeCount = await Album.countDocuments({ status: "active" });

    return NextResponse.json({
      success: true,
      activeCount,
      totalCount,
      count,
      currentPage: page,
      limit: limit,
      totalPages: Math.ceil(count / limit),
      data: albums,
    });
  } catch (error) {
    return errorHandler(error, req);
  }
}
