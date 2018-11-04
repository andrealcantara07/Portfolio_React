import React from 'react';
import './Navigation.css';

const nav = (hash) => {
    return (
        <div>
            <ul className= "navi dropdown">
                <a href={hash.name0}><li>Home</li></a>
                <a href={hash.name1}><li>About Me</li></a>
                <a href={hash.name2}><li>Projects</li></a>
                <a href={hash.name3}><li>Contact</li></a>
            </ul>

        </div>
    )
};



export default nav;