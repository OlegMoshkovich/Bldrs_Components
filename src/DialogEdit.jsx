import React, {useState} from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';


export default function DialogEdit() {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(false);
  console.log('currentTab dialog', currentTab)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <IconButton aria-label="edit" size='small' onClick={handleClickOpen}>
          <EditIcon fontSize="inherit" />
        </IconButton>
        <MuiDialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please edit version information using controls below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Version Name"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Description"
            label="Version Description"
            fullWidth
            variant="outlined"
            multiline
            rows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained'>Submit</Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
}
