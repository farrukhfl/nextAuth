'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"


const ACTIVE_ROUTE = 'py-1 px-2 text-gray-300 bg-gray-700'
const INACTIVE_ROUTE = 'py-1 px-2 text-gray-300 hover:text-gray-300 hover:bg-gray-800'

function AuthButton (){

const {data : session} = useSession()
if (session){
  return(
<>
{session?.user?.name} <br />
<button onClick={()=> signOut()}>Sign Out</button>

</>

  )
}

return (
<>
Not sign in <br />
<button onClick={()=> signIn()}> Sign In </button>
</>
)
}



export default function NavMenu(){
  const pathname = usePathname()
  return(
    <div>
      <AuthButton />
      <hr className="my-4" />
      <ul>
        <Link href='/'>
          <li className={pathname === '/' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
          Home
          </li>
        </Link>
        <Link href='/protected'>
          <li className={pathname === '/protected' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
          Protected ROutes
          </li>
        </Link>
        <Link href='/serverActions'>
          <li className={pathname === '/serverActions' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
          Home
          </li>
        </Link>
          <Link href="/apiFromClient">
          <li
            className={
              pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API From Client
          </li>
        </Link>
        <Link href="/apiFromServer">
          <li
            className={
              pathname === "/apiFromServer" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API From Server
          </li>
        </Link>
      </ul>
    </div>
  )
}