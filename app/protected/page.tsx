import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoutes(){
  const session = await getServerSession()
  if(!session || !session.user){
    redirect("/api/auth/signin")
  }

  return(
    <div>
      This is protected Route
      <br />
      Only authentic person can see this
    </div>
  )
}