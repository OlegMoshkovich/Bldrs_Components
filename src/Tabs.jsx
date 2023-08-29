import * as React from 'react';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Tabs({currentTab, tabList, scrollable=true}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('event', event)
    console.log('newValue', newValue)
    setValue(newValue);
    currentTab(newValue)
  };

  return (
    <MuiTabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
      variant={scrollable?'scrollable':'standard'}
      scrollButtons
      allowScrollButtonsMobile
      textColor="default"
    >
      {tabList.map((tab) => <Tab label={tab} key={tab}/>)}
    </MuiTabs>
  );
}
