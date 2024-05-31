import React from 'react';
import img1 from './../../image/1.png'
import img2 from './../../image/2.png'
import img3 from './../../image/3.png'
import img4 from './../../image/4.png'
import img5 from './../../image/5.png'
import img6 from './../../image/6.png'
const Branding = () => {
    return (
        <div style={{width:"100%",height:"40vh",display:"flex",flexDirection:"row", marginTop:"8vh",
        justifyContent:"space-around"}}>
            <img src={img1} style={{width:"11vw",height:"18vh"}}/>
            <img src={img2} style={{width:"11vw",height:"18vh"}}/>
            <img src={img3} style={{width:"11vw",height:"18vh"}}/>
            <img src={img4} style={{width:"11vw",height:"18vh"}}/>
            <img src={img5} style={{width:"11vw",height:"18vh"}}/>
            <img src={img6} style={{width:"11vw",height:"18vh"}}/>
        </div>
    );
};

export default Branding;