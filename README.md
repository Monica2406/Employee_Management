# Employee Management System

## Overview  
This project is an **Employee Management System** built with Java and associated front-end technologies. It allows CRUD operations on employee data and is designed to showcase a full-stack development approach for a product-based company environment.

## Features  
- Add, view, update and delete employee records.  
- Validate and handle basic error scenarios.  
- Use of a relational database (or persistence layer) to store employee information.  
- Responsive/usable front-end for interacting with the backend services.  
- Clean project structure separating backend and frontend modules.

## Technology Stack  
- **Backend**: Java (Spring Boot or standard Java based REST API)  
- **Frontend**: Web UI (React / HTML + CSS + JavaScript)  
- **Database**: (e.g., MySQL / PostgreSQL / H2)  
- **Build / Tooling**: Maven Wrapper (`mvnw`)  
- **Folder Structure**:  
    - `src` – backend source code  
    - `emp_frontend` – front-end UI module  
    - `.mvn`, `pom.xml`, etc. – project configuration files  

## Getting Started  
### Prerequisites  
- Java JDK 11 or above  
- Maven  
- Node.js & npm (if front-end uses React)  
- Database server (or embedded)  

### Setup Backend  
```bash
# Clone the repository
git clone https://github.com/Monica2406/Employee_Management.git
cd Employee_Management

# Build and run the backend
./mvnw clean install
./mvnw spring-boot:run

### Setup Frontend
cd emp_frontend
npm install
npm start

