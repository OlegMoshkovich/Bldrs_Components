import React, {useState} from 'react'
import './App.css';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel'
import ButtonGroupControls from './ButtonGroupControls'
import ButtonGroupOperations from './ButtonGroupOperations'
import Dialog from './Dialog'
import Tabs from './Tabs'
import AutocompleteExample from './AutoComplete'
import Accordian from './Accordian'
import Logo from './Logo'
import TimeLine from './Timeline'
import Tree from './Tree'


function App({changeTheme, darkTheme}) {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: '20px',
      }}
    >
      <Paper
        sx={{
          padding: '20px',
        }}>
          <Stack
            spacing={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="button">
              Bldrs UI components
            </Typography>
            <Logo/>
            <Tabs
              tabList = {['General', 'Timeline', 'Tree']}
              currentTab={(tabNumber)=>setCurrentTab(tabNumber)}
              variant = 'center'
            />
            {currentTab===0 &&
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <ButtonGroupControls/>
                <ButtonGroupOperations/>
                <Typography variant="overline">
                  <FormControlLabel
                    value="switch"
                    control={<Switch onChange={changeTheme}/>}
                    label={darkTheme ? 'Dark' : 'Light'}
                    labelPlacement="end"
                  />
                </Typography>
                <Dialog/>
                <AutocompleteExample/>
                <Accordian/>
              </Stack>
            }
            {currentTab===1 &&
                <TimeLine/>
            }
            {currentTab===2 &&
                <Tree/>
            }
          </Stack>
      </Paper>
    </Container>
  );
}

export default App;
