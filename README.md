# Carbon Footprint Calculator

A web application that helps users calculate their annual CO2 footprint based on various lifestyle factors including electricity consumption, shipping, transportation, and shopping habits.

## Features

-   Multi-step form for data collection
-   Real-time CO2 calculations using Carbon Interface API
-   Visual representation of emissions data with interactive charts
-   Personalized recommendations for reducing carbon footprint
-   Responsive design for all devices

## Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **UI Components**: Shadcn UI
-   **Styling**: Tailwind CSS
-   **API Integration**: Carbon Interface API
-   **Form Validation**: Zod
-   **Charts**: Recharts

## Prerequisites

-   Node.js 18.17 or later
-   Docker and Docker Compose (optional)
-   Carbon Interface API key ([Get one here](https://www.carboninterface.com/))

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/carbon-footprint-calculator.git
cd carbon-footprint-calculator
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
CARBON_API_KEY=your_carbon_interface_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Running the Application

### Local Development

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm start
```

### Using Docker

The application includes Docker configurations for both development and production environments.

#### Development Environment

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

This setup includes:

-   Hot reloading
-   Volume mounts for development
-   Development-specific configurations

#### Production Environment

```bash
docker-compose up --build
```

#### Docker Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=production
CARBON_API_KEY=your_carbon_interface_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
