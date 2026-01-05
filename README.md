# Estate Agent Client-Side Web Application

This is a responsive Single Page Application (SPA) developed using React JS and Vite for the module **5COSC026W Advanced Client-Side Web Development**. The application mimics a real-world estate agency platform (like Rightmove), allowing users to search for properties, view details, and manage a favorites list using a drag-and-drop interface.

## 🚀 Deployment Links
* **Live Application:** [\[Click Here\]](https://w2120309-estate-agent-webapp.netlify.app/)
* **GitHub Repository:** [\[Click Here\]](https://github.com/Senith-Chandul/Estate-Agent-WebApp)

---

## 📝 Student Information
* **Module:** 5COSC026W Advanced Client-Side Web Development
* **Student Name:** Senith Chandul Sagarage
* **Student ID:** 20231705/21203095
* **Due Date:** 05th January 2026

---

## ✨ Key Features

### 1. Advanced Search Engine
* [cite_start]**Multi-Criteria Filtering:** Users can search using any combination of 5 criteria: **Type** (House/Flat), **Price Range**, **Bedroom Count**, **Date Added**, and **Postcode**[cite: 24, 25, 26, 27, 28].
* [cite_start]**React Widgets:** Integrated `react-datepicker` to provide a user-friendly calendar widget for date selection[cite: 35].
* **Robust Validation:** The search logic handles empty fields gracefully and updates results dynamically.

### 2. Interactive Property Details
* **Image Gallery:** Features a main image display with a scrollable thumbnail grid. [cite_start]Users can click thumbnails to update the main view[cite: 42, 43].
* [cite_start]**Tabbed Interface:** Utilized `react-tabs` to organize content into three distinct sections: **Description**, **Floor Plan**, and **Map**[cite: 45].

### 3. Favorites System (Drag & Drop)
* [cite_start]**Drag & Drop:** Implemented `react-dnd` to allow users to physically drag property cards from the result grid and drop them into the Favorites Sidebar[cite: 46].
* **Global State:** Utilized React Context API (`FavoritesContext`) to ensure the favorites list persists between the Search Page and Property Details Page.
* **Management:** Users can remove items via a button or by clearing the entire list. [cite_start]The system prevents duplicate entries automatically[cite: 48].

---

## 📱 Technical Justification: Responsive Design
[cite_start]*In accordance with the assignment brief, the application implements two distinct layouts using hand-written media queries[cite: 51, 52]:*

1.  **Desktop Layout (>1024px):**
    * Uses a **Side-by-Side Flexbox Layout**.
    * The Search Results occupy the main area (75%), while the Favorites Sidebar is fixed to the right (25%).
    * This layout optimizes screen real estate and facilitates the "Drag and Drop" functionality.

2.  **Mobile/Tablet Layout (<1024px):**
    * Uses a **Stacked Layout** triggered by `@media (max-width: 1024px)`.
    * The Favorites Sidebar moves to the top/bottom of the content flow.
    * The Property Grid adjusts from multi-column to single-column to ensure touch targets are accessible on smaller screens (iPad/Mobile).

---

## 🛡️ Security Implementation
[cite_start]To satisfy the security requirements[cite: 59, 153]:
1.  **XSS Protection:** All user data is rendered using React’s standard data binding, which automatically escapes content to prevent Cross-Site Scripting (XSS).
2.  **Input Validation:** Search inputs use strict HTML5 types (`type="number"`) and constrained `select` options to prevent malicious data entry.

---

## ✅ Testing Strategy
[cite_start]I have implemented **6 automated tests** using **Vitest** and **React Testing Library** to meet the requirement of "5+ meaningful tests"[cite: 64, 171].

To run the tests, execute: `npm run test`

**Test Coverage:**
1.  **Smoke Test:** Verifies the App renders the main layout and Navbar without crashing.
2.  **Search Inputs:** Confirms that typing into the Postcode or Price fields updates the state correctly.
3.  **Data Rendering:** Checks that properties from the JSON file are correctly mapped and displayed as cards.
4.  **Favorites Logic:** Verifies that the Favorites Sidebar initializes in an empty state.
5.  **Navigation:** Ensures "View Details" buttons contain valid links to specific property routes.
6.  **Filter Logic (Critical):** Tests that selecting a specific filter (e.g., "Flat") actively filters the result list (Distinction level logic test).

---

## 🛠️ Tech Stack
* **Core:** React JS (Vite)
* **Routing:** React Router DOM (HashRouter)
* **State Management:** React Context API
* **Drag & Drop:** React DnD / React DnD HTML5 Backend
* **Styling:** CSS3 (Variables, Flexbox, Grid, Media Queries)
* **Testing:** Vitest, JSDOM, React Testing Library

---

## 📦 Installation & Setup

1.  **Clone the repository** (or unzip the project file).
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
4.  **Run Tests:**
    ```bash
    npm run test
    ```

---
