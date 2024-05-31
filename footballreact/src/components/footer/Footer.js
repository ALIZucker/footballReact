import React from 'react';
import UpFotter from "./UpFotter.js";
import UnderFooter from "./underFooter.js";


const Footer = () => {
    return (
        <div style={{width:"100%",height:"450px",backgroundColor:"#EEEEEE",display:"flex",flexDirection:"column"}}>
            <UpFotter/>
            <UnderFooter/>
        </div>
    );
};

export default Footer;