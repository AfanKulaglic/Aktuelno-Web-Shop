import { Input } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '../Img/logo.png'

export const FooterC = () => {
  const isMobile = window.innerWidth <= 500;
 
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionCtx = () => {
    return (
      <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Podrska
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Nacin placanja i isporuka <br/></Link>
            <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Kako naruciti <br/></Link>
            <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Reklamacije i povrati <br/></Link>
            <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Najcesca pitanja <br/></Link>
            <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Korisnicka podrska</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Uslovi koristenja</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Politika privatnosti <br/></Link>
           <Link style={{marginBottom:'3vh',textDecoration:'none',color:'black'}}>Prava potrosaca <br/></Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Kontakt centar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>060 33 48 311 <br/></Link>
           <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Svakim radnim danom</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Aktuelno</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>O nama <br/></Link>
            <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Postanski partner <br/></Link>
            <Link style={{marginBottom:'3vh',textDecoration:'none',color:'black'}}>Kontakt <br/></Link>
            <Link style={{marginBottom:'3vh',textDecoration:'none',color:'black'}}>Shoppster Smart</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </>
    )
  }

  const DesktopFooter = () => {
    return(
      <>
      <div style={{display:'flex',flexDirection:'column'}}>
        <h5>Podrska</h5>
        <br/>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Nacin placanja i isporuka</Link>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Kako naruciti</Link>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Reklamacije i povrati</Link>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Najcesca pitanja</Link>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Korisnicka podrska</Link>
      </div>
      <div style={{display:'flex',flexDirection:'column',marginLeft:'23vh'}}>
        <h5>Uslovi koristenja</h5>
        <br/>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Uslovi koristenja</Link>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Politika privatnosti</Link>
        <Link style={{marginBottom:'3vh',textDecoration:'none',color:'black'}}>Prava potrosaca</Link>
        <h5>Kontakt centar</h5>
        <br/>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>060 33 48 311</Link>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Svakim radnim danom</Link>
      </div>
      <div style={{display:'flex',flexDirection:'column',marginLeft:'23vh'}}>
        <h5>Aktuelno</h5>
        <br/>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>O nama</Link>
        <Link style={{marginBottom:'1vh',textDecoration:'none',color:'black'}}>Postanski partner</Link>
        <Link style={{marginBottom:'3vh',textDecoration:'none',color:'black'}}>Kontakt</Link>
        <Link style={{marginBottom:'3vh',textDecoration:'none',color:'black'}}>Shoppster Smart</Link>
      </div>
      <div style={{display:'flex',flexDirection:'column',marginLeft:'23vh'}}>
        <h5>OSTANITE POVEZANI</h5>
        <br/>
        <p>Prijavite se na nas Newsletter i ostanite u toku sa najnovijim proizvodima</p>
        <div>
          <Input type='email' placeholder='Vasa email adresa' style={{width:'350px'}} />
          <Button>Prijavi se</Button>
        </div>
      </div>
      </>
    )
  }

  const MobileFooter = () => {
    return (
      <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <Button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} variant='white' style={{width:'100%',fontWeight:'700',backgroundColor:'#e1e2e3',height:'52px',fontSize:'14px'}}>Nazad na vrh</Button>
        <div style={{paddingLeft:'2vh',paddingTop:'3vh'}}>
          <p style={{fontSize:'14px',fontWeight:'500'}}>OSTANITE POVEZANI</p>
          <p>Prijavite se na nas Newsletter i ostanite u toku najnovijim proizvodima</p>
        </div>
        <div style={{margin:'1.5vh'}}>
          <input placeholder='Vas email' type='text' style={{width:'100%',backgroundColor:'white',border:'1px solid transparent',height:'40px',marginBottom:'1vh'}} />
          <Button style={{backgroundColor:'silver',border:'0px solid white',width:'100%',padding:'1vh',fontWeight:'700'}}>Prijavi se</Button>
          <p style={{marginTop:'3vh'}}>Pratite nas na drustvenim mrezama</p>
          <FacebookIcon style={{fontSize:'30px'}}/>
          <InstagramIcon style={{marginLeft:'2vh',fontSize:'30px'}} />
          <AccordionCtx />
        </div>
        <img src={Logo} />        
      </div>
    )
  }

  return (
    <div style={{backgroundColor:'#edeef0',padding:isMobile? '0vh' : '4vh',paddingLeft:isMobile? '0vh' : '18vh',display:'flex'}}>
      {!isMobile &&
      <>
        <DesktopFooter />
      </>
      }
      {isMobile &&
        <MobileFooter/>
      }
    </div>
  )
}
