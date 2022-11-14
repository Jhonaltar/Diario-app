import { JournalLayout } from '../layout/JournalLayout'
import {  Toolbar, IconButton } from '@mui/material';
import { NothingSelectedView, NoteView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';



export const JournalPages = ({}) => {
  const {isSaving, active} = useSelector(state=> state.journal);
  const dispatch= useDispatch();
  const onClickNewNota=()=>{
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
        <Toolbar />

        {
          (!!active)
          ? <NoteView/>
          :<NothingSelectedView/>
        }

        <IconButton
          onClick={onClickNewNota}
          disabled={isSaving} 
          size='large' sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hove': {backgroundColor: 'error.main', opacity:0.9},
          position:'fixed',
          right: 50,
          bottom: 50
        }} >
            <AddOutlined/>
        </IconButton>

    </JournalLayout>
  )
}
