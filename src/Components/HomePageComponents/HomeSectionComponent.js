import React from 'react';
import TyperComponent from './TyperComponent';

function HomeSectionComponent() {
    return (
        <div id="home" className="container-fluid home justify-content-center align-items-center ">
            <div className="row">
                <h2 className="titlename">Maxime Poulain</h2>
            </div>
            <div className="row titlejob">
                <TyperComponent heading="" dataText={['Head of Data', 'Data Engineer', 'ML Engineer', 'Data Scientist', 'Developpeur', 'Geek', 'Podcaster', 'Sportif', 'Photographe', 'Voyageur', 'Cuisinier']} />
            </div>
        </div>
    )
}

export default HomeSectionComponent;