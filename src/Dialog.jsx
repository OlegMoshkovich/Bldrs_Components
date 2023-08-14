import React, {useState} from 'react';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tabs from './Tabs'

export default function Dialog() {
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
      <Button variant="contained" onClick={handleClickOpen}>
        Open Project
      </Button>
      <MuiDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          Open Project
        </DialogTitle>
        <DialogContent >
          <DialogContentText sx={{paddingBottom:'1em'}} >
            <Tabs
                tabList = {['explore', 'open', 'save']}
                currentTab={(tabNumber)=>setCurrentTab(tabNumber)}
            />
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} startIcon={<GitHubIcon /> }>Open</Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
}
