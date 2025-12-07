import ActivityList from "./components/ActivityList";
import ActivityDetail from "./components/ActivityDetail";
import ActivityForm from "./components/ActivityForm";
import { Grid } from "@mui/material";

type Props = {
  activities: Activity[];
  selectActivity:(id:string)=>void;
cancelSelectedActivity:()=>void;
selectedActivity?:Activity|undefined;
        cancelEditMode:()=>void;
        editMode:boolean;
        openForm:(id:string)=>void;
        submitForm:(activity:Activity)=>void

};
function ActivityDashboard(props: Props) {
  const { cancelEditMode,activities ,selectActivity,cancelSelectedActivity,selectedActivity,editMode,openForm,submitForm} = props;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid size={7}>
          <ActivityList activities={activities} selectActivity={selectActivity} />
        </Grid>
        <Grid size={5}>
           {editMode &&<ActivityForm activity={selectedActivity} cancelEditMode={cancelEditMode} submitForm={submitForm}/>} 
          {selectedActivity&& !editMode&&  <ActivityDetail  openForm={openForm} activity={selectedActivity} cancelSelectedActivity={cancelSelectedActivity} />}
        </Grid>
      </Grid>
    </div>
  );
}

export default ActivityDashboard;
