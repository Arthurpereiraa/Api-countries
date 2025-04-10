API Countries 🌍
This project is a web application built with React and Axios, allowing users to view detailed information about various countries around the world. The application consumes the public API RestCountries to fetch data such as flags, currencies, languages, and capitals of countries.

📸 Demo
(Add screenshots or a link to the live application here, if applicable)

🚀 Technologies Used
React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API requests.
RestCountries API: Data source for information about countries worldwide.
HTML, CSS, and JavaScript: For structure, styling, and functionality.
📡 Features
Display a list of countries with basic information.
Allow users to click on a country to view details such as:
Flag
Official name
Capital
Currency
Languages
Search for countries by name to enhance navigation.
🛠️ How to Run the Project
Clone the repository:

bash
git clone https://github.com/Arthurpereiraa/Api-countries.git
cd Api-countries
Install the dependencies:

bash
npm install
Start the development server:

bash
npm start
Open the application in your browser:

Code
http://localhost:3000
🌐 API Request
The application uses the following request to fetch country data:

JavaScript
const response = await axios.get('https://restcountries.com/v3.1/all');
The API returns detailed information about each country, which is displayed in the user interface.

🖼️ Project Structure
Code
src/
├── components/
|   ├── CountryCard.js     # Component for displaying basic country information
|   ├── CountryDetails.js  # Component for displaying detailed information about a selected country
├── App.js                 # Main application component
├── index.js               # React entry point
├── styles/                # CSS files for styling
└── services/
    └── api.js             # Axios configuration
✨ Future Improvements
Add pagination to improve navigation through countries.
Implement filtering by region or language.
Add a dark mode for the interface.
Enhance responsive design for mobile devices.
📄 License
This project is free to use and does not have a specific license.
