import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from "@mui/material"
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";


export const SideBar = ({ drawerWidth = 340, window, open, close }) => {
    const container = window !== undefined ? () => window().document.body : undefined;

    const {displayName} = useSelector((state) => state.auth);

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
                    ['Enero','Febrero', 'Marzo', 'Abril'].map(text=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam pariatur molestiae '} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
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
                    ['Enero','Febrero', 'Marzo', 'Abril'].map(text=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam pariatur molestiae '} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
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
