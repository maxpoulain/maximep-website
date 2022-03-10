import React from 'react';
import PaginationComponent from './PaginationComponent';


class BlogCardsComponent extends React.Component {
  constructor() {
    super();

    var items = [
      { id: 1, href: "/panenka", title: "Panenka", 'date': '15/03/2021', project_type: "Projet Perso", description: "Création et développement d’une plateforme serverless en ligne pour faire des pronostiques entre amis à l'occasion de l'EURO2020" },
      { id: 2, href: "http://momentdonnees.fr", title: "Moment Donnée", 'date': '14/07/2019', project_type: "Projet Perso", description: "Création d'un podcast sur la \"Data\" en Français." },
      { id: 3, href: "/boursonomic", title: "Boursonomic", 'date': '16/04/2020', project_type: "Projet Perso", description: "Création et développement d’une plateforme en ligne pour un groupe d'amis souhaitant suivre l'évolution de leur portefeuille bousier." },
      { id: 4, href: "/data4good", title: "Data4Good - WeLearn", 'date': '16/12/2019', project_type: "Projet Perso", description: "Participation à la saison 6 de Data4Good sur le projet WeLearn." },
      { id: 5, href: "/betit", title: "Betit", 'date': '01/09/2018', project_type: "Projet Perso", description: "Création et développement d’une plateforme en ligne pour un groupe d'amis souhaitant profiter et partager leur passion du football, des paris en ligne et des mathématiques." },
      { id: 6, href: "/worldcup-dashboard", title: "WorldCup Dashboard", 'date': '16/06/2018', project_type: "Projet Perso", description: "Création de dashboards temps réels pour tous les matchs de la Coupe du Monde de la Fifa 2018 basé sur l'analyse de tweets" },
      { id: 7, href: "/fil-rouge", title: "Projet Fil Rouge", 'date': '10/10/2017', project_type: "Projet Scolaire", description: "Développement d’un modèle de labellisation thématique de pages web, basé sur le contenu de ces pages afin de cibler les « mobinautes » de manière plus fine en collaboration avec la société Adot." },
      { id: 8, href: "/nosql", title: "Projet NoSQL", 'date': '10/12/2017', project_type: "Projet Scolaire", description: "Mise en place d'une architecture Big Data dans le cadre du cours de NoSQL." },
      { id: 9, href: "/wind-turbine", title: "Wind Turbine Study", 'date': '05/09/2017', project_type: "Stage", description: "Etude de données d'éoliennes et application d'une publication dans le but de faire de la maintenance prédictive." }]

    this.state = {
      items: items,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div id="blog" className="container myblog">
        <div className="row" style={{ paddingBottom: "50px", paddingTop: "71px" }}>
          <div className="col-md-12">
            <h2 className="text-center">Blog</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          {this.state.pageOfItems.slice(0, 2).map(item =>
            <div key={item.id} className="col-md-4">
              <div className="card custom-card">
                <div className="tag">{item.project_type}</div>
                <div className="custom-headcard">
                  <h5>{item.title}</h5>
                  <h6>{item.date}</h6>
                </div>
                <div className="card-body align-items-center d-flex justify-content-center">

                  <p className="card-text align-items-center d-flex justify-content-center">{item.description}</p>
                </div>
                <div className="custom-footcard">
                  <a href={item.href}>En savoir plus..</a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="row d-flex justify-content-center mb-5">
          {this.state.pageOfItems.slice(2, 4).map(item =>
            <div key={item.id} className="col-md-4">
              <div className="card custom-card">
                <div className="custom-headcard">
                  <h5>{item.title}</h5>
                  <h6>{item.date}</h6>
                </div>
                <div className="tag">{item.project_type}</div>
                <div className="card-body align-items-center d-flex justify-content-center">
                  <p className="card-text align-items-center d-flex justify-content-center">{item.description}</p>
                </div>
                <div className="custom-footcard">
                  <a href={item.href}>En savoir plus..</a>
                </div>
              </div>
            </div>
          )}
        </div>
        <nav aria-label="Page navigation example">
          <PaginationComponent items={this.state.items} onChangePage={this.onChangePage} />
        </nav>
      </div>
    );
  }
}

export default BlogCardsComponent;
