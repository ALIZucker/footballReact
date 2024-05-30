import React from 'react';
import styles from './Competition.module.css'
import Competitionitems from "./Competitionitems.js";
import img1 from './../../image/av1.jfif'
import img2 from "./../../image/av2.jfif"
import img3 from "./../../image/av3.jfif"
import img4 from "./../../image/va4.jfif"
import backgro from "./../../image/rightCrisronaldo.png"

const person = [
    {
        src: img1,
        name: "Ali-Asadpour"
    },
    {
        src: img2,
        name: "Mojtaba-Asadpour"
    }, {
        src: img3,
        name: "mohmadreza-Gohari"
    }, {
        src: img4,
        name: "Kasra-Gohari"
    }
]

const Competition = () => {
    return (
        <div className={styles.mainBox}>
            <LeftBox/>
            <RightBox/>
        </div>
    );
};

const LeftBox = () => {

    return (
        <div className={styles.LeftBox}>
            <Competitionitems person1={person[0]} person2={person[1]}/>
            <Competitionitems person1={person[2]} person2={person[3]}/>
        </div>
    )
}

const RightBox = () => {

    return (
        <div className={styles.RightBox} style={{backgroundImage: `url(${backgro})`}}>
            <div style={{display: "flex", flexDirection: "row"}}>

                <section style={{backgroundColor: "#000", color: "#fff", width: "20%"}}>
                    <div style={{marginTop: "1vh",textAlign:"center"}}>
                        <p className={styles.cirle}></p>
                        <p className={styles.cirle}></p>
                        <p className={styles.cirleActive}></p>
                        <p className={styles.cirle}></p>

                    </div>
                </section>

                <section className={styles.Righttitle}>
                    <p style={{marginTop: "1vh",fontSize:"1.3vw"}}>Update Cristiano Ronaldo's skills</p>

                </section>

            </div>
        </div>
    )
}

export default Competition;