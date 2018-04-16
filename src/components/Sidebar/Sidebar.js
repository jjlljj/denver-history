import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Sidebar.css';

export class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      building: {
        "id": 603,
        "ldmk_num": 21,
        "ldmk_name": "Navarre Building",
        "aka_name": "Bricker Collegiate Institute",
        "ord_num": 470,
        "ord_year": 1971,
        "address_line1": "1727 Tremont Street",
        "address_line2": "1725 Tremont Place",
        "situs_num": 1725,
        "situs_st": "Tremont",
        "situs_type": "PL",
        "historic_dist": 30,
        "state_hist_num": "5DV.124",
        "year_built": "1880",
        "arch_bldr": null,
        "document": null,
        "photo_link": "https://anschutzcollection.org/wp-content/uploads/2017/10/Navarre_2.png",
        "notes": null,
        "gis_notes": null,
        "description": "This iconic building was designed by Frank E. Edbrooke. It was built as a school for girls, called The Brinker Collegiate Institute after its owners, Joseph and Elizabeth Brinker. They owned and operated the school from 1880 (eventually turning it into a coeducational facility) until 1886. Forced into foreclosure after Joseph Brinker’s death, the building was sold to two of the West’s most notorious gamblers. They turned it into Hotel Richelieu, a gentleman’s club. Only six months later, the new owners lost the building in a card game to two other known gamblers, Ed Chase and Vaso Chucovich. They renamed the building “The Navarre” after King Henry Navarre (1553-1610), a devotee of decadence and high living. The building was turned into a bordello, offering public dining and private gambling on the bottom two floors, and more illicit pleasures on the top two levels. The Brown Palace Hotel was built across the street in 1892, and an underground tunnel was constructed between the two buildings to share coal. Legend says that the tunnel was also used to discreetly transport gentlemen guests between the two buildings. At some point in the past The Navarre’s entrance to the tunnel was sealed off, and the length of the tunnel possibly even filled in with masonry to prevent the street overhead from collapsing. In 1904, Denver Mayor Robert Speer was elected. Bowing to public pressure, he put an end to gambling and prostitution in Denver. The Navarre became a respectable dining club, although legend has it that illicit activity continued well into the 1920s. In the 1990s, The Navarre was renovated and restored it to its Victorian roots and the Anschutz Collection of Western American art moved in.",
        "address_id": null,
        "created_at": "2018-04-11T22:00:39.855Z",
        "updated_at": "2018-04-11T22:00:39.855Z",
        "situs_dir": null,
        "lon": "-104.988045901496",
        "lat": "39.7447201469119"
      }
    };
  }

  // building data fetch
  // add building's 'id' to that action

  render() {
    const { ldmk_name, year_built, address_line1, photo_link, description } = this.props.building
    console.log(photo_link)
    return (
      <section className="sidebar">
        <div className="banner-img-wrap">
          <img src={`http://denver-history.herokuapp.com/images/${photo_link}`} />
        </div>
        <div className="content-wrap">
          <h2>{ ldmk_name }</h2>
          <ul>
            <li>Built: { year_built }</li>
            <li>Address: { address_line1 }</li>
          </ul>
          <p>{ description }</p>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ building }) => ({
  building
})

export default connect(mapStateToProps, null)(Sidebar)
