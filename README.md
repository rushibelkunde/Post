# Next.js 13 Post App

## LIVE LINK: https://post-woad.vercel.app/

A Next.js 13 application for creating, editing, and deleting posts, along with user authentication using NextAuth.js and MongoDB for data storage.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
4. [Configuration](#configuration)
5. [File Structure](#file-structure)
6. [Usage](#usage)
7. [Authentication](#authentication)
8. [Database](#database)
9. [Deployment](#deployment)
10. [License](#license)

## Features

- User authentication using Google via NextAuth.js.
- Create, edit, and delete posts.
- Search for posts.
- MongoDB for user and post data storage.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- A Google Developers Console project with OAuth 2.0 credentials for Google sign-in.
- MongoDB database for storing user and post data.
- A Next.js 13 environment set up.

## Getting Started

1. Clone this repository.
2. Install the project dependencies:

```bash
npm install

1. Set up your environment variables (see Configuration).
2. Run the application in development mode:

```bash
npm install

##Configuration
Create a .env.local file in the project root and add the following environment variables:

```bash
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-uri
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

For more information on how to obtain Google OAuth credentials, refer to the NextAuth.js documentation.

##File Structure
post-app/
├── components/        # React components
├── pages/             # Next.js pages
├── public/            # Public assets
├── lib/               # Utility functions
├── styles/            # CSS styles
└── ...

##Usage
-Register and log in using your Google account.
-Create, edit, and delete posts.
-Search for posts using the search feature.

##Authentication
User authentication is implemented using NextAuth.js. The Google provider is used for authentication. Users can log in with their Google accounts.

##Database
MongoDB is used to store user and post data. Make sure to set the MONGODB_URI environment variable with your MongoDB connection string.

##Deployment
You can deploy this application to your preferred hosting platform. Make sure to set the environment variables in your production environment, and secure your credentials.

##License
This project is licensed under the MIT License - see the LICENSE file for details.