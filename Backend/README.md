# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters)
  - `lastname` (string, optional): User's last name (minimum 3 characters)
- `email` (string, required): User's email address (must be valid and unique)
- `password` (string, required): User's password (minimum 6 characters)


### Example Response 

- `user` (object):
  - `fullname` (object).
   - `firstname` (string): User's first name (minimum 3 characters)
   - `lastname` (string): User's last name (minimum 3 characters)
  - `email` (string): User's email address (must be valid and unique)
  - `password` (string): User's password (minimum 6 characters)
- `token` (String): JWT Token


## `/users/login` Endpoint

### Description

Authenticates a user by verifying their email and password. Returns a JWT token and user details upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be valid).
- `password` (string, required): User's password.

### Example Response

- `user` (object):
  - `fullname` (object).
   - `firstname` (string): User's first name (minimum 3 characters)
   - `lastname` (string): User's last name (minimum 3 characters)
  - `email` (string): User's email address (must be valid and unique)
  - `password` (string): User's password (minimum 6 characters)
- `token` (String): JWT Token



