import React from 'react';
import { useParams } from 'react-router-dom';
import './HotelDetails.css'; // Create styles for this component

const hotelsData = [
    { id: "goa", city: "Goa", image: "https://www.mistay.in/travel-blog/content/images/2020/06/cover-goa-mistay-hotel-rooms.jpg", description: "Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas" },
    { id: "ooty", city: "Ooty", image: "https://static-blog.treebo.com/wp-content/uploads/2022/12/Summers_unsplash.jpg", description: "Hotels, Resorts, Cottages, Budget Hotels, Homestay" },
    { id:'jaipur',city: "Jaipur", image: "https://cdn.odysseytraveller.com/app/uploads/2020/02/Jal-Mahal.jpg", description: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station" },
    { id:'singapore',city: "Singapore", image: "https://images.hdqwalls.com/wallpapers/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg", description: "Hotels, 5 Star Hotels, Little India, Orchard Road, Hostels, Hotels in Sentosa" },
    { id:'phuket',city: "Phuket", image: "https://a.cdn-hotels.com/gdcs/production109/d1280/8a00a6e3-e4e9-46ba-9a82-36154eaf29ea.jpg", description: "Hotels, Resorts, Budget Hotels, Beachfront Properties" },
    { id:'puri',city: "Puri", image: "https://images.oyoroomscdn.com/uploads/hotel_image/35540/large/503193aa837076fa.jpg", description: "Puri Hotels, OYO Delhi, Alleppey Houseboat, Mahabaleshwar Hotels" },
    { id:'delhi',city: "Delhi", image: "https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg", description: "Hotels, Budget Hotels, Resorts, Near IGI Airport" },
    { id:'mumbai',city: "Mumbai", image: "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Gateway-of-India-1.jpg", description: "Hotels, Budget Hotels, Resorts, Couple Hotels, Near Mumbai Airport" },
    { id:'manali',city: "Manali", image: "https://www.tripsavvy.com/thmb/-P6SntHznvukqlm7YsUQlsw41Jc=/3217x2120/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148864437-5ae5850a8e1b6e003704971f.jpg", description: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road" },
    { id:'bangkok',city: "Bangkok", image: "https://www.tripsavvy.com/thmb/PXFB3CQxowtb61KqwmItEpRbyDo=/4804x3201/filters:fill(auto,1)/wat-phra-kaew-temple-bangkok-5b4637a1c9e77c0037387e14.jpg", description: "Hotels, 3 Star Hotels, 5 Star Hotels, Hostels, Budget Hotels, Hotels in Sukhumvit" },
    { id:'bali',city: "Bali", image: "https://www.holidify.com/images/bgImages/BALI.jpg", description: "Hotels, Resorts, 5 Star Hotels, Budget Hotels, Villas In Bali, Beachfront Properties" },
    { id:'bangalore',city: "Bangalore", image: "https://www.kiwi.com/tips/wp-content/uploads/2023/05/india-karnataka-bangalore-aerial-scaled.jpg", description: "Hotels, Budget Hotels, Resorts, Near Airport, Guhantara Resort" },
    { id:'shimla',city: "Shimla", image: "https://www.clubmahindra.com/blog/media/section_images/shuttersto-026b0fa609daf35.jpg", description: "Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road" },
    { id:'dubai',city: "Dubai", image: "https://i.pinimg.com/736x/57/f5/f5/57f5f5e17fd898db66d157efd2614267.jpg", description: "Hotels, Budget Hotels, 5 Star Hotels, Apart-Hotels, Homestays" },
    { id:'pattaya',city: "Pattaya", image: "https://www.thatbangkoklife.com/wp-content/uploads/2019/09/things-to-do-in-pattaya5.jpg", description: "Hotels, Budget Hotels, 5 Star Hotels, Resorts, Central Pattaya, Beachfront Properties" },
    { id:'maldives',city: "Maldives", image: "https://www.saiiresorts.com/wp-content/uploads/sites/170/2021/03/SLM-masthead-1-3000x2200-1-scaled.jpg", description: "Hotels, 3 Star Hotels, Resorts, 5 Star Hotels, 4 Star Hotels, Hotels in Male" }
];

const HotelDetails = () => {
    const { id } = useParams();
    const hotel = hotelsData.find(hotel => hotel.id === id);

    if (!hotel) {
        return <div>Hotel not found!</div>;
    }

    return (
        <div className="hotel-details-page">
            <img src={hotel.image} alt={hotel.city} className="hotel-detail-image" />
            <div className="hotel-detail-info">
                <h1>{hotel.city}</h1>
                <p>{hotel.description}</p>
            </div>
        </div>
    );
};

export default HotelDetails;
