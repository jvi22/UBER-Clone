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




## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in either:
- Authorization header: `Bearer <token>`
- Cookie: `token=<token>`

### Example Response

- `user` (object):
  - `fullname` (object).
   - `firstname` (string): User's first name (minimum 3 characters)
   - `lastname` (string): User's last name (minimum 3 characters)
  - `email` (string): User's email address (must be valid and unique)
  


## `/users/logout` Endpoint

### Description

Logs out the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in either:
- Cookie
- Authorization header


## `/captains/register` Endpoint

### Description

Registers a new captain (driver) by creating an account with personal and vehicle information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): Captain's first name (minimum 3 characters)
  - `lastname` (string, required): Captain's last name (minimum 3 characters)
- `email` (string, required): Captain's email address (must be valid and unique)
- `password` (string, required): Captain's password (minimum 6 characters)
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters)
  - `plate` (string, required): Vehicle plate number (minimum 3 characters)
  - `capacity` (number, required): Vehicle passenger capacity (minimum 1)
  - `vehicleType` (string, required): Type of vehicle (must be 'car', 'bike', or 'auto')


### Example Response
- `captain` (object):
  - `fullname` (object).
   - `firstname` (string): Captain's first name 
   - `lastname` (string): Captain's last name 
  - `email` (string): Captain's email address 
  - `password` (string): Captain's password 
  - `vehicle` (object)
   - `color` (string) vehicle color
   - `plate` (string) vehicle number plate
   - `capacity` (number) vehicle capacity
   - `vehicleType` (string) vehicle type
- `token` (String): JWT Token