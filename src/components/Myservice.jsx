import React, { useState } from 'react';
import '../css/About.css';
import Frame from '../assets/frame.jpg';
import java from '../assets/java-icon.png';
import springboot from '../assets/springboot-icon.png';
import react from '../assets/react-icon.png';
import oracle from '../assets/oracle-sql-icon.png';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../css/Flipcard.css';
import '../css/Myservice.css';


const theme = createTheme({
    palette: {
      ochre: {
        main: '#ffc400',
        light: '#ffcf33',
        dark: '#b28900',
        contrastText: '#242105',
      },
    },
  });

function Myservice() {

const [aboutData, setaboutData] = useState({
    profile:"Java Developer",
    description1:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur non harum sit eligendi. Exercitationem a praesentium est libero unde dolorem alias iusto. Possimus aspernatur neque totam vitae libero iure unde!",
    description2:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur non harum sit eligendi. Exercitationem a praesentium est libero unde dolorem alias iusto. Possimus aspernatur neque totam vitae libero iure unde!",
    image:Frame
})

    return (
        <ThemeProvider theme={theme}>
        <div>
            <div className='Heading-div'>
                <h1>Skills</h1>
            </div>
            <div className='card-main-div'>
                <div className='each-card'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">Core Java</p>
                        <img src={java} className='img'></img>
                        <p>Hover Me</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">Projects</p>
                        <p>Leave Me</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className='each-card'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">Spring Boot</p>
                        <img src={springboot} className='img'></img>
                        <p>Hover Me</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">Projects</p>
                        <p>Leave Me</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className='each-card'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">React js.</p>
                        <img src={react} className='img'></img>
                        <p>Hover Me</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">Projects</p>
                        <p>Leave Me</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className='each-card'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">Oracle SQL</p>
                        <img src={oracle} className='img'></img>
                        <p>Hover Me</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">Uses..</p>
                        <p>Leave Me</p>
                    </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
        </ThemeProvider>

    );
}

export default Myservice;