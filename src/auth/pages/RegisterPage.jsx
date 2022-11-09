import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'


const formData = {
  email:'admin@gmail.com',
  password:'admin123',
  displayName:'Jhon Altamirano'
}

const formValidations ={
  email:[(value)=> value.includes('@'),'El correo debe de tener un @'],
  password:[(value)=> value.length >=6,'La contraseña debe de tener mas de 6 letas'],
  displayName:[(value)=> value.length >=1,'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState, isFormValid, emailValid,passwordValid,displayNameValid} = useForm(formData, formValidations);

  const onSubmit=(event)=>{
    event.preventDefault();
    console.log(formState);
  }


  return (
   <AuthLayout title='Registrar cuenta'>
     <form onSubmit={onSubmit}>
              <Grid container>
                 <Grid item xs={12} sx={{mt:2}}>
                  <TextField
                    label="Nombres completos"
                    type='text'
                    placeholder='Ingrese nombres completos'
                    fullWidth
                    name='displayName'
                    value={displayName}
                    onChange={onInputChange}
                    error={!displayNameValid}
                    helperText={displayNameValid}
                  />
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField
                   
                    label="Correo"
                    type='email'
                    placeholder='Ingrese el correo'
                    fullWidth
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField
                   
                    label="Contraseña"
                    type='password'
                    placeholder='Contraseña'
                    fullWidth
                    name='password'
                    value={password}
                    onChange={onInputChange}
                  />
                </Grid>

                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                    <Grid item xs={12} >
                        <Button type='submit' variant="contained" fullWidth>
                          Crear cuenta
                        </Button>
                    </Grid>
                    
                </Grid>
                <Grid container direction='row' justifyContent='end'>
                  <Link component={RouterLink} color='inherit' to='/auth/login'>
                    Ir al login
                  </Link>
                </Grid>
              </Grid>
            </form>
   </AuthLayout>

      
  )
}
