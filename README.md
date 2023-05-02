# Podclub

Podclub is a web application that allows users to join chatrooms and discuss podcasts in real-time.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login and registration)
- Ability to create and join chatrooms
- Real-time messaging between chatroom participants
- User roles (admin and regular user)
- Admins can ban/unban users and view a list of banned users
- Ability to report inappropriate content and view reported content

## Technologies

This application was built with the following technologies:

- Ruby on Rails
- PostgreSQL (as the database)
- React.js (for the frontend)
- Render (for deployment)

## Installation

1. Clone the repository:


git clone https://github.com/YOUR-USERNAME/podclub.git


2. Install the dependencies:

cd backend
bundle install
cd frontend
npm install


3. Set up the database:

rails db:create
rails db:migrate
rails db:seed

4. Start the development server:

rails s

5. In a separate terminal window, start the React development server:

cd frontend
npm start

## Usage

1. Register for an account or log in if you already have one.
2. Browse the list of available chatrooms and join one by clicking on it.
3. Participate in the chatroom by sending messages in real-time.
4. Use the report button to report any inappropriate content.
5. Admins can ban/unban users and view a list of banned users.

## Snippets
![Screenshot from 2023-05-02 12-51-04](https://user-images.githubusercontent.com/117739733/235636155-e9eb7e8d-5744-4c63-b792-e624e8424d3e.png)
![Screenshot from 2023-05-02 12-52-01](https://user-images.githubusercontent.com/117739733/235636296-5a183dba-bd5a-4a79-91ef-bd2207011ead.png)
![Screenshot from 2023-05-02 12-55-00](https://user-images.githubusercontent.com/117739733/235636373-ee44fa1d-97b9-4c6c-94df-677dbc69cc63.png)


## Authors
- Enock Kipkoech
- Zamil Sheikh
- Ernest Hanson
- Asha Mohamed
- Amina Hagi
- Abdilatif Shukri

## License

MIT
