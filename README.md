# Role-Based System

## Overview
This is a role-based system that facilitates user authentication and role-specific actions. The application provides separate dashboards and functionalities for three roles: Partner, Client, and Super Admin. Users can only access data and perform actions relevant to their assigned roles.

## Functionalities

### 1. User Authentication (Register, Login) and Role Assignment
- **Register:**
  - Users can create new accounts using their email and password.
  - Upon registration, roles are assigned (e.g., Partner, Client and Super Admin).
- **Login:**
  - Users authenticate using their email and password.
  - After login, users are redirected to dashboards corresponding to their roles:
    - Partner Dashboard
    - Client Dashboard
    - Admin Dashboard

### 2. Partner Dashboard
- **Register a Company:**
  - Partners can register their company details (e.g., name, address, contact information).
- **View Profile:**
  - Partners can view their personal profile.
- **Manage Services:**
  - Add services offered by the partner.
  - Edit particular services.
  - Delete specific services.
  - View all services offered.

### 3. Admin Dashboard
- **Manage Users:**
  - View a list of all registered users (Partners, Clients).
  - Delete a particular user.
- **View Companies and Services:**
  - Access a list of all registered companies and their associated services.

### 4. Client Dashboard
- Clients have access to a dashboard tailored to their specific needs.
-  Client can browse available services offered by partners.

### 5. Role-Based Authorization
- Users can only access actions and data relevant to their roles:
  - Partners cannot access Admin or Client-specific actions.
  - Admins have access to all user data and actions.
  - Clients can only view their respective dashboards.

---

## Tech Stack

### 1. Backend
- **Spring Boot:**
  - Implements the API for handling user actions and data processing.
  - Provides the necessary endpoints for user authentication and CRUD operations.

### 2. Authentication & Authorization
- **Spring Security with JWT:**
  - Ensures secure authentication using JSON Web Tokens (JWT).
  - Provides role-based authorization to restrict access to endpoints based on roles.

### 3. Database
- **MongoDB:**
  - Stores user information, company details, services, and other application data.
  - Facilitates scalable and flexible data storage.

### 4. Frontend
- **React:**
  - Creates an intuitive and user-friendly interface for the application.
  - Provides role-specific dashboards and views.

---

## How to Run the Application

### Prerequisites
- **Java 17**
- **Node.js 21.3.0**
- **MongoDB**

### Backend Setup
1. Navigate to the backend directory.
2. Configure MongoDB:
   * Ensure MongoDB is installed and running on your local machine or a server.
   * Open the application.properties file located in src/main/resources/.
   * Update the MongoDB URI to match your setup:
        spring.data.mongodb.uri=mongodb://localhost:27017/role-based-system
3. Build the project using Maven:
   mvn clean install
4. Run the Spring Boot application:
   mvn spring-boot:run
5. The backend will run at http://localhost:8082

### Frontend Setup
1. Navigate to the frontend directory.
2. Install dependencies:
    npm install 
3. Start the React application:
   npm run dev 
4. The frontend will run at http://localhost:5173

## Security
- JWT is used for secure communication between the frontend and backend.
- Spring Security ensures role-based access control.
- Sensitive data is encrypted and securely stored in the database.






