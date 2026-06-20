# Recipe Browser

A React-based Recipe Browser that allows users to explore recipes by category and view detailed information for each recipe. The application uses React Router to navigate between pages, enabling users to browse recipe cards on the home page and access complete recipe details through dynamic routes.

Recipes can be filtered by category, including Breakfast, Lunch, and Dessert, providing a simple and interactive browsing experience.

## What I Learned

Through this project, I gained practical experience working with React Router and building a multi-page React application.

* Using **React Router** to create multiple pages within a React application.
* Creating **dynamic routes** using route parameters.
* Using the **useParams** hook to access URL parameters.
* Building detail pages based on dynamic data from the URL.
* Creating navigation links with **Link** from React Router.
* Implementing conditional styling by applying classes based on component state.
* Structuring larger components into multiple sections for better readability and maintainability.

## Features

* Browse recipes on the home page.
* Filter recipes by category.
* View recipe details on a separate page.
* Dynamic routing using recipe IDs.
* Display recipe information including:

  * Image
  * Category
  * Description
  * Preparation time
  * Servings
  * Difficulty level
  * Ingredients list
  * Step-by-step instructions
* Navigation back to the home page.
* Responsive card layout.

## Technologies Used

* React
* React Router
* JavaScript (ES6+)
* CSS3
* Vite

## Prerequisites

* Node.js (version 18 or later recommended)
* npm (included with Node.js)

## How to Run It Locally

To run this project on your local machine:

* Clone the repository:

  git clone https://github.com/HassanNass/recipe-browser.git

* Navigate to the project directory:

  cd recipe-browser

* Install dependencies:

  npm install

* Start the development server:

  npm run dev

Open your browser and visit the URL displayed in the terminal (typically http://localhost:5173 for Vite projects).
