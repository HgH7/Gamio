# Social Game - Gamified Social Media Platform

A full-stack web application that combines social media features with gamification elements. Built with ASP.NET Core and React.js.

## Tech Stack

### Backend
- ASP.NET Core 8.0
- Entity Framework Core
- SQL Server
- JWT Authentication
- AutoMapper
- MediatR (CQRS)

### Frontend
- React.js with TypeScript
- Tailwind CSS
- React Router
- Redux Toolkit
- Axios

## Project Structure

```
SocialGame/
├── SocialGame.API/           # Web API project
├── SocialGame.Core/          # Business logic and domain models
├── SocialGame.Infrastructure/# Data access and external services
└── social-game-client/       # React frontend
```

## Features

- User Authentication & Authorization
- Profile Management
- Post Creation and Management
- XP System and Gamification
- Premium Subscription Features
- Leaderboards
- Real-time Notifications
- Search Functionality

## Getting Started

### Prerequisites

- .NET 8.0 SDK
- Node.js 18+ and npm
- SQL Server
- Visual Studio 2022 or VS Code

### Backend Setup

1. Navigate to the solution directory:
   ```bash
   cd SocialGame
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Update the connection string in `appsettings.json`

4. Run the database migrations:
   ```bash
   dotnet ef database update
   ```

5. Start the API:
   ```bash
   dotnet run --project SocialGame.API
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd social-game-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Development

- Backend API will run on `https://localhost:7001`
- Frontend development server will run on `http://localhost:3000`

## Testing

### Backend Tests
```bash
dotnet test
```

### Frontend Tests
```bash
cd social-game-client
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 