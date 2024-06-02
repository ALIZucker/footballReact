import React, {useEffect, useRef, useState} from 'react';
import styles from './Competition.module.css'
import Competitionitems from "./Competitionitems.js";
import img1 from './../../image/av1.jfif'
import img2 from "./../../image/av2.jfif"
import img3 from "./../../image/av3.jfif"
import img4 from "./../../image/va4.jfif"
import s1 from "./../../image/rightCrisronaldo.png"
import s2 from "./../../image/s3.webp"
import s3 from "./../../image/S1.jpg"
import s4 from "./../../image/S2.webp"


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

    const rightBox = useRef(null);
    useEffect(function () {
        window.addEventListener('scroll', function () {
            if (window.scrollY >= 940 && window.scrollY <= 1200) {

                if (rightBox.current) {
                    rightBox.current.style.width = "50%";
                    rightBox.current.style.transform = "translateX(0)";
                    rightBox.current.style.visibility = "visible";
                }
            }
        })
    }, [])


    const [imgshow, setimageshow] = useState(s3)
    const [text,settext]=useState("Update Kylian Mbappé\'s skills")
    const eventhandler = (num, event) => {
        c1.current.style.backgroundColor = "#7B7B7B";
        c2.current.style.backgroundColor = "#7B7B7B";
        c3.current.style.backgroundColor = "#7B7B7B";
        c4.current.style.backgroundColor = "#7B7B7B";
        event.target.style.backgroundColor = "#FFFFFF";
        switch (num) {
            case 1:
                setimageshow(s1);
                settext('Update Cristiano Ronaldo\'s skills')
                break;
            case 2:
                setimageshow(s2)
                settext('Update Vinicius Junior\'s skills')
                break;
            case 3:
                setimageshow(s3);
                settext('Update Kylian Mbappé\'s skills')
                break;
            case 4:
                setimageshow(s4);
                settext('Update Erling Haaland\'s skills')
                break;
        }

        //rightBox.current.style.backgroundImage = `url(${imgshow})`;


    }

    const c1 = useRef(null)
    const c2 = useRef(null)
    const c3 = useRef(null)
    const c4 = useRef(null)
    return (
        <div ref={rightBox} className={styles.RightBox}
             style={{backgroundImage: `url(${imgshow})`, backgroundRepeat: "no-repeat"}}>
            <div style={{display: "flex", flexDirection: "row"}}>

                <section style={{backgroundColor: "#000", color: "#fff", width: "20%"}}>
                    <div style={{marginTop: "1vh", textAlign: "center"}}>
                        <p ref={c1} onClick={(event) => eventhandler(1, event)} className={styles.cirle}></p>
                        <p ref={c2} onClick={(event) => eventhandler(2, event)} className={styles.cirle}></p>
                        <p ref={c3} onClick={(event) => eventhandler(3, event)} className={styles.cirleActive}></p>
                        <p ref={c4} onClick={(event) => eventhandler(4, event)} className={styles.cirle}></p>

                    </div>
                </section>

                <section className={styles.Righttitle}>
                    <p style={{marginTop: "1vh", fontSize: "1.3vw"}}>{text}</p>

                </section>

            </div>
        </div>
    )
}

export default Competition;