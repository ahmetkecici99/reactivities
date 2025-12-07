import { Activity, useEffect, useState } from "react"
import Navbar from "../components/Navbar/Navbar";
import { Box, Container, CssBaseline } from "@mui/material";
import ActivityDashboard from "../../features/Activities/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity]=useState<Activity|undefined>(undefined);
      const [editMode,setEditMode]=useState<boolean>(false);
  useEffect(() => {
    fetch("https://localhost:5001/api/activity").then(response => response.json()).then(data => setActivities(data))
    return () => { } //cleaning code 
  }, [])

  const handleSelectActivity=(id:string)=>{
    setSelectedActivity(activities.find(x=>x.id===id))
  }
  const handleCancelSelectedActivity=()=>{
    setSelectedActivity(undefined)
  }
  const handleOpenForm=(id?:string)=>{
    if(id) handleSelectActivity(id)
    setEditMode(true)
  }
  const cancelOpenForm=()=>{
    setEditMode(false)
  }
  const handleSubmitForm=(activity:Activity)=>{
    if(activity.id){
          setActivities(activities.map(x=>x.id==activity.id?activity:x))
    }else{
      const newActivity={...activity,id:activities.length.toString()}
      setSelectedActivity(newActivity)
        setActivities([...activities,newActivity])
    } 
    setEditMode(false)
  }
  return (
    <Box sx={{bgcolor:"#eeeeee"}}>
      <CssBaseline />
      <Navbar openEditMode={handleOpenForm} />
      <Container >
        <ActivityDashboard
         editMode={editMode} cancelEditMode={cancelOpenForm}
         openForm={handleOpenForm}
          activities={activities} selectActivity={handleSelectActivity} 
          cancelSelectedActivity={handleCancelSelectedActivity} selectedActivity={selectedActivity}
          submitForm={handleSubmitForm}

           />
      </Container>
    </Box>
  )
}

export default App
