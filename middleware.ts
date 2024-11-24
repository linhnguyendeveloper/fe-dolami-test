import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the password
const PASSWORD = "fedev2024test";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow access to public files and the password page
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/static") ||
        pathname === "/password"
    ) {
        return NextResponse.next();
    }

    // Get the password cookie
    const passwordCookie = request.cookies.get("password")?.value;

    // Check if the password is correct
    if (passwordCookie === PASSWORD) {
        return NextResponse.next();
    }

    // Redirect to the password page if not authenticated
    const url = request.nextUrl.clone();
    url.pathname = "/password";
    return NextResponse.rewrite(url);
}
