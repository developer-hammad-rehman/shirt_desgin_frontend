import { NextRequest, NextResponse } from "next/server";

export  async function middleware(request:NextRequest) {
const path = request.nextUrl.pathname
const token  = request.cookies.get("refresh_token")
if ((path == "/auth" ||  path == "/register") && token){
  return NextResponse.redirect(new URL('/' , request.url))
}else if (path == "/card" && !token){
   return NextResponse.redirect(new URL ('/auth' ,request.url))
}else{
    return NextResponse.next()
}
}