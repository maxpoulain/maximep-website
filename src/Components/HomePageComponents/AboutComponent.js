import React from 'react';

function AboutComponent() {
    return (
        <div id="about" className="container about">
            <div className="row" style={{ paddingBottom: "100px", paddingTop: "71px" }}>
                <div className="col-md-12">
                    <h2>A propos de moi</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-img col-md-5">
                    <img src={require("../../images/maxime.jpg")} alt="" style={{ "width": "110%", "height": "auto" }}></img>
                </div>
                <div className="col-md-6 offset-md-1 text-left" style={{ "color": "black" }}>
                    <h3>Maxime Poulain</h3>
                    <p className="text-justify">Je suis passioné par la <b>Data Science</b> ainsi que par le <b>Data Engineering</b> et plus globalement par tout ce qui touche de prêt ou de loin à la <b>«Data»</b> et à <b>l’informatique</b>. Ancien escrimeur de haut niveau, je garde une certaine proximité avec le sport.</p>
                    <p className="text-justify">Je me qualifie également comme <b>dynamique</b>, <b>curieux</b>, <b>friand d’interactions humaines</b> et parfois un peu <b>geek</b>.</p>
                    <p className="text-justify">J'aime particulièrement faire de la veille technologique pour apprendre et découvrir de nouvelles choses que j'essaie d'approfondir au gré de projets personels.</p>
                    <div className="social-icon">
                        <a href="https://fr.linkedin.com/in/poulainmaxime">
                            <span className="icon"><i className="fa fa-linkedin"></i></span>
                        </a>
                        <a href="https://github.com/maxpoulain/">
                            <span className="icon"><i className="fa fa-github"></i></span>
                        </a>
                        <a href="https://twitter.com/MaxPoulain">
                            <span className="icon"><i className="fa fa-twitter"></i></span>
                        </a>
                        <a href="https://momentdonnees.fr">
                            <span className="icon"><i className="fa fa-podcast"></i></span>
                        </a>
                        <span className="text-center">
                            <a className="btn custom_button" href={require("../../images/CV_Maxime_Poulain.pdf")}><i className="fa fa-download" /> Télécharger mon CV</a>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutComponent;