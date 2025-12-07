import { Group } from "@mui/icons-material";
import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material";
 
type Props={
    openEditMode:()=>void
}
export default function Navbar({openEditMode}:Props){
    return (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);"}}>
      <Container maxWidth="xl">
          <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <Box>
             <MenuItem sx={{display:"flex",gap:2}}>
               <Group fontSize="large"/>
               <Typography variant="h4" fontWeight='bold'>Reactivities</Typography>
             </MenuItem>
          </Box>
          <Box sx={{display:"flex"}}>
              <MenuItem sx={{fontSize:'1.2rem',textTransform:"uppercase",fontWeight:"bold"}}>
               Activities
             </MenuItem>
              <MenuItem sx={{fontSize:'1.2rem',textTransform:"uppercase",fontWeight:"bold"}}>
               About
             </MenuItem>
              <MenuItem sx={{fontSize:'1.2rem',textTransform:"uppercase",fontWeight:"bold"}}>
               Contact
             </MenuItem>
          </Box>
          <Button onClick={openEditMode} variant="contained" color="warning">Create Activity</Button>
        </Toolbar>
      </Container>
      </AppBar>
    </Box>
     );
}