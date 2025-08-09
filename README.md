# Food Delivery Application

A modern, responsive full‑stack food delivery web application. Users can browse food items, add them to a cart, and (future) place orders. An admin panel lets administrators manage the food catalog (create/list/delete). The backend persists data in MongoDB via Mongoose and supports image uploads with Multer.

![Food Delivery App](frontend/public/header_img.png)

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

- **Frontend (User App)**:
   - React 19
   - React Router 7
   - Vite
   - Context API for state
- **Admin Panel**:
   - React 19 + Vite (separate app under `admin/`)
- **Backend**:
   - Node.js + Express
   - MongoDB Atlas (or self‑hosted) via Mongoose
   - Multer (disk storage) for image uploads
   - CORS, JSON body parsing
- **Tooling / Other**:
   - dotenv for environment variables
   - Static file serving for uploaded images

## Project Structure

The project follows a component-based architecture with the following structure:

```
Food-Delivery/
├── frontend/                  # User-facing React application
│   ├── public/
│   └── src/
├── admin/                     # Admin panel (manage food items)
│   ├── public/
│   └── src/
├── backend/                   # Express + MongoDB API server
│   ├── config/
│   │   └── db.js              # Mongoose connection helper
│   ├── controllers/
│   │   └── foodController.js  # CRUD handlers for food items
│   ├── models/
│   │   └── foodModel.js       # Mongoose schema/model
│   ├── routes/
│   │   └── foodRoute.js       # Express router & multer setup
│   ├── uploads/               # Stored image files (git-tracked dir, files ignored)
│   └── server.js              # App entrypoint
├── .env.example               # Sample environment variables (no secrets)
└── README.md
```

### Database Schema (Food Item)

| Field       | Type   | Required | Description              |
|-------------|--------|----------|--------------------------|
| name        | String | Yes      | Display name             |
| description | String | Yes      | Short description        |
| price       | Number | Yes      | Price in chosen currency |
| image       | String | Yes      | Stored filename          |
| category    | String | Yes      | Category (e.g. Salad)    |

Images are uploaded via `multipart/form-data` (field name: `image`) and saved to `backend/uploads/` with a timestamp prefix.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohd-Farhan-Khan/Food-Delivery.git
   cd Food-Delivery
   ```

2. Install dependencies (frontend, admin, backend):
   ```bash
   cd frontend && npm install && cd ..
   cd admin && npm install && cd ..
   cd backend && npm install && cd ..
   ```

3. Copy environment template and configure:
   ```bash
   cp .env.example .env        # or create backend/.env if you scope it there
   # Edit MONGODB_URI with your credentials
   ```

4. Start backend API server:
   ```bash
   cd backend
   npm start
   # Server: http://localhost:4000
   ```

5. In another terminal, start frontend user app:
   ```bash
   cd frontend
   npm run dev
   ```

6. (Optional) start admin panel:
   ```bash
   cd admin
   npm run dev
   ```

## Usage (Frontend Build Scripts)

From within `frontend/` or `admin/`:

1. Development server:
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

## API (Backend)

Base URL (dev): `http://localhost:4000`

| Method | Endpoint        | Description                 | Body / Params                      |
|--------|-----------------|-----------------------------|------------------------------------|
| POST   | /api/food/add   | Add a new food item         | multipart/form-data: name, description, price, category, image(file) |
| GET    | /api/food/list  | List all food items         | –                                  |
| DELETE | /api/food/remove| Remove a food item          | JSON: `{ "id": "<foodId>" }`      |
| GET    | /images/<file>  | Access uploaded image files | –                                  |

Sample add request (curl):
```bash
curl -X POST http://localhost:4000/api/food/add \
   -F "name=Pizza" \
   -F "description=Cheesy" \
   -F "price=9.99" \
   -F "category=Main" \
   -F "image=@/path/to/pizza.png"
```

## Environment Variables

Create a `.env` (or `backend/.env`) with:
```
MONGODB_URI="mongodb+srv://USERNAME:PASSWORD@cluster-host/db-name"
PORT=4000
```

Do NOT commit real credentials. The directory `backend/uploads/` keeps a `.gitkeep` so the folder exists, while actual uploaded files are ignored by `.gitignore`.

## Future Enhancements

- Authentication (JWT sessions for users/admin)
- Order placement + persistence
- Payment gateway integration
- Real-time order status (WebSockets)
- Reviews & ratings
- Image storage offload to S3/Cloudinary
- Admin role management & analytics

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
