import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["bn", "en"];
let defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguages = request.headers.get("accept-language") ?? undefined;

  let headers = { "accept-language": acceptedLanguages };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  //
  const pathName = request.nextUrl.pathname;

  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`,
  );

  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(new URL(`/${locale}${pathName}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
