import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import type { FormEvent } from 'react';


    type Props={
        cancelEditMode:()=>void;
        activity?:Activity;
        submitForm:(activity:Activity)=>void
        
    }

function ActivityForm(props:Props) {

    
    const {cancelEditMode,activity,submitForm}=props
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const data: {[key:string]:FormDataEntryValue}={}
        const formData=new FormData(event.currentTarget)
        formData.forEach((value,key)=>{
                data[key]=value;
        });
        if (activity) data.id=activity.id
 submitForm(data as unknown as Activity )
        
    }
    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant='h5' color='primary'>Create Activity</Typography>
            <Box  onSubmit={handleSubmit} component='form' display="flex" flexDirection='column' gap={3}>
                <TextField name='title' label='title'  defaultValue={activity?.title}/>
                <TextField  name="description"label='description' multiline rows={3} />

                <TextField name="category" label='Category' />

                <TextField name="date" label='DAte ' type='date' />

                <TextField name="city" label='City' />
                <TextField name="venue" label='Venue' />
                <Box display='flex' justifyContent='end' gap={3}>
                  <Button  color='inherit'  onClick={cancelEditMode}  >Cancel </Button>
                                    <Button type='submit'  color='success' variant='contained' >Submit</Button>

                </Box>
      

            </Box>
        </Paper>
    )
}

export default ActivityForm