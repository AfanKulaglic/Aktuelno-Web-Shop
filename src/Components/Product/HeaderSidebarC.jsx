import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { db } from '../../firebase'
import { uid } from 'uid'
import { set,ref, onValue } from 'firebase/database'

export const HeaderSidebarC = () => {

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

  return (
    <div>
        <div style={{display:'flex',paddingTop:isMobile? '1vh' : '6vh'}}> 
            <HomeOutlinedIcon />
            {item && item.map(item => 
              <>
              {item.name === name &&
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
