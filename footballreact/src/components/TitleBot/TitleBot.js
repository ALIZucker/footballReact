import React from 'react';
import styles from './title.module.css'
import  back from './../../image/back (1).png'
import next from './../../image/next.png'
const TitleBot = (props) => {

    if (props.isboten==="true"){
        return (
            <div className={styles.titleBox}>
                <div className={styles.text} style={{fontWeight: "300"}}>Upcoming <p style={{fontWeight: "600"}}>Competitions</p></div>

                <Buton/>
            </div>
        );
    }else {
        return (
            <div className={styles.titleBox}>
                <div className={styles.text} style={{fontWeight: "300"}}>Upcoming <p style={{fontWeight: "600"}}>Competitions</p></div>

            </div>
        );
    }

};

const Buton = () => {
    return (
        <div>
            <button style={{
                width: "4vw", height: "7.4vh", backgroundColor: "transparent"
                , backgroundImage: `url(${back})`,
                backgroundSize: "contain", backgroundPosition: "center", opacity: "0.7",marginRight:"0.3vw"
            }}></button>
            <button style={{
                width: "4vw", height: "7.4vh", backgroundColor: "transparent"
                , backgroundImage: `url(${next})`,
                backgroundSize: "contain", backgroundPosition: "center", opacity: "0.7"
            }}></button>

        </div>
    );
}

export default TitleBot;