import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DSBtn from '../DSBtn'
import logo from '../../Assets/Images/logo.png'
import { makeStyles } from '@material-ui/core/styles';


const navbarContent = [
    "About", "Events", "Team", "Projects", "Blogs"
]

function Navbar() {
    return (
        <AppBar style={{
            backgroundColor: '#ffffff',
            boxShadow: 'none',
        }} position="static">
            <Toolbar style={{
                height: '5rem'
            }}>
                {/*< Typography style={{
                        color: '#000',
                        flexGrow: 1,
                        fontFamily: 'poppins'
                    }}>Navbar</Typography> */}
                <div style={{
                    color: '#000',
                    flexGrow: 1,
                    fontFamily: 'poppins',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <img style={{
                        height: '3rem'
                    }} src={logo} alt="logo" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    {
                        navbarContent.map((item, index) => (
                            <Link style={{
                                textDecoration: 'none'
                            }} key={index} to={`${item}`}><Typography style={{
                                color: '#000',
                                marginLeft: 10,
                                marginRight: 10,
                                fontFamily: 'poppins'
                            }}>{item}</Typography></Link>
                        ))
                    }
                    <DSBtn label="Contact" borderRadius={50}
                        style={{
                            color: '#fff',
                            width: '6rem',
                            backgroundColor: '#156EFF'
                        }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
