
---

# 🏠 Property Listings App

A modern React-based web application for browsing, filtering, and managing property listings. This project demonstrates CRUD functionality using a mock backend with `json-server`, along with a responsive UI built in React.

---

## 📌 Features

* View a list of properties with images, descriptions, and prices.
* Add new property listings via a simple form.
* Filter properties based on criteria (e.g., price, type, location).
* Interactive property details modal.
* Loader and responsive design for a smooth user experience.

---

## 🛠️ Methodology

This project was developed using the following methodology:

1. **Requirement Analysis** – Identified core features for property listing (CRUD, filtering, UI/UX).
2. **Design & Planning** – Structured the app with reusable components and mock API endpoints.
3. **Implementation** – Built the frontend with React (Vite) and `json-server` as a mock backend.
4. **Testing** – Ensured all CRUD operations, filtering, and modals worked as expected.
5. **Documentation** – Added screenshots and structured README for clarity.

---

## 📂 Project Structure

```
property-listings-app/
│── db.json            # Mock API seed data
│── routes.json        # Custom API routes
│── package.json       # Dependencies & scripts
│── vite.config.js     # Vite configuration
│── index.html         # App entry point
│── /src
│   │── App.jsx        # Main App component
│   │── api.js         # API integration
│   │── main.jsx       # React root
│   │── /components    # Reusable components
│   │   │── AddPropertyForm.jsx
│   │   │── Filters.jsx
│   │   │── Header.jsx
│   │   │── Loader.jsx
│   │   │── PropertyCard.jsx
│   │   │── PropertyModal.jsx
│   │   │── Temp.jsx
│   │── /styles        # CSS styling
│   │   │── index.css
│   │   │── App.css
│── /screenshots       # Add screenshots for documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/smaranng/Property-Listing-React.git
cd property-listings-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Mock API Server

```bash
npm run server
```

### 4️⃣ Run the React App

```bash
npm run dev
```

The app should now be running at **[http://localhost:5173/](http://localhost:5173/)** 🚀

---

## 📸 Screenshots

Screenshots of the app in action:

* **Home Page**
  ![Home Page](./screenshots/homepage.png)

* **Add Property Form**
  ![Add Property](./screenshots/add-property.png)

* **Property Modal**
  ![Property Modal](./screenshots/property-modal.png)

👉 To add screenshots:

1. Take screenshots of your running app (`PrtSc` or `Snipping Tool`).
2. Save them inside the `/screenshots` folder.
3. Reference them in the README using Markdown:

   ```markdown
   ![Description](./screenshots/filename.png)
   ```

---

## 📦 Tech Stack

* **Frontend:** React (Vite), JSX, CSS
* **Backend:** json-server (Mock API)
* **Others:** npm, REST API, GitHub

---

## ✨ Future Enhancements

* User authentication (login/signup).
* Search bar with autocomplete.
* Map integration for property locations.
* Deployment on Vercel/Netlify.

---


