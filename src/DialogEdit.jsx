import React, {useState} from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';


export default function DialogEdit() {
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
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
            Make a chnage
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Field 1"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="Description"
            label="Field 2"
            fullWidth
            variant="outlined"
            multiline
            rows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpenConfirm} variant='outline'>Delete</Button>
          <Button onClick={handleClose}  size='small' variant='contained'>Submit</Button>
        </DialogActions>
      </MuiDialog>
      <MuiDialog open={openConfirm} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm}  size='small' variant='contained'>Confirm</Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
}
