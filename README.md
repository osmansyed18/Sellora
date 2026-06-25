# Sellora

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.14.0-brightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue)](https://www.mongodb.com/atlas)
[![Express.js](https://img.shields.io/badge/Express.js-5.2.1-lightgrey)](https://expressjs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow)](https://opensource.org/licenses/ISC)

**Sellora** is a full-stack marketplace web application where users can buy and sell items like cars, bikes, electronics, home items, mobiles, fashion, books, and sports equipment. Built with modern web technologies, it offers a seamless experience for browsing listings, managing items for sale, and engaging with sellers through reviews and ratings.

Whether you're looking to sell unused items or find great deals on pre-owned products, Sellora connects buyers and sellers in a trusted community.

## 🌐 Live Demo


## ✨ Features

- **User Authentication**: Secure signup, login, and session management using Passport.js.
- **Listing Management**: Full CRUD operations for item listings (cars, bikes, electronics, home items, etc.), including image uploads via Cloudinary.
- **Interactive Maps**: Integrated Leaflet maps with OpenStreetMap for visualizing seller locations.
- **Geocoding**: Automatic location geocoding using Geoapify API for accurate meetup locations.
- **Reviews & Ratings**: Users can leave reviews and ratings (1-5 stars) on listings.
- **AI-Powered Overviews**: Generate concise, human-friendly summaries of reviews using Groq AI (Llama model).
- **Responsive Design**: Server-side rendered views with EJS and custom CSS for a mobile-friendly experience.
- **Flash Messages**: Real-time feedback for user actions and errors.
- **Data Validation**: Robust input validation using Joi schemas.
- **Session Persistence**: MongoDB-backed sessions for reliable user state management.
- **MVC Architecture**: Built using MVC Architecture.

## 🛠 Tech Stack

### Backend

- **Node.js** (v22.14.0): Runtime environment.
- **Express.js**: Web framework for routing and middleware.
- **MongoDB & Mongoose**: NoSQL database and ODM for data modeling.
- **Passport.js**: Authentication middleware with local strategy.

### Frontend

- **EJS**: Templating engine for server-side rendering.
- **EJS-Mate**: Layout engine for reusable templates.
- **CSS**: Custom styling for responsive UI.
- **Leaflet.js**: Interactive maps with OpenStreetMap tiles.

### Utilities & Integrations

- **Cloudinary**: Image storage and management.
- **Multer**: File upload handling.
- **Axios**: HTTP client for API requests (geocoding).
- **Groq AI**: AI-powered review summarization.
- **Geoapify**: Location geocoding service.
- **Connect-Flash**: Flash message handling.
- **Connect-Mongo**: Session store for MongoDB.
- **Method-Override**: Support for PUT/DELETE in forms.
- **Dotenv**: Environment variable management.

### Development Tools

- **Nodemon**: Development server with auto-restart (optional).
- **Git**: Version control.

## 📦 Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v22.14.0 or higher): [Download here](https://nodejs.org/).
- **MongoDB**: Either a local instance or a cloud database like [MongoDB Atlas](https://www.mongodb.com/atlas).
- **Git**: For cloning the repository (optional but recommended).

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ShaikAnwargithub/Sellora.git
cd Sellora
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add the following environment variables:

```env
# Database
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/sellora?retryWrites=true&w=majority

# Session Secret
SECRET=your_super_secret_key_here

# Cloudinary (for image uploads)
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Geoapify (for geocoding)
GEOAPIFY_API_KEY=your_geoapify_api_key

# Groq AI (for review overviews)
GROQ_API_KEY=your_groq_api_key
```

**Note**: Replace placeholders with your actual API keys and credentials. Never commit `.env` to version control.

### 4. Seed the Database (Optional)

To populate the database with sample listings:

```bash
node init/index.js
```

### 5. Run the Application

For development (with auto-restart):

```bash
npx nodemon app.js
```

Or simply:

```bash
node app.js
```

The server will start on `http://localhost:8080`. Open this URL in your browser to access the app.

## 📁 Project Structure

```
Sellora/
│
├── app.js                 # Main application entry point
├── cloudConfig.js         # Cloudinary configuration
├── middleware.js          # Custom middleware (authentication, validation)
├── package.json           # Dependencies and scripts
├── schema.js              # Joi validation schemas
├── .env                   # Environment variables (not committed)
│
├── controllers/           # Route handlers
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── init/                  # Database initialization
│   ├── data.js            # Sample data
│   └── index.js           # Seeding script
│
├── models/                # Mongoose schemas
│   ├── listings.js
│   ├── review.js
│   └── users.js
│
├── public/                # Static assets
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       ├── map.js         # Leaflet map integration
│       └── script.js
│
├── routes/                # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/                 # Utility functions
│   ├── ai.js              # AI review overview generation
│   ├── ExpressError.js    # Custom error class
│   ├── geocode.js         # Location geocoding
│   └── wrapAsync.js       # Async error wrapper
│
├── views/                 # EJS templates
│   ├── error.ejs
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   └── listings/
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
│   └── users/
│       ├── login.ejs
│       └── signup.ejs
│
└── README.md              # This file
```

## 🤝 Contributing

We welcome contributions! To get started:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.

Please ensure your code follows the project's style and includes tests if applicable.

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Airbnb's platform design.
- Icons and images sourced from Unsplash.
- Maps powered by OpenStreetMap and Leaflet.
- AI capabilities via Groq.

For questions or support, feel free to open an issue on GitHub.
