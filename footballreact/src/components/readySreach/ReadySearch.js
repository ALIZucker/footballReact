import React, {useState} from 'react';
import style from './search.module.css'
import avatar1 from './../../image/av1.jfif'
import avatar3 from './../../image/av3.jfif'
import avatar4 from './../../image/va4.jfif'
import styles from "../banner/banner.module.css";

const ReadySearch = () => {
    return (
        <div className={style.mainbox} >
            <Imgestyle/>
            <Inputtype/>
            <Imgestyle/>
        </div>
    );
};
const Imgestyle = () => {
    return (
        <div style={{position: "relative", width: "30%"}}>
            <img src={avatar1} className={style.imageshow} style={{top: "38vh", left: "3vw"}}/>
            <img src={avatar4} className={style.imageshow} style={{top: "10vh", left: "7vw"}}/>
            <img src={avatar3} className={style.imageshow} style={{top: "29vh", left: "19vw"}}/>
        </div>
    )
};

const Inputtype = () => {
    const [inputvalue, setinputvalue] = useState("");
    const [categvalue, setcategvalue] = useState("");
    return (
        <div>
            <h2 className={style.h2style}>Are You Ready ?!</h2>
            <fieldset className={style.fildsetmain}>
                <legend>ID</legend>
                <input type="text" className={style.inputstyle} placeholder="User Name Or Phone Number"
                       value={inputvalue} onChange={(event) => {
                    setinputvalue(event.target.value)
                }}/>
            </fieldset>
            <fieldset className={style.fildsetmain}>
                <legend>Category</legend>
                <input type="text" className={style.inputstyle} placeholder="Select Your Category"
                       value={categvalue} onChange={(event) => {
                    setcategvalue(event.target.value)
                }}/>
            </fieldset>
            <Buton color="black" txtcolor="#fff" text="individual competition"/>
        </div>
    )
}
const Buton=(props)=>{


    return(
        <React.Fragment>
            <button className={style.botbacg} style={{color:props.txtcolor,backgroundColor:props.color,width:"20vw"
            ,height:"6vh",fontSize:"1vw",marginLeft:"0.2vw",marginTop:"3vh"}}>{props.text}</button>
        </React.Fragment>

    )
}
export default ReadySearch;