import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import React ,{useEffect, useState} from 'react'


export default function MyOrder() {
    const [bookingData, setBookingData] = useState([
        [
          {
            "Order_date": "Sat Mar 16 2024"
          },
          {
            "id": "651af362813ebbfd37a60956",
            "name": "Veg Fried Rice",
            "img": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "price": 110,
            "size": "half",
            "qty": 1
          }
        ],
        [
          {
            "Order_date": "Sat Mar 16 2024"
          },
          {
            "id": "651af362813ebbfd37a60958",
            "name": "Chicken Biryani",
            "img": "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
            "price": 170,
            "size": "half",
            "qty": 1
          },
          {
            "id": "651af362813ebbfd37a60955",
            "name": "Chicken Fried Rice",
            "img": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "price": 130,
            "size": "half",
            "qty": 1
          }
        ],
        [
          {
            "Order_date": "Sat Mar 16 2024"
          },
          {
            "id": "651af362813ebbfd37a60956",
            "name": "Veg Fried Rice",
            "img": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "price": 110,
            "size": "half",
            "qty": 1
          },
          {
            "id": "651af362813ebbfd37a60955",
            "name": "Chicken Fried Rice",
            "img": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "price": 130,
            "size": "half",
            "qty": 1
          },
          {
            "id": "651af362813ebbfd37a60958",
            "name": "Chicken Biryani",
            "img": "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
            "price": 170,
            "size": "half",
            "qty": 1
          }
        ]
      ]) 
    let eml=localStorage.getItem("userEmail")
   
    const loadData = async () => {
        let dt = await fetch("http://localhost:5000/api/getBookings", {
            method: "POST",
            headers: { 
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                email:eml
            })
        });
        let pt = await dt.json();
        setBookingData(pt);
        
    }
    useEffect(()=>{
        loadData()
    },[])

    return (
        <div>
        <Navbar/>

        <h2 style={{textAlign:`center`}}>MY TRIPS SO FAR</h2>

      
       <div className="mx-3">
      {bookingData.map((booking, index) => (
        <div key={index} style={{ marginBottom: '50px', border:`.5px solid red`,maxWidth:`40%`,padding:`20px` }}>
          <h2>Order Date: {booking[0].Order_date}</h2>
          <ul>
            {booking.slice(1).map(item => (
              <li key={item.id}>
                <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <p>Size: {item.size}</p>
                  <p>Qty: {item.qty}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

        <Footer/>
        </div>
    )
}
