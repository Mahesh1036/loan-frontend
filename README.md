# 💼 Business Loan Application - Full Stack Project

This is a full-stack web application where users can register, fill personal and business details, and apply for business loans. Built using:

- 🔧 Backend: Django REST Framework 
- 🌐 Frontend: React.js

---


## �️ Frontend Application (React)

This project is a modern business loan application frontend built with React.js. It features a professional UI, robust authentication, onboarding flow, and is ready for deployment on Netlify.

### Features
- **User Authentication:** JWT-based login/register, with secure token storage and error handling.
- **Onboarding Flow:** Users are guided through profile creation, business details, and then to the dashboard.
- **Dashboard:** Displays user, business, and loan status information.
- **Conditional Navigation:** Redirects users based on profile/business completion.
- **Logout:** Secure logout, only shown on protected pages.
- **Responsive UI:** Professionally styled with CSS.
- **Netlify Ready:** SPA routing and environment variable support.

### Getting Started
1. **Install dependencies:**
	```bash
	npm install
	```
2. **Set up environment variables:**
	- Create a `.env` file in the root directory.
	- Add your backend API URL:
	  ```env
	  REACT_APP_API_URL=https://your-backend-api-url.com/api
	  ```
3. **Run the development server:**
	```bash
	npm start
	```
	The app will be available at [http://localhost:3000](http://localhost:3000).

### Deployment (Netlify)
1. **Build the app:**
	```bash
	npm run build
	```
2. **Ensure the following files are present:**
	- `public/_redirects` (for SPA routing)
	- `.env` (with your API URL)
	- `.gitignore` (ignores sensitive files)
3. **Deploy to Netlify:**
	- Drag and drop the `build` folder in Netlify UI, or connect your repo.
	- Set environment variables in Netlify dashboard as needed.

### File Structure
- `src/components/` — React components (Login, Register, ProfileForm, BusinessForm, Dashboard, LogoutButton, Home)
- `src/services/api.js` — Axios instance with environment variable support
- `src/hooks/useCurrentUser.js` — Custom hook for user info
- `public/_redirects` — Netlify SPA routing
- `.env` — API URL configuration

### Notes
- The backend API must implement endpoints for authentication, profile, business, and loan management.
- Update `REACT_APP_API_URL` in `.env` to match your backend deployment.

---


