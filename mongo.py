from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime

# Connect to MongoDB Atlas
client = MongoClient("your_mongo_uri_here")
db = client['uber_backend']

# Insert sample users data
users_collection = db.users
users_data = [
    {
        "username": "Rajesh Kumar",
        "email": "rajesh.kumar@gmail.com",
        "phone": "+91 9876543210",
        "location": {
            "latitude": 28.6448,
            "longitude": 77.2167,
            "city": "New Delhi",
            "state": "Delhi",
            "country": "India"
        }
    },
    {
        "username": "Sita Sharma",
        "email": "sita.sharma@yahoo.com",
        "phone": "+91 9812345678",
        "location": {
            "latitude": 19.0760,
            "longitude": 72.8777,
            "city": "Mumbai",
            "state": "Maharashtra",
            "country": "India"
        }
    },
    {
        "username": "Amit Patel",
        "email": "amit.patel@outlook.com",
        "phone": "+91 9898765432",
        "location": {
            "latitude": 22.5726,
            "longitude": 88.3639,
            "city": "Kolkata",
            "state": "West Bengal",
            "country": "India"
        }
    }
]
users_collection.insert_many(users_data)

# Insert sample rides data
rides_collection = db.rides
rides_data = [
    {
        "user_id": ObjectId("64a6f6a20f9a2c07bc8bfc42"),
        "pickup_location": {
            "latitude": 28.6448,
            "longitude": 77.2167,
            "city": "New Delhi",
            "state": "Delhi",
            "country": "India"
        },
        "drop_location": {
            "latitude": 28.7331,
            "longitude": 77.1075,
            "city": "Noida",
            "state": "Uttar Pradesh",
            "country": "India"
        },
        "status": "completed",
        "timestamp": datetime(2024, 12, 13, 10, 30)
    },
    {
        "user_id": ObjectId("64a6f6a20f9a2c07bc8bfc43"),
        "pickup_location": {
            "latitude": 19.0760,
            "longitude": 72.8777,
            "city": "Mumbai",
            "state": "Maharashtra",
            "country": "India"
        },
        "drop_location": {
            "latitude": 19.2183,
            "longitude": 72.9780,
            "city": "Thane",
            "state": "Maharashtra",
            "country": "India"
        },
        "status": "in-progress",
        "timestamp": datetime(2024, 12, 13, 11, 0)
    },
    {
        "user_id": ObjectId("64a6f6a20f9a2c07bc8bfc44"),
        "pickup_location": {
            "latitude": 22.5726,
            "longitude": 88.3639,
            "city": "Kolkata",
            "state": "West Bengal",
            "country": "India"
        },
        "drop_location": {
            "latitude": 22.5727,
            "longitude": 88.3442,
            "city": "Salt Lake City",
            "state": "West Bengal",
            "country": "India"
        },
        "status": "cancelled",
        "timestamp": datetime(2024, 12, 13, 12, 0)
    }
]
rides_collection.insert_many(rides_data)

print("Sample data inserted successfully.")
