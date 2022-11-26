import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Container } from 'react-bootstrap';

export const HeaderSidebarC = () => {
    const isMobile = window.innerWidth <= 500;

    const[item,setItem] = useState(null)

    useEffect(() => {
        fetch('https://mocki.io/v1/10e98000-1168-408f-9a8b-f78600746c22')
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
    <div>
        <div style={{display:'flex',paddingTop:isMobile? '1vh' : '6vh'}}> 
            <HomeOutlinedIcon />
            {item && item.map(item => 
              <>
              {item.id === Id &&
                <>
                  <ChevronRightIcon />
                  <p>{item.category}</p>
                  <ChevronRightIcon />
                  <p style={{marginRight:'3vh'}}>{item.name}</p>
                </>
              }
              </>
            )}
        </div>
    </div>
  )
}
