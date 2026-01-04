# Estate Agent Client-Side Web Application

This is a responsive Single Page Application (SPA) developed using React JS and Vite for the module **5COSC026W Advanced Client-Side Web Development**. The application allows users to search for properties, view details, and manage a favorites list using a drag-and-drop interface.

## 🚀 Features

### 1. Advanced Search Engine
* **Multi-Criteria Filtering:** Users can filter properties by **Type**, **Price Range**, **Bedroom Count**, **Date Added**, and **Postcode** simultaneously.
* **React Widgets:** Utilized `react-datepicker` for a user-friendly date selection interface.

### 2. Property Details & Interaction
* **Image Gallery:** A dynamic gallery allowing users to switch between a main view and thumbnails.
* **Tabbed Interface:** Organized property details (Description, Floor Plan, Map) using `react-tabs`.
* **Favorites System:**
    * **Drag & Drop:** Users can drag property cards from the results and drop them into the favorites sidebar.
    * **Global State:** Favorites persist across pages using React Context API.
    * **Management:** Users can add, remove, and clear favorites easily.

### 3. Technical & Design
* **Responsive Layout:** Features two distinct layouts (Side-by-Side for Desktop vs. Stacked for Mobile/Tablet) using hand-written media queries.
* **Testing:** Includes **6 meaningful tests** using Vitest/Jest and React Testing Library to verify critical application logic.
* **Modern UI:** Designed with a clean, flat aesthetic using CSS variables, flexbox/grid layouts, and smooth page transitions.

---

## 🛠️ Tech Stack

* **Core:** React JS (Vite)
* **Routing:** React Router DOM
* **State Management:** React Context API
* **Drag & Drop:** React DnD
* **Styling:** CSS3 (Variables, Flexbox, Grid, Media Queries)
* **Testing:** Vitest, React Testing Library, JSDOM

---

## 📦 Installation & Setup

To run this project locally, follow these steps:

1.  **Unzip the file** (if downloaded) or clone the repository.
2.  Open the project folder in your terminal.
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
5.  Open your browser and navigate to the local URL shown (usually `http://localhost:5173/`).

---

## ✅ Running Tests

To verify the functionality and meet the coursework testing requirements:

1.  Run the test suite:
    ```bash
    npm run test
    ```
2.  You should see **6 passing tests** covering:
    * App Rendering (Smoke Test)
    * Search Input Functionality
    * JSON Data Rendering
    * Favorites Sidebar State
    * Navigation Links
    * Search Filtering Logic

---

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Navbar, PropertyCard, SearchForm, FavoritesList)
├── context/          # Context API for Global Favorites State
├── data/             # JSON data file (properties.json)
├── pages/            # Main Page Views (SearchPage, PropertyPage)
├── App.jsx           # Main Application Entry with Routing & Providers
├── App.test.jsx      # Vitest/Jest Test Suite
└── index.css         # Global Styles & Media Queries