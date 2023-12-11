'use client'

import { useEffect, useState } from "react"

export default function APITestPage(){
  const [name, setName] = useState<string>()
useEffect(() => {
fetch('/api/whoAmI')
.then((res)=>res.json)
.then((data)=> setName(data.name))
  
}, [])

return(
  <div>
    <div>
API route from <span>Client</span>


    </div>
    <div>
      Name: {name}
    </div>
  </div>
)

}