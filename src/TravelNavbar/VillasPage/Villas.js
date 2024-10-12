import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Villas.css';

const villas = [
  {
    id:"goa",
    name: "Goa",
    image: "https://assets.serenity.co.uk/38000-38999/38650/720x480.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    id:"mumbai",
    name: "Mumbai",
    image: "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Gateway-of-India-1.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    id:"delhi",
    name: "Delhi",
    image: "https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    id:"mukteshwar",
    name: "Mukteshwar",
    image: "https://oneday.travel/wp-content/uploads/one-day-mukteshwar-local-sightseeing-tour-package-private-cab-header.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    id:"gokarna",
    name: "Gokarna",
    image: "https://static2.tripoto.com/media/filter/tst/img/OgData/1537153061_faacebook2_11.png",
    description: "Homestays - Villas & Apts",
  },
  {
    id:"coonoor",
    name: "Coonoor",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Coonoor-cover-picture.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    id:"kasol",
    name: "Kasol",
    image: "https://www.milesexpedition.com/wp-content/uploads/2021/11/Kasol.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    id:"malvan",
    name: "Malvan",
    image: "https://th.bing.com/th/id/R.75c6e7059005f0f0d23118d11c7e4a61?rik=FTakuUUyBYNlig&riu=http%3a%2f%2fwww.malvancity.com%2fwp-content%2fuploads%2f2012%2f04%2fmalvan_jetty.jpg&ehk=Vx6f4UZqfbVnDcZlaiuF4foZpvGTkoVmv1KS1lB4ruU%3d&risl=&pid=ImgRaw&r=0.jpg",
    description: "Homestays - Villas & Apts",
  },
  {
    id:"jibhi",
    name: "Jibhi",
    image: "https://nomadsofindia.com/wp-content/uploads/2022/06/Jibhi-Tirthan-Valley-1024x768.jpg",
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
            &gt; <span className="villas-current-page">&nbsp;&nbsp;<b>Villas</b></span>
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
