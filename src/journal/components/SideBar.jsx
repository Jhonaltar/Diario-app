import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from "@mui/material"
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { SidebarItem } from "./SidebarItem";


export const SideBar = ({ drawerWidth = 340, window, open, close }) => {
    const container = window !== undefined ? () => window().document.body : undefined;

    const {displayName} = useSelector((state) => state.auth);
    const {notes} = useSelector((state) => state.journal);

    return (
        <>
        <Box
        component='nav'
        sx={{width: { sm: drawerWidth }, flexShrink:{sm:0} }}
    >
       <Drawer
                    container={container}
                    variant="temporary"
                    open={open}
                    onClose={close}
                   sx={{display: {xs: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}

            }}
                >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    notes.map(note=>(
                        <SidebarItem key={note.id} {...note} />
                    ))
                }
            </List>
        </Drawer>
        <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Jhon Altamirano
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                     notes.map(note=>(
                        <SidebarItem key={note.id} {...note} />
                    ))
                }
            </List>
        </Drawer>
    </Box>
        
        </>


    )
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
