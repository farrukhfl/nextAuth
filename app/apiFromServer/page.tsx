import {headers} from 'next/headers'


export default async function APIFromServer(){
const resp = await fetch("http://localhost:3000/api/whoAmI",{
  method: 'GET',
  headers: headers()
})
.then((res)=> res.json())

return(
<div>
<div>
API route from <span>Server</span>


</div>
<div>
  Name: {resp?.name}
</div>
</div>
)
}