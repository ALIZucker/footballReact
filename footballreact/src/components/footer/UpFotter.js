import React, {useState} from 'react';
import style from './UpFooter.module.css'

const UnderFooter = () => {
    return (
        <div className={style.mainbox}>
            <Search/>
            <svg width="2" height="232" viewBox="0 0 2 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="2" height="232" fill="#C4C4C4"/>
            </svg>
            <ListItems/>
            <svg width="2" height="232" viewBox="0 0 2 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="2" height="232" fill="#C4C4C4"/>
            </svg>
            <ListItems/>
            <section></section>
        </div>
    );
};
const Search = () => {
    const [search, setsearch] = useState("")
    return (

        <div className={style.upersearch}>
            <h2 className={style.titlesearch}>Do you want to be informed?</h2>
            <p className={style.discriptionsearch}>Dear friend, if you want to be informed about the news, the latest events and updates, and act as soon as possible for the contest, enter your email here so that we can send you the latest news.</p>
            <section style={{display:"flex" ,flexDirection:"row",marginTop:"6vh"}}>
                <input className={style.inputt} type="text" value={search} onChange={(event)=>{setsearch(event.target.value)}}/>
                <span className={style.boton} onClick={()=> alert("salam")}>Send</span>
            </section>
        </div>
    )
};

const ListItems=()=>{
    return(
        <div className={style.listbox}>
            <h2>EXPLORE</h2>
            <ul className={style.list}>
                <li>Technical</li>
                <li>About FIFA</li>
                <li>Competitions</li>
                <li>Legal & Compliance</li>
                <li>Football Development</li>
            </ul>
        </div>
    )
}


export default UnderFooter;