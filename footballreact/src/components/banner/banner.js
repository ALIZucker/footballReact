import React from 'react';
import imgbanner from './../../image/fifa.webp'

import styles from './banner.module.css'


const Banner = () => {

    return (
        <div style={{ height:"700px", backgroundImage: `url(${imgbanner})`, backgroundRepeat: "no-repeat"
        ,backgroundPosition:"left",backgroundSize:"cover",paddingLeft:"30px"}}>
            <h1 style={{paddingTop:"130px",fontSize:"100px",color:"#fff"}}>You can be the<br/> king of FIFA</h1>
            <p style={{paddingTop:"30px",fontSize:"35px"}}>The most interesting online FIFA<br/> competitions on the official website of FIFA games</p>
            <div>
                <Buton color="transparent" txtcolor="black" text="league competition" />
                <Buton color="black" txtcolor="#fff" text="individual competition"/>
            </div>
        </div>
    );
};


const Buton=(props)=>{


    return(
        <React.Fragment>
                <button className={styles.boten} style={{color:props.txtcolor,backgroundColor:props.color}}>{props.text}</button>
        </React.Fragment>

    )
}

export default Banner;