# Food Delivery Application

A modern, responsive food delivery web application built with React and Vite. This application allows users to browse through various food items, add them to cart, and place orders.

![Food Delivery App](/Users/farhan/Developer/Food-Delivery/frontend/public/header_img.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [State Management](#state-management)
- [Routes](#routes)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Food Categories**: Browse food items by categories (Salad, Rolls, Deserts, etc.)
- **Shopping Cart**: Add and remove items from cart with quantity control
- **Order Placement**: Simple order placement flow
- **User Authentication**: Login functionality (UI ready, backend implementation pending)
- **Mobile App Promotion**: Section to promote mobile app downloads

## Tech Stack

- **Frontend**:
  - React 19
  - React Router 7
  - CSS (with component-scoped styling)
  - Vite (for fast development and optimized builds)
- **Backend**:
  - Backend implementation is planned but not yet implemented

## Project Structure

The project follows a component-based architecture with the following structure:

```
Food-Delivery/
├── frontend/                  # Frontend React application
│   ├── public/                # Public assets
│   ├── src/                   # Source code
│   │   ├── assets/            # Images and static assets
│   │   ├── components/        # Reusable UI components
│   │   │   ├── AppDownload/   # App download promotion component
│   │   │   ├── ExploreMenu/   # Menu category component
│   │   │   ├── FoodDisplay/   # Food items display component
│   │   │   ├── FoodItem/      # Individual food item component
│   │   │   ├── Footer/        # Footer component
│   │   │   ├── Header/        # Header component
│   │   │   ├── LoginPopup/    # Login modal component
│   │   │   └── Navbar/        # Navigation bar component
│   │   ├── context/           # React context for state management
│   │   ├── pages/             # Application pages
│   │   │   ├── Cart/          # Shopping cart page
│   │   │   ├── Home/          # Home page
│   │   │   └── PlaceOrder/    # Order placement page
│   │   ├── App.jsx            # Main application component
│   │   ├── main.jsx           # Application entry point
│   │   └── index.css          # Global styles
│   ├── index.html             # HTML template
│   ├── package.json           # Frontend dependencies and scripts
│   └── vite.config.js         # Vite configuration
└── backend/                   # Backend implementation (planned)
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohd-Farhan-Khan/Food-Delivery.git
   cd Food-Delivery
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Preview production build:
   ```bash
   npm run preview
   ```

## Components

### Core Components

- **Navbar**: Navigation bar with cart icon and login button
- **Header**: Hero section with search functionality
- **ExploreMenu**: Food category selection
- **FoodDisplay**: Displays food items based on selected category
- **FoodItem**: Individual food item card with add/remove functionality
- **AppDownload**: Promotion section for mobile app downloads
- **Footer**: Site footer with social links and information
- **LoginPopup**: Modal for user authentication

### Pages

- **Home**: Landing page with hero section, food categories, and food items
- **Cart**: Shopping cart with order summary
- **PlaceOrder**: Order placement and delivery details

## State Management

State management is handled using React Context API through the `StoreContext` which provides:

- Food item list data
- Cart items management
- Add/remove cart functionality
- Cart total calculation

## Routes

The application uses React Router for navigation with the following routes:

- `/` - Home page
- `/cart` - Shopping cart page
- `/order` - Order placement page

## Future Enhancements

- Backend implementation with Node.js/Express
- User authentication and profile management
- Order history tracking
- Payment gateway integration
- Real-time order tracking
- Reviews and ratings system
- Admin dashboard for restaurant owners

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
