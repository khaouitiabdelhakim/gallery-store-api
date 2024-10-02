# Gallery Store Web Application

This is a full-stack web application built with Vue.js, Tailwind CSS, and MongoDB, where users can upload images, add titles, edit, delete, and view a gallery of images. The backend API is powered by Express.js and Mongoose, providing a simple and efficient way to manage image uploads and storage.

## Project Structure

The project consists of two main parts:

1. **Frontend**: Built using Vue.js and Tailwind CSS for a responsive and modern UI.
   - [Frontend Repository](https://github.com/khaouitiabdelhakim/gallery-store)

2. **Backend**: A RESTful API built with Express.js and MongoDB (Mongoose).
   - [Backend Repository](https://github.com/khaouitiabdelhakim/gallery-store-api)


## Features

- Upload images with titles
- Display all uploaded images in a grid
- Edit image titles
- Delete images
- Responsive design with Tailwind CSS
- Image data stored in MongoDB



## Tech Stack

### Frontend

- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive UIs.
- **Vite**: A fast build tool and development server for modern web applications.
- **Axios**: A promise-based HTTP client to communicate with the backend API.

### Backend

- **Express.js**: A web framework for Node.js.
- **MongoDB**: A NoSQL database for storing images and metadata.
- **Mongoose**: An ODM library for MongoDB and Node.js.
- **Multer**: A middleware for handling multipart/form-data, primarily used for uploading files.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally or a MongoDB Atlas instance

### Frontend Setup

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/khaouitiabdelhakim/gallery-store.git
   cd gallery-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/khaouitiabdelhakim/gallery-store-api.git
   cd gallery-store-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node api.js
   ```

   The API will run on `http://localhost:5000`.

4. MongoDB Setup:
   Make sure you have a running MongoDB instance. The backend connects to the MongoDB instance at `mongodb://localhost:27017/gallery`. If you want to use a different MongoDB URI, modify the connection string in `api.js` accordingly.


## API Endpoints

- **POST /upload**: Upload an image and add a title
  - Request: `multipart/form-data` with `image` (file) and `title` (text)
  - Response: Uploaded image information (ID, title, imagePath)

- **GET /images**: Retrieve all uploaded images
  - Response: List of images (ID, title, imagePath)

- **DELETE /images/:id**: Delete an image by its ID
  - Response: 204 No Content on success



## Frontend Usage

- **Image Upload**: 
  The image upload form allows you to upload an image file and provide a title. Once uploaded, the image is displayed in the gallery grid.

- **Gallery Grid**: 
  All uploaded images are displayed in a grid layout. Each image shows its title and a delete icon to remove it.

- **Deleting an Image**: 
  Clicking the delete icon removes the image from both the frontend and backend.


## Deployment

### Frontend

To build the frontend for production:
```bash
npm run build
```

This will create a `dist/` folder with optimized production files.

### Backend

Ensure your MongoDB instance is running in production, then deploy the backend server (e.g., using Heroku or any cloud provider).


## Contribution

Feel free to fork and submit pull requests! All contributions are welcome.

