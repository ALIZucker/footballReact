import React, {useState} from 'react';
import img1 from './../../image/img1.png'
import img2 from './../../image/img2.png'
import img3 from './../../image/img3.png'
import next from './../../image/right-arrow.png'
import styles from './News.module.css'
const NewsFootball = () => {

    const [postobj,setpostobj]=useState([{
        title:"King of the Champions League",
        srcAdress:img1,
        text:"Cristiano Ronaldo and yet another record that broke in the Champions League"
        ,date:"Today"
    },{
        title:"Thiago Silva or Superman ?",
        srcAdress:img2,
        text:"Thiago Silva's stunning performance in the last game aroused everyone's admiration"
        ,date:"Yesterday"
    },{
        title:"Real Madrid Brazilian Diamonds !",
        srcAdress:img3,
        text:"Vinicius Jr. won the title of Brazilian Diamond with his unparalleled performance in La Liga ..."
        ,date:"Yesterday"
    }])

    return (
        <div className={styles.mainbox}>
            <Postnews post1={postobj[0]}/>
            <Postnews post1={postobj[1]}/>
            <Postnews post1={postobj[2]}/>
        </div>
    );
};
const Postnews = (prpps) => {

    return (
        <div className={styles.postbox}>
            <img src={prpps.post1.srcAdress } style={{height:"45vh",objectFit:"cover",objectPosition:"center"}}/>
            <h3 className={styles.posttitle}> {prpps.post1.title}</h3>
            <p className={styles.postdescroptoin}>{prpps.post1.text}</p>
            <hr/>
            <section style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"1vh 2vw"}}>
                <p style={{fontSize:"1.1vw"}}>{prpps.post1.date}</p>
                <img src={next}/>
            </section>

        </div>
    )
}

export default NewsFootball;