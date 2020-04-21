import React from 'react';
import Slide from 'react-slideshow-image';

const slideImages = [
    { "source": "worldcup.png", "size": "100%" },
    { "source": "worldcup1.png", "size": "100%", "style": { "paddingTop": "8%" } },
    { "source": "worldcup2.png", "size": "100%", "style": { "paddingTop": "18%" } },
    { "source": "worldcup3.png", "size": "40%" },
];

const properties = {
    duration: 2500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    autoplay: true,
}

const articles = {
    'boursonomic': { 'title': 'Boursonomic (Work in Progress)', 'date': '16/04/2020', 'categories': ['front', 'back', 'data', 'ops'], 'presentation': <p className="text-justify" style={{ "paddingTop": "3%" }}>Création et développement d’une plateforme en ligne pour un groupe d'amis souhaitant suivre l'évolution de leur portefeuille bousier.</p>, 'technos': ['React', 'Python 3', 'Flask', 'Docker', 'InfluxDB', 'PostgreSQL', 'MongoDB', 'Airflow', 'GitLab'], 'addButon': false, 'addressources': true, 'ressources': <img alt="" src={require("../../images/boursonomic.png")} width="100%" /> },
    'data4good': { 'title': 'Data4Good - WeLearn', 'date': '16/12/2019', 'categories': ['data', 'data science', 'nlp', 'deep learning'], 'presentation': <p className="text-justify" style={{ "paddingTop": "3%" }}>Participation active à la saison 6 de Data For Good et plus particulièrement au projet We Learn proposé par le CRI (Centre de Recherches Interdisciplinaires). Le but du projet était à partir du contenu des pages wikipédias Française de développer un modèle capable de prédire des catégories (~180 000 labels) auxquelles sont liées les pages. Ma contribution fut dans un premier temps de réaliser des analyses exploratoires puis de développer le modèle de classification multi-labels afin de prédire les catégories.</p>, 'technos': ['Python 3', 'Tensorflow', 'Docker', 'Github'], 'addButon': true, 'gitlink': 'https://github.com/CyberCRI/iLearn-d4g-xmtc', 'addressources': false },
    'betit': { 'title': 'Betit', 'date': '01/09/2018', 'categories': ['front', 'back', 'data', 'ops'], 'presentation': <p className="text-justify" style={{ "paddingTop": "3%" }}>Création et développement d’une plateforme en ligne pour un groupe d'amis souhaitant profiter et partager leur passion du football, des paris en ligne et des mathématiques.</p>, 'technos': ['Python 3', 'Django', 'HTML/CSS/JS', 'Docker', 'Airflow', 'Postgresql', 'MongoDB', 'Github'], 'addButon': false, 'addressources': true, 'ressources': <div className="embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" title="betit" src="https://drive.google.com/file/d/1JRxc_mEuep09fLutZJI1tmvlQ9aDT0bl/preview"></iframe></div> },
    'worldcup-dashbord': { 'title': 'WorldCup Dashboard', 'date': '16/06/2018', 'categories': ['front', 'back', 'data', 'ops'], 'presentation': <p className="text-justify" style={{ "paddingTop": "3%" }}>Création de dashboards temps réels pour tous les matchs de la Coupe du Monde de la Fifa 2018 basé sur l'analyse de tweets :  <ul><li>Live score : score en live via scrapping</li><li>Top emojis : emojis les plus présents dans les tweets</li><li>Buzz XI : le XI des joueurs les plus cités par poste</li><li>Most Quoted players : Top 5 des joueurs les plus cités</li><li>Top countries : classement de la provenance géographique des tweets</li><li>Sentiment analysis : Analyse des sentiments des tweets afin d'extraire un score de positivité de chaque équipe</li><li>Tweet generator : Génération de tweets basés sur l'ensemble des tweets récupérés durant les matchs</li></ul></p>, 'technos': ['Python 3', 'Django', 'HTML/CSS/JS/D3JS', 'Docker', 'Kafka', 'Airflow', 'MongoDB', 'Scrapping', 'Keras', 'Github'], 'addButon': true, 'gitlink': 'https://github.com/ClementTr/WorldCup_Dashboard', 'addressources': true, 'ressources': <Slide {...properties}>{slideImages.map(image => <img alt="" key="" src={require("../../images/" + image.source)} width={image.size} style={image.style} />)}</Slide> },
    'fil-rouge': { 'title': 'Projet Fil Rouge', 'date': '10/10/2017', 'categories': ['data', 'data science', 'nlp', 'deep learning', 'ops'], 'presentation': <p className="text-justify" style={{ "paddingTop": "3%" }}>Développement d’un modèle de labellisation thématique de pages web, basé sur le contenu de ces pages afin de cibler les « mobinautes » de manière plus fine en collaboration avec la société Adot (anciennement Adotmob). <ul><li>Scrapping des pages correspondant aux URLs présentes dans les données d’entraînement.</li> <li>Cleaning des données pour en extraire le contenu sémantique.</li> <li>Analyse des données.</li><li>Bibliographie sur le traitement du langage textuel et la classification multi-labels</li><li>Construction d'un pipeline avec l'ensemble du traitement des données du nouveau Tagger</li></ul></p>, 'technos': ['Python 3', 'Scraping', 'AWS', 'Github', 'TensorFlow', 'Kafka'], 'addButon': false, 'addressources': false },
    'nosql': { 'title': 'Projet NoSQL', 'date': '10/12/2017', 'categories': ['data', 'data engineering', 'ops'], 'presentation': <p className="text-justify" style={{ "paddingTop": "3%" }}>Mise en place d'une architecture Big Data dans le cadre du cours de NoSQL : <ul><li>Téléchargement des données GDELT (3.5TB) depuis un bucket S3</li><li>Préprocessing des données avec Spark</li><li>Sauvegarde dans un bucket S3</li><li>Installation d'un cluster Cassandra sur AWS</li><li>Insertion dans la base Cassandra avec Spark</li><li>Visualisation en python (tkinter, folium)</li><li>Réalisation d'un tutoriel détaillant certaines étapes</li></ul></p>, 'technos': ['Scala', 'Spark', 'Cassandra', 'AWS', 'Github', 'Python 3'], 'addButon': true, 'gitlink': "https://github.com/maxpoulain/NoSQL_project", 'addressources': true, 'ressources': <img alt="" src={require("../../images/architecture.png")} width="100%"></img> },
    'wind-turbine': { 'title': 'Etude de données d\'eoliennes', 'date': '05/09/2017', 'categories': ['data', 'data science'], 'presentation': <p className="text-justify" style={{ "paddingTop": "3%" }}>Etude de données provenant d'un champs d'éoliennes et application d'une méthodologie dans le but de suivre la dégradation de performance des éoliennes et ainsi faire de la maintenance prédictive. Le notebook suit une méthodologie issue de la publication suivante: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0960148116307194" style={{ "color": "#C49B66" }}>Wind turbine performance degradation assessment based on a novel similarity metric for machine performance curves</a></p>, 'technos': ['Python 3'], 'addButon': true, 'gitlink': "https://github.com/maxpoulain/Wind_Turbine_Study/blob/master/Wind_Turbine_Study.ipynb", 'addressources': true, 'ressources': <div className="embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" title="presentation" src="https://drive.google.com/file/d/1sqDTaeILdHKDJd-zN8xaot9aOMWl27b_/preview"></iframe></div> },
};

class ArticleBlogComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid blog">
                <div className="container" style={{ backgroundColor: "white", marginTop: "5%", marginBottom: "5%" }}>
                    <div className="row" style={{ "paddingTop": "5%" }}>
                        <div className="col-md-12">
                            <h1 className="blog-title">{articles[this.props.articlename].title}</h1>
                            <h2 className="blog-date">{articles[this.props.articlename].date}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {articles[this.props.articlename].categories.map(tag =>
                                <p className="blog-categorie" key={tag}>{tag}</p>)}
                        </div>
                    </div>
                    <div className="row blog-presentation" style={{ "paddingTop": "5%" }}>
                        <div className="col-md-5 offset-md-1">
                            <h2>Présentation</h2>
                            {articles[this.props.articlename].presentation}
                        </div>
                        <div className="col-md-3 offset-md-2">
                            <h2>Technologies utilisées</h2>
                            <ul className="blog-technos" style={{ "paddingTop": "3%" }}>
                                {articles[this.props.articlename].technos.map(techno =>
                                    <li key={techno}>{techno}</li>)}
                            </ul>
                            {articles[this.props.articlename].addButon ?
                                <div style={{ paddingTop: "10%" }}><h2 >Code Source</h2><a href={articles[this.props.articlename].gitlink}><i className="fa fa-github fa-3x" style={{ 'color': "#C49B66" }}></i></a></div> :
                                <div></div>
                            }
                        </div>
                    </div>
                    {articles[this.props.articlename].addressources ?
                        <div className="row" style={{ "paddingBottom": "5%" }}><div className="col-md-8 offset-md-2" >{articles[this.props.articlename].ressources}</div></div> :
                        <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default ArticleBlogComponent;