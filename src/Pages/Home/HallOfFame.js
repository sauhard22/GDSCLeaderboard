import { Typography, TextField, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';

function HallOfFame() {

    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {

        console.log(window['storeData']())
        setData(window['storeData']().filter(function (value, index, arr) {
            return value[0] !== "Student Name";
        }))


        // var filtered = data.filter(function(value, index, arr){ 
        //     return index > 0;
        // });

        // setData2(filtered)
        // console.log(data2)
    }, [])

    return (
        <div style={{
            display: 'felx',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            <Typography style={{
                textAlign: 'center',
                fontFamily: 'poppins',
                fontSize: '3rem',
                letterSpacing: -0.1,
                marginTop: '1rem'
            }}>Hall Of Fame</Typography>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                height: '4rem',
                marginTop: '1rem'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#4286F5',
                    width: '40rem',
                    height: '3.5rem',
                    borderRadius: 15
                }}>
                    <input placeholder="Search" onChange={e => { setSearchTerm(e.target.value) }} style={{
                        outline: 'none',
                        border: 'none',
                        width: '38rem',
                        height: '3rem',
                        borderRadius: 15,
                        paddingLeft: 20
                    }} />
                    <div style={{
                        backgroundColor: '#4286F5',
                        height: '3.5rem',
                        borderTopRightRadius: 12,
                        borderBottomRightRadius: 12,
                        width: '3rem',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <IconButton>
                            <SearchIcon width="2.5rem" style={{
                                color: '#fff'
                            }} />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '2rem',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '80vw',
                    boxShadow: ' -2px 6px 10px -3px rgba(0,0,0,0.2)',
                    height: '2rem',
                    marginBottom: '1.5rem',
                    marginTop: '2rem'
                }}>
                    <Typography style={{
                        width: '25%',
                        textAlign: 'center',
                        fontFamily: 'poppins'
                    }}>NAME</Typography>
                    <Typography style={{
                        width: '25%',
                        textAlign: 'center',
                        fontFamily: 'poppins'
                    }}>SKILL BADGES IN "TRACK 1"</Typography>
                    <Typography style={{
                        width: '25%',
                        textAlign: 'center',
                        fontFamily: 'poppins'
                    }}>SKILL BADGES IN "TRACK 2"</Typography>
                    <Typography style={{
                        width: '25%',
                        textAlign: 'center',
                        fontFamily: 'poppins'
                    }}>PROFILE</Typography>
                </div>
                {data.map((item, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '80vw',
                        height: '2rem',
                        marginTop: '1rem'
                    }}>
                        <Typography style={{
                            width: '25%',
                            textAlign: 'center',
                            fontFamily: 'poppins'
                        }}>{item[0]}</Typography>
                        <Typography style={{
                            width: '25%',
                            textAlign: 'center',
                            fontFamily: 'poppins'
                        }}>{item[6]}</Typography>
                        <Typography style={{
                            width: '25%',
                            textAlign: 'center',
                            fontFamily: 'poppins'
                        }}>{item[7]}</Typography>
                        <Typography style={{
                            width: '25%',
                            textAlign: 'center',
                            fontFamily: 'poppins'
                        }}>PROFILE</Typography>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HallOfFame
