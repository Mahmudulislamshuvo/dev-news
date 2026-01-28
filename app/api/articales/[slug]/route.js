import { getAllArticales, getArticaleBySlug } from "@/lib/getArticales";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  const slug = params.slug;
  const singleArticale = getArticaleBySlug(slug);

  if (!singleArticale) {
    return NextResponse.json(
      {
        data: null,
        message: "Articale not found",
      },
      { status: 404 },
    );
  }
  return NextResponse.json(
    { data: singleArticale, message: "Articale fetched successfully" },
    { status: 200 },
  );
}

export async function DELETE(_request, { params }) {
  const slug = params.slug;
  const allArticales = getAllArticales();

  const index = allArticales.findIndex((artical) => artical.slug === slug);

  if (index === -1) {
    return NextResponse.json(
      { data: null, message: "Articale not found" },
      { status: 404 },
    );
  }

  const deletedArticale = allArticales.splice(index, 1);
  // Placeholder for DELETE logic
  return NextResponse.json(
    {
      data: deletedArticale,
      message: `Articale with slug /${slug} deleted successfully`,
    },
    { status: 200 },
  );
}

export async function PATCH(request, { params }) {
  const slug = params.slug;
  const allArticales = getAllArticales();
  const index = allArticales.findIndex((artical) => artical.slug === slug);
  if (index === -1) {
    return NextResponse.json(
      { data: null },
      { message: "Articale not found" },
      { status: 404 },
    );
  }

  const updateinfo = await request.json();

  const { title, description } = updateinfo;

  if (title || description) {
    allArticales[index] = {
      ...allArticales[index],
      ...(title && { title }),
      ...(description && { description }),
    };
    return NextResponse.json(
      {
        data: allArticales[index],
        message: "Articale updated successfully",
      },
      { status: 201 },
    );
  }

  return NextResponse.json(
    { data: null, message: "No valid fields to update" },
    { status: 400 },
  );
}
