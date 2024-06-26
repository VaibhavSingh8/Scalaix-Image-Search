# Image Search App

## Overview

This project is an Image Search web application developed using Scalaix, React, and various technologies to fetch and display images from the Unsplash library. It provides a user-friendly interface for searching images and viewing detailed information.

- **Live Link**: [Scalaix Image Search App](https://scalaix-image-search.netlify.app/)
- **GitHub Repository**: [Scalaix Image Search GitHub](https://github.com/VaibhavSingh8/Scalaix-Image-Search)

## Features

- **Search Bar**: Allows users to input search terms to find images.
- **Image Cards**: Displays search results with basic information for each image.
- **Image Details Page**: Provides detailed information and full-size view for selected images.
- **Responsive Design**: Ensures usability across various devices using custom CSS breakpoints and Material-UI's responsive components.
- **Error Handling**: Gracefully manages and displays errors that may occur during searches or image loading.

## Dependencies

- **Unsplash API**: Provides access to a vast library of free, high-quality images.
- **Material-UI (MUI)**: Offers pre-built React components for consistent UI design and responsiveness.
- **Axios**: Facilitates HTTP requests to interact with the Unsplash API.
- **Custom CSS**: Implements additional styling and responsive breakpoints beyond Material-UI defaults.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VaibhavSingh8/Scalaix-Image-Search.git
   cd Scalaix-Image-Search
   ```
2. **Ensure you have Node.js and npm installed.**
    ```bash
   npm install
    ```
3. **Set up environment variables:**
    Create a .env file in the root directory and add your Unsplash API access key:
   ```bash
   VITE_ACCESS_KEY=your_access_key_here
   ```
  Replace your_access_key_here with your actual Unsplash API access key.
  
4. **  Run the app:**
   ```bash
     npm run dev
   ```
   This app should now run on **"http://localhost:5173/"**

Usage:
Enter search terms in the search bar to find images.
Click on an image card to view detailed information.
