import React, {useRef,useState} from 'react';
import ReactDOM from "react-dom/client";
import styles from "./menu.module.css"
import imgsrc from '../../image/img.png'
import search from '../../image/download.svg'
import profile from '../../image/download.png'

const Menu = () => {


    return (
        <div className={styles.menuback}>
            <img src={imgsrc} style={{width:"100px",height:"55 px"}}/>
            <MenuItems/>
            <SearchIcon/>
        </div>
    );
};


const MenuItems = () => {
    return (
        <React.Fragment>
            <ul className={styles.itemsMenu}>
                <li>Home</li>
                <li>Competition</li>
                <li>Leagues</li>
                <li>Heros</li>
                <li>About Us</li>
            </ul>
        </React.Fragment>
    )
}
const SearchIcon = () => {
    const  [searchtext,settext]=useState("")

    return (
        <div className={styles.seacrchbox}>
            <section className={styles.searchitems}>
                <img src={search}/>
                <input placeholder="Sreach" type="text" value={searchtext} onChange={(event)=>{
                    settext(event.target.value)
                }}/>
            </section>
            <img src={profile} className={styles.profileimg}/>
        </div>
    )
}
export default Menu;