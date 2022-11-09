import {  MenuOutlined, LogoutOutlined} from "@mui/icons-material"
import { AppBar,Toolbar, IconButton, Typography, Button } from "@mui/material"



export const NavBar = ( {close, drawerWidth}) => {
  return (
     <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={close}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Diario
          </Typography>
          <Button color="inherit" startIcon={<LogoutOutlined />}>Cerrar sesion</Button>
        </Toolbar>
      </AppBar>
  )
}

