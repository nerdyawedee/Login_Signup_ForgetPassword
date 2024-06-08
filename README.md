# Login, Signup, Forget Password, OTP Generation, and Token Handling

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project implements a user authentication system with features including login, signup, password recovery through OTP generation, and token-based authentication.

## Features
- **Login**: Users can log in with their credentials.
- **Signup**: New users can create an account.
- **Forget Password**: Users can request a password reset.
- **OTP Generation**: An OTP (One Time Password) is sent to users for verifying password reset requests.
- **Token Handling**: Secure token generation and validation for user sessions.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/nerdyawedee/Login_Signup_ForgetPassword.git
    cd Login_Signup_ForgetPassword
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection strings, API keys, etc.).

4. **Run the application**:
    ```bash
    npm start
    ```

## Usage
Once the application is running, you can interact with it through the provided endpoints.

## Endpoints
Here are the main endpoints provided by the application:

- **POST /signup**: Create a new user account.
    - **Request Body**:
      ```json
      {
        "username": "your_username",
        "email": "your_email@example.com",
        "password": "your_password"
      }
      ```

- **POST /signin**: Log in with your credentials.
    - **Request Body**:
      ```json
      {
        "email": "your_email@example.com",
        "password": "your_password"
      }
      ```

- **POST /forgot-password**: Request a password reset.
    - **Request Body**:
      ```json
      {
        "email": "your_email@example.com"
      }
      ```

- **POST /otp**: Reset your password using the OTP.
    - **Request Body**:
      ```json
      {
        "otp": "your_otp",
        "newPassword": "your_new_password"
      }
      ```

- **GET /profile**: Get the logged-in user's profile. Requires authentication token.
    - **Headers**:
      ```plaintext
      Authorization: Bearer <your_token>
      ```

## Contributing
Contributions are welcome! Please create an issue or submit a pull request.

1. **Fork the repository**.
2. **Create a new branch**.
    ```bash
    git checkout -b feature-branch
    ```
3. **Commit your changes**.
    ```bash
    git commit -m "Descriptive commit message"
    ```
4. **Push to the branch**.
    ```bash
    git push origin feature-branch
    ```
5. **Create a Pull Request**.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
