import { getServerSession } from "next-auth";
import { authOptions } from "../route";
import { NextResponse } from "next/server";

export async function GET(){
  const session = await getServerSession(authOptions)
  return NextResponse.json({name: session?.user?.name ?? "Not Logged In"})
}