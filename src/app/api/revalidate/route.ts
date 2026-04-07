import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const secret = request.headers.get("x-sanity-webhook-secret");
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { _type } = body;
  if (_type === "post") {
    revalidatePath("/");
    revalidatePath("/news");
    if (body.slug?.current) revalidatePath(`/news/${body.slug.current}`);
  }
  if (_type === "game") {
    revalidatePath("/");
    revalidatePath("/schedule");
  }
  return NextResponse.json({ revalidated: true });
}
