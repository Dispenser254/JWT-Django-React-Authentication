# JWT-Django-React-Authention

This repository accompanies the tutorial on how to use **JWT Authentication with Django and React**. If you're building a project where React serves as the frontend and Django Rest Framework (DRF) powers the backend, this tutorial will guide you through setting up user authentication using JSON Web Tokens (JWT).

## Tutorial Overview

The tutorial covers the following aspects:

1. **Django Backend**:
    - Custom User model
    - DRF serializers and authentication
    - JWT setup: login and refresh views
    - Customizing JWT behavior
    - Allowing frontend access with CORS

2. **React Frontend**:
    - Installing React within the Django project as a standalone app
    - Preparing React for authentication:
        - Routing
        - Signup and login forms
        - Axios for requests and tokens
    - Implementing protected routes
    - Managing user sessions:
        - AuthContext using `createContext()` and `useContext()`
        - Login and logout methods
        - Keeping users logged in after refresh
        - Token refreshing on an interval

## Requirements

Make sure you have the following installed:

- Django 2 or 3
- Django Rest Framework
- Python 3
- React 16.8 and up

## Getting Started

1. **Clone the Repository**:
    ```
    git clone https://github.com/Dispenser254/JWT-Django-React-Authention.git
    ```

2. **Backend Setup**:
    - Navigate to the `backend` directory.
    - Set up your Django environment (virtual environment recommended).
    - Install dependencies using `pip install -r requirements.txt`.
    - Run migrations: `python manage.py migrate`.
    - Create a superuser: `python manage.py createsuperuser`.
    - Start the Django development server: `python manage.py runserver`.

3. **Frontend Setup**:
    - Navigate to the `frontend` directory.
    - Install Node.js dependencies: `npm install`.
    - Start the React development server: `npm run dev`.

4. **Access the Application**:
    - Open your browser and visit `http://localhost:8000` for the backend.
    - Open your browser and visit `http://localhost:5173` for the frontend.
    - Use the provided login and signup forms to authenticate.

