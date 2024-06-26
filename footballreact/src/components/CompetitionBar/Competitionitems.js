import React, {useEffect, useRef} from 'react';
import styles from './Competitionitems.module.css'

import back from "../../image/left-arrow.png";
import next from "../../image/right-arrow.png";

const Competitionitems = (props) => {

    const itemleft=useRef(null)
    useEffect(()=>{
        window.addEventListener("scroll",function () {
            if(window.scrollY>=940 && window.scrollY<=1200){
                if (itemleft.current){

                    itemleft.current.style.width="45vw";
                    itemleft.current.style.visibility="visible";
                    itemleft.current.style.transform="rotateZ(360deg)";

                }
            }
        })
    },[])




    return (
        <div ref={itemleft} className={styles.mainbox}>
            <section style={{margin: "2vh 1vw"}} className={styles.textstyle}>
                <div className={styles.live}></div>
                Live
            </section>
            <section className={styles.profilbox}>
                <ProfleImage person={props.person1}/>
                <p className={styles.textstyle2}>3</p>
                <p className={styles.textstyle2}>-</p>
                <p className={styles.textstyle2}>1</p>
                <ProfleImage person={props.person2}/>
            </section>
            <section className={styles.swapbox}>
                <div>
                    <p className={styles.cirle}></p>
                    <p className={styles.cirle}></p>
                    <p className={styles.cirle}></p>
                    <p className={styles.cirleActive}></p>
                    <p className={styles.cirle}></p>
                    <p className={styles.cirle}></p>
                </div>
                <Buton/>
            </section>
        </div>
    );
};
const Buton = () => {
    return (
        <div>
            <button style={{
                width: "1.5vw", height: "3vh", backgroundColor: "transparent"
                , backgroundImage: `url(${back})`,
                backgroundSize: "contain", backgroundPosition: "center", opacity: "0.7", marginRight: "0.3vw"
            }}></button>
            <button style={{
                width: "1.5vw", height: "3vh", backgroundColor: "transparent"
                , backgroundImage: `url(${next})`,
                backgroundSize: "contain", backgroundPosition: "center", opacity: "0.7"
            }}></button>

        </div>
    );
}

const ProfleImage = (props) => {
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <img src={props.person.src} className={styles.profileimg}/>
            <p className={styles.textstyle}>{props.person.name}</p>
        </div>
    )
}
export default Competitionitems;