import React, { useState } from 'react';
import '../css/About.css';
import Frame from '../assets/frame.jpg';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

function About() {

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
                <h1>About Me</h1>
            </div>
            <div>
                <div className='About-body-div'>
                    <div>
                        <img src={aboutData.image} className='About-body-image'></img>
                    </div>
                    <div className='About-body-text'>
                        <p>{aboutData.description1}</p>
                        <p>{aboutData.description2}</p>
                        <div className=''>
                         <button className='Readmore-button'> <b>
                            Read more..</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ThemeProvider>
    );
}

export default About;