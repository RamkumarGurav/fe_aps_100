import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { headers, cookies } from "next/headers";
import { ApiError } from "next/dist/server/api-utils";
import { decrypt, sendCookie } from "../_api_auth/auth";
import errorHandler from "../_api_lib/helpers/errorHandler";

export function isRouteProtectedForMChain(middleware: NextMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    try {
      const headersList = headers();
      const cookieStore = cookies();
      let token;
      //IMPstep1)checking the token exits and getting it
      //Checking whether there is a token in the req.headers authorization fields which starts with 'Bearer' word //then get that token
      if (
        headersList.get("Authorization") &&
        headersList.get("Authorization")?.startsWith("Bearer")
      ) {
        token = headersList.get("Authorization")?.split(" ")[1]; //jwt token that is sent in headers authorization field
      } else if (cookieStore.get("session")) {
        //if there is jwt in cookie
        token = cookieStore.get("session")?.value;
      }

      if (!token) {
        //if there is no token in the req,  means user is not logged in and error is generated
        throw new ApiError(
          401,
          "You are not logged in! Please login to get access"
        );
      }

      const jwtPayload = await decrypt(token);
      const userData = jwtPayload.data;

      if (!userData) {
        throw new ApiError(
          401,
          "The user belonging to this token no longer exists"
        );
      }


      return middleware(req, event);
    } catch (error) {
      return errorHandler(error, req);
    }
  };
}
