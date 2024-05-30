import React from 'react';
import backimg from './../../image/heroimg.png'
import styles from './HerosItem.module.css'


const HeroesItems = (props) => {
    return (
        <div style={{backgroundImage:`url(${backimg})`}} className={styles.mainboxitem}>
            <p className={styles.textBoxHead} >{props.sampleStatestr.current}</p>

            <ProfleImage imgme={props.sampleStateimg}/>
            <ShowItems source={props.sampleState}/>
            <Botn/>

        </div>
    );
};
const Botn=(prpos)=>{

    return(
        <div className={styles.botbox}>
            <p className={styles.uertext}>+ 1500 User</p>
            <button className={styles.botbacg}>See More</button>

        </div>

    )
}


const ShowItems = (props) => {
    const mapvalue=props.source.map(value => {

       return( <section className={styles.rowitems}>
           <span className={styles.rowitemstext}>{value.id}</span>
            <img src={value.svgadd} style={{width:"25px",height:"25px"}}/>
           <p style={{width:"12vw"}} className={styles.rowitemstext}> {value.name}</p>
           <p className={styles.rowitemstext}>{value.score}</p>

            </section>)
    })
    return(
        <div style={{display:"flex",flexDirection:"column",marginTop:"12vh"}}>
            {mapvalue}
        </div>
    )
}
const ProfleImage = (props) => {
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column",marginTop:"7vh"}}>
            <svg width="68" height="36" viewBox="0 0 68 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.5 13C19.7246 24.0968 24.6077 20.3396 32.5 9.5M36 9.5C43.0873 21.595 48.1673 23.5912 60.5 13M6 13.5L10.5 34C28.4701 29.6749 38.5414 29.6982 56.5 34L62.5 13.5"
                    stroke="black" stroke-width="3"/>
                <circle cx="6" cy="9" r="4.5" stroke="black" stroke-width="3"/>
                <circle cx="34" cy="6" r="4.5" stroke="black" stroke-width="3"/>
                <circle cx="62" cy="10" r="4.5" stroke="black" stroke-width="3"/>
            </svg>

            <img src={props.imgme} className={styles.profileimg}/>
            <p className={styles.textstyle}>King Of Individual Competition</p>
        </div>
    )
}
export default HeroesItems;