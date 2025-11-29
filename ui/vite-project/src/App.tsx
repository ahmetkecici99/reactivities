import { useEffect, useState } from "react"

function App() {
 const [activities,setActivities]=useState<Activity[]>([]);
  useEffect(()=>{
    fetch("https://localhost:5001/api/activity").then(response=>response.json()).then(data=>setActivities(data))
     return ()  =>{}
  },[])

   return( 
    <>
    {activities.map((activity)=>(
      <li>{activity.title}</li>
    ))}
    </>
  )
}

export default App
