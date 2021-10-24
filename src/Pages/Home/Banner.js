import { Typography } from '@material-ui/core'
import React from 'react'
import banner from '../../Assets/Images/banner.png'

function Banner() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '3rem'
        }}>
            <div style={{
                width: '50rem'
            }}>
                <Typography style={{
                    color: '#000',
                    fontFamily: 'poppins',
                    fontWeight: 500,
                    fontSize: '3rem',
                    letterSpacing: 1
                }}>30 Days of Google Cloud</Typography>
                <Typography style={{
                    marginTop: '2rem',
                    fontSize: '1.2rem'
                }}>Kickstart your career in cloud and get hands-on practice on Google Cloud Platform
                </Typography>
                <Typography style={{
                    marginTop: '2rem',
                    fontSize: '1.2rem'
                }}>
                    30 Days of Google Cloud program will provide you an opportunity to kickstart your career in cloud and get hands-on practice on Google Cloud - the tool that powers apps like Google Search, Gmail and YouTube.
                </Typography>
                <Typography style={{
                    marginTop: '2rem',
                    fontSize: '1.2rem'
                }}>
                    Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Campus Facilitators" who are specially trained on Google Cloud to help. 😎
                </Typography>
            </div>
            <div>
                <img style={{
                    width: '40rem',
                    marginLeft: '5rem'
                }} src={banner} alt="banner" />
            </div>
        </div>
    )
}

export default Banner
