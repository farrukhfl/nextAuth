'use client'

import { useState } from "react"

export default function whoAmIButton({
  whoAmIactions,
}:{
  whoAmIactions:() => Promise<string>
}){
const [name, setName] = useState<string>()
return(
  <div>
    <button onClick={async()=>{
      setName(await whoAmIactions())
    }}>
      Who Am I?
    </button>
    {name && <div>You are {name}</div>  }
  </div>
)

}
