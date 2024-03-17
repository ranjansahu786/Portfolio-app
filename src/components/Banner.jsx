import React, { useState } from 'react';
import BannerImage from '../assets/Banner_image.svg';
import { Button, Stack } from '@mui/material';
import '../css/Banner.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';



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

function Banner() {

    const [bannerData, usebannerData] = useState({
        name:"Roit Ranjan",
        profile:"Frontend Developer",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui perspiciatis, corporis earum eius, minus, repellat ut distinctio reiciendis saepe deserunt suscipit dignissimos nisi sed nam rem autem cupiditate. Harum, reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui perspiciatis, corporis earum eius, minus, repellat ut distinctio reiciendis saepe deserunt suscipit dignissimos nisi sed nam rem autem cupiditate. Harum, reiciendis.",
        facebookUrl:"",
        instagramUrl:"",
        linkedInUrl:"",
        emailId:"",
        image:BannerImage
    })


    return (
        <ThemeProvider theme={theme}>
    <div className='container-1'>
        <div className='container-2'>
      
        <div className='container-text'>
            <div  className='container-text-insidediv'>
                <div className='description-text'>
                    <h3>Hi, I am</h3>
                    <h1>{bannerData.name}</h1>
                    <h3>I am a {bannerData.profile}</h3>
                    <p>{bannerData.description}</p>
                </div>
                
                <div className='icon-css'>
                    
                        <a className='icon-css2'>
                            <FacebookIcon/>
                        </a>
                        <a className='icon-css2'>
                            <GitHubIcon/>
                        </a>
                        <a className='icon-css2'>
                            <EmailIcon/>
                        </a>
                        <a className='icon-css2'>
                            <InstagramIcon/>
                        </a>
                </div>
                <div className='contact-button'>
                    <Button variant='contained' size='medium' color='ochre' className='contact-button'> Contact Me</Button>
                </div>
            </div>
        </div>
        <div className='container-image-div'>
            <img src={bannerData.image} className='container-image'></img>
        </div>
        </div>
    </div>
    </ThemeProvider>
    );
}

export default Banner;