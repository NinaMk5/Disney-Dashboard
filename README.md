# Disney Character Dashboard

A React dashboard for browsing Disney characters from the Disney REST API.

## Features

- Browse Disney characters in a data table
- Search characters by name
- Open character details in a modal
- Paginate through character results
- Switch between light and dark themes
- Visualize film participation using a Highcharts pie chart *(planned)*
- Export chart data to XLSX format *(planned)*
- Responsive UI built with Material UI

## Tech Stack

- React + Vite
- JavaScript (ES6+)
- Redux Toolkit
- Material UI
- Axios
- Highcharts
- SheetJS (XLSX)

Redux manages:
- Character data
- Loading/error states
- Search state
- Selected character

## Getting Started

```bash
git clone <repository-url>
cd "Disney Dashboard"
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run lint      # Check the source code
npm run preview   # Preview the production build
```

## Data Source

Character data is loaded from the [Disney API](https://api.disneyapi.dev/).

## Design Decisions

### Why Redux Toolkit?
Redux Toolkit provides:
- Predictable global state
- Centralized data management
- Easier debugging
- Cleaner async handling

Shared character data lives in Redux, while component-specific UI state stays local.
