import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activity: Activity;
    cancelSelectedActivity:()=>void;
    openForm:(id:string)=>void
}
function ActivityDetail({ activity,cancelSelectedActivity,openForm }: Props) {
    return (
        <Card sx={{ borderRadius: 3 ,position:"fixed",top:100}}>
            <CardMedia
                component="img"
                src={`/images/categoryImages/${activity.category}.jpg`}
            />

            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight={"light"}>{activity.date}</Typography>

                <Typography variant="body1">{activity.title}</Typography>


            </CardContent>
            <CardActions>
                 <Button color="primary"  onClick={()=>openForm(activity.id)}>Edit</Button>
                 <Button color="inherit" onClick={cancelSelectedActivity}> Cancel</Button>
            </CardActions>
        </Card>

    )
}

export default ActivityDetail