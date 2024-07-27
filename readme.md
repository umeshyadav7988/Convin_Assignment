# Daily Expenses Sharing Application

The Daily Expenses Sharing Application is a web-based system designed to assist users in tracking and managing their daily expenses. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this application is scalable, responsive, and user-friendly.

## Objectives:

1. Simplify expense tracking for individuals and organizations.
2. Provide detailed insights into spending patterns to enable better financial management.
3. Offer a platform for users to create, update, and delete expenses and categories.
4. Generate comprehensive reports based on user-defined time periods and categories.

## Features

### User Authentication and Authorization

- Allow users to sign up and log in to their personal accounts using secure authentication mechanisms.
- Implement role-based access control for administrative tasks.

### Expense and Category Management

- Enable users to create, update, and delete expense entries and categories.
- Track expenses by date, category, and description.
- Support attaching receipts or other relevant documents to expense entries.

### Dashboard and Reporting

- Provide a visual dashboard displaying an overview of the user's expenses, including total expenses, expenses by category, and recent transactions.
- Generate reports based on selected date ranges and categories, displaying pie charts and bar graphs to help users understand their spending patterns.

### Responsive User Interface

- Design a clean, responsive user interface that works seamlessly across desktop, tablet, and mobile devices.
- Utilize React.js for building reusable UI components and managing state effectively.

## Technical Architecture

### Frontend

- Utilize React.js for building the user interface.
- Implement tsparticle library for awesome background effects.
- Use libraries like unique-names-generator, react-datepicker, and moment for enhanced functionality.
- Implement responsive design using CSS frameworks like Bootstrap and Material-Icons.

### Backend

- Use Node.js and Express.js to build a RESTful API for handling client requests and serving as the application's backend.
- Implement authentication and authorization using JSON Web Tokens (JWT) and middleware to protect endpoints.

### Database

- Store all data, including user information, expense entries, and categories, in MongoDB.
- Implement Mongoose ORM for schema definition and validation.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/umeshyadav7988/daily-expenses-sharing-app.git
    cd daily-expenses-sharing-app
    ```

2. Install dependencies for both the backend and frontend:
    ```bash
    # Backend dependencies
    cd backend
    npm install

    # Frontend dependencies
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the root of the backend folder and add the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

2. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:5000`.

## Deployment

### Deploying the Frontend on Vercel

1. Create a Vercel account if you haven't already.
2. Install the Vercel CLI:
    ```bash
    npm install -g vercel
    ```

3. Log in to Vercel:
    ```bash
    vercel login
    ```

4. Navigate to your frontend directory:
    ```bash
    cd frontend
    ```

5. Deploy the application:
    ```bash
    vercel
    ```

6. Follow the prompts to configure your project. Once the deployment is complete, Vercel will provide you with a deployment URL.

### Deploying the Backend

You can deploy your backend to any cloud provider of your choice, such as Heroku, AWS, DigitalOcean, or others. Make sure to set the appropriate environment variables on your deployment platform.

## Usage

- Sign up and log in to access the application.
- Create, update, and delete expenses and categories.
- View the dashboard for a visual overview of your expenses.
- Generate reports to analyze spending patterns.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.



## Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Material-Icons](https://mui.com/material-ui/material-icons/)
- [tsparticle](https://github.com/matteobruni/tsparticles)
- [unique-names-generator](https://github.com/andreasonny83/unique-names-generator)
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker)
- [moment](https://momentjs.com/)
