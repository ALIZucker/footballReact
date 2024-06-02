import React, {useState, useEffect, useRef} from 'react';
import style from './post.module.css'
import imgp from './../../image/Premier-League-Logo.jpg'
import clockimg from './../../image/clock.png'
import userp from './../../image/user.png'
import italyimg from './../../image/Serie-A-logo.avif'
import spainimg from './../../image/LaLiga-logo.png'


const Post = () => {
    const animshow=useRef(null)
    useEffect(()=>{
        window.addEventListener('scroll',function () {
            if (window.scrollY >= 400){
                if (animshow.current){
                    animshow.current.style.opacity="1";
                }

            }
        })

    },[])


    return (
        <div ref={animshow} style={{opacity:"0"}} className={style.boxpost}>

                <Itemspost image={imgp} sad="10" min="15" sani="30"/>
                <Itemspost image={italyimg} sad="12" min="10" sani="40"/>
                <Itemspost image={spainimg} sad="10" min="7" sani="59"/>

        </div>
    );
};

const People = () => {

    return (
        <div className={style.boxpost}>
            <img src={userp}/>
            <span>120</span>

        </div>

    )
}

const Itemspost = (props) => {

    return (
        <div className={style.shadow}  style={{width: "500px", padding: "2vh 3vw"}}>
            <img className={style.imgpost} src={props.image}/>
            <section className={style.footerpost}>
                <ItemspostTime o={props.sad} m={props.min} s={props.sani}/>
                <People/>
            </section>
        </div>
    )
}
const ItemspostTime = (props) => {

    const [count, setCount] = useState(parseInt(props.s))


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        if (count === 0) {
            clearInterval(interval);
        } else {
            return () => clearInterval(interval);
        }

    }, [count]);


    return (
        <div className={style.boxpost}>
            <span><img src={clockimg}/> </span>
            <span>{props.o} d:{props.m} h:{count}m</span>
        </div>
    )
}
export default Post;