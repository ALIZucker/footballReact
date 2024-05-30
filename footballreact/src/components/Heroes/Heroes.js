import React, {useRef, useState} from 'react';
import Heroitem from './HeroesItems.js'
import styles from './Heroes.module.css'
import IndividualCompetitionimg from './../../image/av1.jfif'
import TeamCompetitionimg from './../../image/av3.jfif'
import IndividualLeagueimg from './../../image/av2.jfif'
import flag1 from './../../image/france.png'
import flag2 from './../../image/germany.png'
import flag3 from './../../image/italy.png'
import flag4 from './../../image/south-korea (1).png'
import flag5 from './../../image/united-states.png'

const Heroes = () => {
    const [IndividualCompetition, setIndividualCompetition] = useState([{
        id: 1,
        svgadd: flag1,
        name: "AliAsadpuor",
        score: 2204
    }, {
        id: 2,
        svgadd: flag4,
        name: "K.Ceramer",
        score: 1801
    }, {
        id: 3,
        svgadd: flag3,
        name: "mohmadreza-Gohari",
        score: 1200
    }
    ]);

    const IndividualCompetitiontext=useRef("Individual Competition")
//----------------------------------------------
    const [TeamCompetition, setTeamCompetition] =useState([{
        id: 1,
        svgadd: flag5,
        name: "Windy City",
        score: 1204
    }, {
        id: 2,
        svgadd: flag2,
        name: "K.Ceramer",
        score: 1201
    }, {
        id: 3,
        svgadd: flag1,
        name: "Goanzho",
        score: 1200
    }
    ])
    const TeamCompetitiontext=useRef("Team Competition")
//------------------------------------
    const [IndividualLeague, setIndividualLeague] =useState([{
        id: 1,
        svgadd: flag4,
        name: "Anderson",
        score: 1004
    }, {
        id: 2,
        svgadd: flag5,
        name: "Toni",
        score: 501
    }, {
        id: 3,
        svgadd: flag2,
        name: "Arone",
        score: 100
    }
    ])
    const IndividualLeaguetext=useRef("Individual League")
    return (
        <div className={styles.mainBox}>
            <Heroitem sampleState={IndividualCompetition} sampleStatestr={IndividualCompetitiontext} sampleStateimg={IndividualCompetitionimg}/>
            <Heroitem  sampleState={TeamCompetition} sampleStatestr={TeamCompetitiontext} sampleStateimg={TeamCompetitionimg}/>
            <Heroitem  sampleState={IndividualLeague} sampleStatestr={IndividualLeaguetext} sampleStateimg={IndividualLeagueimg}/>
        </div>
    );
};

export default Heroes;