import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Villas.css';

const villas = [
  {
    name: "Goa",
    image: "https://assets.serenity.co.uk/38000-38999/38650/720x480.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    name: "Mumbai",
    image: "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Gateway-of-India-1.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    name: "Delhi",
    image: "https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    name: "Mukteshwar",
    image: "https://promos.makemytrip.com/altaccoimages/aa_collections_img/mukhteshwar.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    name: "Gokarna",
    image: "https://promos.makemytrip.com/altaccoimages/aa_collections_img/gokarna.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    name: "Coonoor",
    image: "https://promos.makemytrip.com/altaccoimages/aa_collections_img/conoor.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    name: "Kasol",
    image: "https://promos.makemytrip.com/altaccoimages/aa_collections_img/kasol.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    name: "Malvan",
    image: "https://promos.makemytrip.com/altaccoimages/aa_collections_img/malvan.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    name: "Jibhi",
    image: "https://promos.makemytrip.com/altaccoimages/aa_collections_img/jibhi.jpg",
    description: "Homestays - Villas & Apts",
  },
];

const Villas = () => {
    return (
        <div className="villas-page">
        {/* Breadcrumbs */}
        <br /><br />
        <div className="villas-breadcrumbs">
            <Link to="/" className="villas-breadcrumb-link">
                <b>Home</b>&nbsp;&nbsp;
            </Link>{' '}
            &gt; <span className="villas-current-page">&nbsp;&nbsp;<b>Hotels</b></span>
        </div>
  
        {/* Villas List */}
        <div className="villas-container">
          <div className="villas-grid">
            {villas.map((villa, index) => (
              <div className="villas-card" key={index}>
                <img src={villa.image} alt={villa.name} className="villas-image" />
                <h3>{villa.name}</h3>
                <p>{villa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Villas;
