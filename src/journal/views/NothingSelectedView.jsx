import { NoteOutlined } from "@mui/icons-material"

import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
  return (
     <Grid container spacing={0} className='animate__animated animate__fadeIn animate__faster'
    direction='column' alignItems='center' justifyContent='center' sx={{ minHeight:'calc(100vh - 110px)', backgroundColor:'primary.main', borderRadius: 3}}>
      <Grid item xs={12}>
        <NoteOutlined sx={{fontSize:100 , color:'white'}} />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h5" color='white'>Seleccione una nota o crea una nueva</Typography>
        </Grid>
    </Grid>
  )
}
