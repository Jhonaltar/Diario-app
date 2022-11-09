import { Box } from "@mui/material"
import { useState } from "react";
import { NavBar, SideBar } from "../components";


const drawerWidth = 340;



export const JournalLayout = ({children}) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle=()=>{
        setMobileOpen(!mobileOpen)
    }

  return (
   <Box sx={{display:'flex'}}>
    
        
        <NavBar drawerWidth={drawerWidth} open={true}  close={handleDrawerToggle} />

        <SideBar drawerWidth={drawerWidth} open={mobileOpen}  close={handleDrawerToggle}/>

        <Box component='main' sx={{flexGrow:1,p:3}}>
            
            {children}
        </Box>

   </Box>
  )
}
