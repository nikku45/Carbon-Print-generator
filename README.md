# Carbon Footprint Calculator

A web application that helps users calculate their annual CO2 footprint based on various lifestyle factors including electricity consumption, shipping, transportation, and shopping habits.
 To see all available qualifiers, see our attestation. A web  operation that helps  druggies calculate their periodic CO2 footmark grounded on  colorful  life factors including electricity consumption, shipping, transportation, and shopping habits. produce a. env.local  train in the root directory Visit http// localhost3000 in your cybersurfer. The  operation includes Docker configurations for both development and  product  surroundings. This setup includes produce a. env  train in the root directory

## Features

-   Multi-step form for data collection
-   Real-time CO2 calculations using Carbon Interface API
-   Visual representation of emissions data with interactive charts
-   Personalized recommendations for reducing carbon footprint
-   Responsive design for all devices

## Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **UI Components**: Shadcn UI
-   **Styling**: Tailwind CSS & Framer Motion
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
