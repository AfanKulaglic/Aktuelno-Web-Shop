import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom'
import { db } from '../../firebase'
import { uid } from 'uid'
import { set,ref, onValue } from 'firebase/database'

export default function TabsC() {
  const[item,setItem] = useState([])
  const isMobile = window.innerWidth <= 500;

  useEffect(() => {
    onValue(ref(db), snapshot => {
      setItem([])
      const data = snapshot.val()
      if(data !== null) {
        Object.values(data).map((todo) => {
          setItem(oldArray => [...oldArray,todo])
        })
      }
    })
  },[])

  const{name} = useParams()
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
  }

  return (
    <Box sx={{ width: '100%',marginTop:'5vh'}}>
      {item && item.map(item => 
      <>
        {item.name === name &&
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