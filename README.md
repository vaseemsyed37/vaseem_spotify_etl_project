# vaseem_spotify_etl_project

### Architechture diagram

![architechture drawio](https://github.com/user-attachments/assets/01d16313-c19b-4d16-a18a-cf1c3c927ee5)


## Project Overview
The **Vaseem Spotify ETL Project** extracts music data from the Spotify API, transforms the data, and loads it into an AWS-based infrastructure. The project uses Python along with various AWS services like Lambda, S3, and Glue to automate the ETL (Extract, Transform, Load) pipeline. It demonstrates how to automate the extraction of data, process it, and store it for analysis or further processing.

## Architecture
![Architecture Diagram](screenshots/architecture_diagram.png)  
The architecture diagram below shows the flow of data:

1. **Extract**: Data is fetched from the Spotify API using Python and the Spotipy library.
2. **Transform**: The data is processed, cleaned, and transformed for further analysis.
3. **Load**: The transformed data is stored in AWS S3 and cataloged in AWS Glue for further analytics or processing.

## Technologies Used
- **Spotify API**: Used to fetch music data from Spotify.
- **AWS Lambda**: Serverless compute to execute the extraction and transformation logic.
- **AWS S3**: Storage service to save raw and transformed data.
- **AWS Glue**: Data catalog and ETL service for managing the processed data.
- **Spotipy**: Python library to interact with the Spotify API.
- **Boto3**: AWS SDK for Python, used for interacting with AWS services.
- **Python**: Programming language for the project.

## Use Case
The **Vaseem Spotify ETL Project** addresses a common use case of managing and analyzing music data from Spotify for businesses or individuals who want to:

- **Analyze Music Popularity**: Collect data on various tracks and their popularity across different regions and time periods, allowing for the creation of insights around trends in the music industry.
- **Track User Preferences**: By extracting data such as song names, artists, and album details, the system helps in tracking and analyzing user preferences, assisting in marketing or content recommendation systems.
- **Automate Data Collection**: The project automates the extraction of data, significantly reducing the manual effort required to monitor and collect up-to-date music data from Spotify, which is critical for real-time analytics in the music industry.
- **Data Transformation for Business Intelligence**: The data transformation process can help turn raw Spotify data into a form that's usable for business intelligence, providing insights into user behavior, song trends, and more.
  
By automating the process, this ETL pipeline offers an efficient, scalable solution for handling large amounts of Spotify data for analysis, reporting, or building recommendation engines.




