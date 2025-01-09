# 🌦️ Weather Forecast Web Application:
A Weather Forecast Web Application built using HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API. This responsive and user-friendly application allows users to search for any city and view its current weather, temperature, and date.

#🚀 Features:
🔹 Real-Time Weather Search:
Users can enter a city name in the search box to fetch its current weather data.
Displays location details including the city name and country.
🔹 Weather Details:
Shows the current temperature, minimum and maximum temperature, and weather condition (e.g., Sunny, Cloudy, Rainy).
Data updates dynamically based on the user's input.
🔹 Date and Time:
The app displays the current date in a user-friendly format (e.g., Sunday 19 March 2023).
🔹 Responsive Design:
Fully responsive layout that adapts seamlessly to different screen sizes (mobile, tablet, desktop).
Background image enhances the visual experience of the app.

#🛠️ Technologies Used:
HTML: For structuring the web app.
CSS: For styling and responsiveness.
Flexbox for layout management.
Gradients and shadows for enhanced aesthetics.
JavaScript: For dynamic functionality and API integration.
Fetches weather data using the OpenWeatherMap API.
Implements event listeners and DOM manipulation for interactivity.

#🖥️ Project Structure:
Weather-Forecast-App/
├── index.html          # Main HTML file for the app
├── css/
│   └── style.css       # CSS file for styling the app
├── js/
│   └── script.js       # JavaScript file for app functionality
├── assets/
│   └── bg for wfffff.avif # Background image for the app
└── README.md           # Project documentation

![image](https://github.com/user-attachments/assets/1b01c2ca-8501-4a1a-9b8e-8bfc10cd505d)

#🧩 How to Use:
Clone this repository to your local machine:
git clone https://github.com/yourusername/weather-forecast-app.git
Open the project folder.

Open the index.html file in any modern web browser.

Type the name of a city in the search bar and press "Enter" to fetch real-time weather data.

#🌟 Highlights:
Dynamic Weather Data: The app dynamically fetches data from the OpenWeatherMap API for accurate results.
Responsive Design: The app works seamlessly on different screen sizes.
Real-Time Search: Provides instant weather updates for cities worldwide.

🧑‍💻 How It Works:
Search Functionality:

Users enter the name of a city in the input box.
JavaScript listens for the "Enter" key press event and fetches data from the OpenWeatherMap API.
Data Fetching:

API Endpoint: https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&APPID={your_api_key}
The API returns weather data, including temperature, weather description, and location details.
Dynamic Updates:

The data is dynamically inserted into the DOM to update the city name, weather conditions, temperature, and date.

#📂 API Key Setup:
To use the OpenWeatherMap API:

Sign up at OpenWeatherMap.
Generate your API key.
Replace the API key in script.js:
javascript
Copy code
const api = {
    key: "your_api_key_here",
    base: "https://api.openweathermap.org/data/2.5/"
}

#🔧 Future Enhancements:
5-Day Forecast: Add functionality to display weather for the next 5 days.
Geolocation Support: Use the browser's geolocation to fetch weather data for the user's current location.
Unit Conversion: Provide an option to switch between Celsius and Fahrenheit.
Error Handling: Display user-friendly error messages for invalid city names or network issues.

#👨‍💻 Author:
Name: NIDHI SINGH
GitHub: https://github.com/nidhirajpoot
LinkedIn: https://www.linkedin.com/in/nidhi-singh-rajpoot-ba4067237/

#📜 License:
This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
