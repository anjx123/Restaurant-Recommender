import sqlite3
import json

conn = sqlite3.connect('yelp.db')
data_file = open('C:\\Users\\cedar\\Downloads\\archive (4)\\yelp_academic_dataset_business.json', 'r', encoding='utf-8')
data = []
for line in data_file:
   data.append(json.loads(line))

conn.execute("""
    CREATE TABLE yelp_table (
        business_id TEXT, 
        name TEXT, 
        address TEXT, 
        city TEXT, 
        state TEXT, 
        postal_code TEXT, 
        latitude REAL, 
        longitude REAL, 
        stars INTEGER, 
        review_count INTEGER, 
        is_open INTEGER, 
        attributes TEXT, 
        categories TEXT, 
        hours TEXT
    );
""")

for item in data:
    conn.execute("""
        INSERT INTO yelp_table (
            business_id, 
            name, 
            address, 
            city, 
            state, 
            postal_code, 
            latitude, 
            longitude, 
            stars, 
            review_count, 
            is_open, 
            attributes, 
            categories, 
            hours
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, 
    (
        item["business_id"], 
        item["name"], 
        item["address"], 
        item["city"], 
        item["state"], 
        item["postal_code"], 
        item["latitude"], 
        item["longitude"], 
        item["stars"], 
        item["review_count"], 
        item["is_open"], 
        json.dumps(item["attributes"]), 
        item["categories"], 
        json.dumps(item["hours"])
    ))

conn.commit()
conn.close()