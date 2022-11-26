import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom'

export default function TabsC() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
          {value === index && (
              <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
              </Box>
          )}
        </div>
    );
    }

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
    }


    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
    }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const[item,setItem] = useState(null)

    useEffect(() => {
        fetch('https://mocki.io/v1/c7b43f40-9263-409a-9d11-3f3c534a26e6')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setItem(data)
        })
    },[])

    const{id} = useParams()
    const Id = parseInt(id,10)

  return (
    <Box sx={{ width: '100%',marginTop:'5vh'}}>
      {item && item.map(item => 
      <>
        {item.id === Id &&
        <>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="OPIS" {...a11yProps(0)} />
              <Tab label="SPECIFIKACIJE" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <p style={{whiteSpace:'pre-line',verticalAlign:'bottom'}}>{item.description}</p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <p style={{whiteSpace:'pre-line',verticalAlign:'bottom'}}>{item.specification}</p>
          </TabPanel>
        </>
        }
      </>
      )}
    </Box>
  );
}