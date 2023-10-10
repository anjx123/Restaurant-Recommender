import json

# Open your JSON data file
data_file = open('C:\\Users\\cedar\\Downloads\\archive (4)\\yelp_academic_dataset_business.json', 'r', encoding='utf-8')
data = []
for line in data_file:
   data.append(json.loads(line))

# Open your output file
with open('yelp.sql', 'w', encoding='utf-8') as f:
    # Write the CREATE TABLE query to the output file
    f.write("""
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

    # Iterate over your data
    for item in data:
        # Construct your INSERT query here
        keys = ', '.join(item.keys())
        values = ', '.join(
            f"'{json.dumps(value)}'" if isinstance(value, dict) else f"'{value}'" if value else "NULL"
            for value in item.values()
        )
        query = f"INSERT INTO yelp_table ({keys}) VALUES ({values});\n"
        
        # Write the query to the output file
        f.write(query)
