
# Podclub API

This is a Rails API for a chatroom application, including routes for sessions, registrations, chatroom and  message controller. You can find the deployed link on render here: https://podclub-backend.onrender.com/

## Getting Started

To use this API, you can clone the repository from GitHub and follow the instructions below. 

### Prerequisites

This API was built with Ruby on Rails, version 6.1. You will need to have Ruby and Rails installed on your machine to use it. You can check if you have them installed by running the following commands in your terminal:

```
ruby -v
rails -v
```

If you don't have them installed, you can follow the instructions on the [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Rails](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project-installing-rails) websites to install them.

### Installation

1. Clone the repository:

   ```
   git@github.com:pod-club/pod-club.git
   ```

2. Navigate to the project directory:

   ```
   cd podclub-api
   cd backend
   ```

3. Install the dependencies:

   ```
   bundle install
   ```

4. Set up the database:

   ```
   rails db:create db:migrate
   ```

5. Start the server:

   ```
   rails server
   ```

6. You should now be able to make requests to the API at `http://localhost:3000`.

## Routes

### Sessions Controller

- `POST /sessions`: Authenticate a user.

### Registrations Controller

- `POST /registrations`: Create a new user.

### Chatroom Controller

- `GET /chatroom`: Show all chatrooms.
- `GET /chatroom/:id`: Show a specific chatroom.
- `POST /chatroom`: Create a new chatroom.
- `PATCH /chatroom/:id`: Update a specific chatroom.
- `DELETE /chatroom/:id`: Delete a specific chatroom.

### Message Controller

- `POST /message`: Create a new message.
<!-- - `PATCH /message/:id`: Update a specific message.
- `DELETE /message/:id`: Delete a specific message.
- `POST /message/:id/reply`: Reply to a specific message.

### Admin Controller

- `GET /banned_users`: Show all banned users.
- `POST /ban_user`: Ban a user.
- `POST /unban_user`: Unban a user.

### Reports Controller

- `GET /reports`: Show all reports.
- `POST /reports`: Create a new report.
- `PATCH /reports/:id`: Update a specific report.
- `DELETE /reports/:id`: Delete a specific report. -->

### Other Routes

- `DELETE /logout`: Log out a user.
- `GET /logged_in`: Check if a user is logged in.
- `GET /`: Show the home page. 

## Usage

To use this API, you can make HTTP requests to the various routes described above. For example, to create a new user, you could make a POST request to `/registrations` with the user's email and password in the request body.  

To authenticate a user and create a session, you can make a POST request to `/sessions` with the user's email and password in the request body. This will return an authentication token that you can use for subsequent requests that require authentication.

## Dependencies

This API was built with Ruby on Rails, version 6.1. It uses the following gems:

- `bcrypt` for password encryption
- `rack-cors` for handling Cross-Origin Resource Sharing (CORS)

## Contributing

If you would like to contribute to this project, please open an issue or submit a pull request on GitHub. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.