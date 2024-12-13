import React, { useState, useEffect } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
export default function Home() {
    const [search,setSearch]=useState('')
    const art1 = [
        {
            "_id": "651af362813ebbfd37a60960",
            "CategoryName": "Pizza",
            "name": "Mix Veg Pizza",
            "img": "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
            "options": [
                {
                    "half": "100",
                    "medium": "200",
                    "full": "300"
                }
            ],
            "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
        },

    ]
    const [loc, setLocation] = useState({
        "location": [
          {
            "latitude": "95.23",
            "longitude": "32.42",
            "name": "HSR"
          },
          {
            "latitude": 96.34,
            "longitude": 34.65,
            "name": "Kormangla"
          },
          {
            "latitude": 96.1,
            "longitude": 34.68,
            "name": "Marathahalli"
          },
          {
            "latitude": 95.36,
            "longitude": 33.66,
            "name": "Whitefield"
          },
          {
            "latitude": 95.98,
            "longitude": 33.71,
            "name": "Brookefield"
          },
          {
            "latitude": 93.34,
            "longitude": 32.46,
            "name": "KR PURAM"
          },
          {
            "latitude": 95.56,
            "longitude": 33.67,
            "name": "Hosur"
          },
          {
            "latitude": 96.73,
            "longitude": 34.86,
            "name": "BTM Layout"
          },
          {
            "latitude": 96.33,
            "longitude": 34.97,
            "name": "Electronic City"
          },
          {
            "latitude": 95.76,
            "longitude": 33.95,
            "name": "SMVT Bangalore"
          },
          {
            "latitude": 95.76,
            "longitude": 33.23,
            "name": "KSR Bangalore"
          },
          {
            "latitude": 94.23,
            "longitude": 45.23,
            "name": "Kempagowdan Bus Stand"
          }
        ]
      });
    const [selectedLocation1, setSelectedLocation1] = useState(null);
    const [selectedLocation2, setSelectedLocation2] = useState(null);
    const [distance, setDistance] = useState(0);


    const calculatePrice=()=>{
        return 10
    }

    const loadData = async () => {
        let dt = await fetch("http://localhost:5000/api/getlocation", {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
            mode: 'cors'
        });
        let pt = await dt.json();
        setLocation(pt);
        console.log(loc);
    }
    useEffect(() => {
        loadData();
    }, [])
    const handleOnChange=(ev)=>{
        setSearch(ev.target.value);
    }
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1); // deg2rad below
        const dLon = deg2rad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
      }
    
      // Convert degrees to radians
      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }
    
      // Handle button click to calculate distance
      const handleCalculateDistance = () => {
        if (selectedLocation1 && selectedLocation2) {
          const location1 = loc.location.find(loc => loc.name === selectedLocation1);
          const location2 = loc.location.find(loc => loc.name === selectedLocation2);
    
          if (location1 && location2) {
            const distance = getDistanceFromLatLonInKm(
              location1.latitude,
              location1.longitude,
              location2.latitude,
              location2.longitude
            );
            setDistance(distance);
          }
        }
      };
    


    return (
        <div>
            <Navbar />
            <div>
                <div id="carouselExampleControls" className="carousel slide mb-3" data-bs-ride="carousel" style={{minHeight:'350px',maxHeight:'370px' ,objectFit:'cover !important'}}>
                    <div className="carousel-inner"  style={{maxHeight:'370px'}}>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/1080x300/?burger" className="d-block w-100" alt="..."  />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/1080x300/?dosa" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/1080x300/?pizza" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-caption d-md-block ">
                        <div className="d-flex " role="search" style={{justifyContent:'center', height:'50px'}}>
                            <input className="form-control mx-2" type="search" placeholder='Search for food you like' value={search} aria-label="Search" style={{width:'400px'}} onChange={handleOnChange}/>
                            
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">

            {/* <select class="form-select" aria-label="Default select example">
            {loc.location.map((item,index)=>{
                    return <option key={index}>{item.name}</option> 
                })}
            </select>
            <select class="form-select" aria-label="Default select example">
            {loc.location.map((item,index)=>{
                    return <option key={index}>{item.name}</option> ;
                })}
            </select> */}


<select
        className="form-select"
        aria-label="Select first location"
        onChange={(e) => setSelectedLocation1(e.target.value)}
      >
        <option value="">Select location 1</option>
        {loc.location.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        className="form-select"
        aria-label="Select second location"
        onChange={(e) => setSelectedLocation2(e.target.value)}
      >
        <option value="">Select location 2</option>
        {loc.location.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>




            
            <select class="form-select" aria-label="Default select example">
                    <option>Book Bike</option>
                    <option>Book MINI</option>
                    <option>Book SUV</option>
                    <option>Book SEDAN</option> 
            </select>

            </div>

            <button onClick={handleCalculateDistance}>Get Distance</button>

            <h2>Distance to be travelled is: {distance.toFixed(2)} KM</h2>



            <button onClick={calculatePrice}> Get Price</button>
            
            <Footer />
        </div>
    )
}
