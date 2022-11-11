import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField } from "@mui/material"
import { ImagenGallery } from "../components"


export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}} className='animate__animated animate__fadeIn animate__faster' >
        <Grid item>
            <Typography fontWeight='light' fontSize={39}>04 de noviembre del 2022</Typography>
        </Grid>
        <Grid item>
           <Button color="inherit" >
            <SaveOutlined sx={{fontSize:30 , mr: 1 }} />
            Guardar
           </Button>
        </Grid>
        <Grid container sx={{mt:2, mb:2}} >
            <TextField
              type="text"
              label="Titulo"
              fullWidth
              placeholder='Ingrese un titulo'
            />
            
        </Grid>
         <Grid container sx={{mt:2, mb:2}} >
           
            <TextField
              type="text"
              label="Nota"
              fullWidth
              multiline
              minRows={5}
              placeholder='Escriba una nota...'
            />
        </Grid>

        <Grid container sx={{mt:2, mb:2}}>
            <ImagenGallery/>
        </Grid>
    </Grid>
  )
}
