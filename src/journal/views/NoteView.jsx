import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField  } from "@mui/material"
import { useRef } from "react"
import { useEffect } from "react"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'
import { useForm } from "../../hooks/useForm"
import { ImagenGallery } from "../components"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"


export const NoteView = () => {
  const dispatch=useDispatch()
  const {active:note, messageSaved,isSaving}= useSelector(state=>state.journal)

   const { body, title, date,imageUrls,onInputChange,formState } =useForm(note);

   const dateString = useMemo(()=>{
    const newDate = new Date(date);
    return newDate.toUTCString() 
   },[date]);

   const fileInputRef= useRef();

   useEffect(() => {
      dispatch(setActiveNote(formState))
   }, [formState])

   useEffect(() => {
      if (messageSaved.length > 0 ) {
        Swal.fire('Nota actualizada',messageSaved, 'success')
      }
   }, [messageSaved])
   
   
   const onSaveNote=()=>{
    dispatch(startSaveNote());
   }

   const onFileInputChange = ({target})=>{
      if (target.files === 0 )  return;
      console.log('subiendo archivos');
      dispatch(startUploadingFiles(target.files))
    }

    const onDelete=()=>{
      dispatch(startDeletingNote());
    }

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}} className='animate__animated animate__fadeIn animate__faster' >
        <Grid item>
            <Typography fontWeight='light' fontSize={39}>{dateString}</Typography>
        </Grid>
        <Grid item>

            <input 
              type='file'
              multiple
              ref={fileInputRef}
              onChange={onFileInputChange}
              style={{display:'none'}}
            />

            <Button color="primary" disabled={isSaving} onClick={()=> fileInputRef.current.click()}>
              <UploadOutlined sx={{fontSize:30 , mr: 1 }}/>
              Subir imagenes
            </Button>

           <Button disabled={isSaving} color="inherit" onClick={onSaveNote} >
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
              name='title'
              value={title}
              onChange={onInputChange}
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
              name='body'
              value={body}
              onChange={onInputChange}
            />
        </Grid>
        {/* onClick={onDelete} */}
        <Grid container justifyContent='end'>
            <Button onClick={onDelete} sx={{mt: 2}} color='error'>
              <DeleteOutline/>
              Eliminar Nota
            </Button>
        </Grid>

        <Grid container sx={{mt:2, mb:2}}>
            <ImagenGallery 
            images={note.imageUrls}
            />
        </Grid>
    </Grid>
    
  )

  
}
