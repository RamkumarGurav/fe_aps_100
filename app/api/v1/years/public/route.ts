import connect from "@/app/api/_api_database/db";
import errorHandler from "@/app/api/_api_lib/helpers/errorHandler";
import Year from "@/app/api/_api_models/yearModel";
import { type NextRequest, NextResponse } from "next/server";

/* =======================================================================
          because used the req.nextUrl.searchParams
     ======================================================================= */
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
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const sortBy = searchParams.get("sortBy") || "createdAt";
    // logger(sortBy);
    const sortOrder = searchParams.get("sortOrder") || "desc";
    const status = searchParams.get("status") || "";
    // Construct the filter object based on the status parameter
    const filter = status ? { status } : {};

    // Construct the search query
    // const searchQuery = search ? { $text: { $name: search } } : {};
    // Construct the search query using prepared regular expression
    const searchQuery = search
      ? { fiscalYear: { $regex: new RegExp(search, "i") } } // Case-insensitive search
      : {};

    // Find years based on the filter and search query
    const years = await Year.find({
      ...filter,
      ...searchQuery,
    })
      .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 }) // Sort years based on sortBy and sortOrder
      .skip((page - 1) * limit) // Skip documents based on pagination
      .limit(limit); // Limit the number of documents returned per page

    // Get the total count of years matching the filter and search query
    const foundCount = await Year.countDocuments({
      ...filter,
      ...searchQuery,
    });

    // Get the count of found years
    const totalCount = await Year.countDocuments();

    // Get the count of total active years
    const activeCount = await Year.countDocuments({ status: "active" });

    return NextResponse.json({
      success: true,
      foundCount,
      activeCount,
      currentPage: page,
      totalActivePages: Math.ceil(activeCount / limit),
      data: years,
    });
  } catch (error) {
    return errorHandler(error, req);
  }
}
