# Emjaycursor Todo App

A beautiful and intuitive todo app built with React. Stay organized and productive by creating, managing, and tracking your tasks with ease.

## Features

- Add, complete, and delete todos
- Filter todos by All, Active, or Completed
- Clear all completed todos
- Responsive design for mobile and desktop
- Persistent storage using localStorage
- Open Graph image for rich social sharing
- Firebase ready for analytics and hosting

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Running Locally

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```sh
npm run build
```

The production build will be in the `build/` folder.

### Running Tests

```sh
npm test
```

## Open Graph Image

Generate a social sharing image using Puppeteer:

```sh
node generate-og-image.js
```

Or convert SVG to PNG:

```sh
node convert-svg.js
```

## Firebase Hosting

This app is configured for Firebase Hosting. See `firebase.json` for details.

To deploy:

```sh
firebase deploy
```

## Project Structure

```
src/         # React source code
public/      # Static assets and OG image
build/       # Production build output
firebase.json
generate-og-image.js
convert-svg.js
```
License
MIT License
