import React, {useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EditIcon from '@mui/icons-material/Edit';


export default function CustomizedTimeline() {
  const [active, setActive] = useState(0)
  return (
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{
          height: '300px',
          width: '400px',
          overflow:'scroll',}}
      >
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color="text.secondary"
          >
              <Typography variant="body1" >
                Version 1
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <IconButton aria-label="edit" size='small'>
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                sx={{cursor: 'pointer'}}
                color={active === 0 ? 'primary' : 'secondary'}
                onClick={()=>setActive(0)}
              >
              <EngineeringIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, lineHeight:'1em' }}>
            <Typography variant="caption">
              Submit drawings to the structural engineer, waiting for the feedback</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color="text.secondary"
          >
              <Typography variant="body1" >
                Version 2
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <IconButton aria-label="edit" size='small'>
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                sx={{cursor: 'pointer'}}
                color={active === 1 ? 'primary' : 'secondary'}
                onClick={()=>setActive(1)}
              >
              <ArchitectureIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2}}>
            <Typography variant="caption" >
              Waiting for the archtiect of record feedback
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="center"
            color="text.secondary"
          >
              <Typography variant="body1" >
                Version 3
              </Typography>
              <Typography variant="caption" >
                10.01.2023
              </Typography>
              <Box>
                <IconButton aria-label="edit" size='small'>
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
                sx={{cursor: 'pointer'}}
                color={active === 2 ? 'primary' : 'secondary'}
                onClick={()=>setActive(2)}
              >
              <ArchitectureIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2}}>
            <Typography variant="caption" >
              Waiting for the archtiect of record feedback
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </Stack>
  );
}
