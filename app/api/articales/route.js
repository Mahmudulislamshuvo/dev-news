import { getAllArticales } from "@/lib/getArticales";
import { NextResponse } from "next/server";

export function GET(_request) {
  const asrticles = getAllArticales();

  return NextResponse.json(
    {
      data: asrticles,
      message: "Articales fetched successfully",
    },
    { status: 200 },
  );
}
