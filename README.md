# Fit-Kit

Fit-Kit is a responsive exercise discovery and fitness tools website built with React and Tailwind CSS.

## Features

- Browse, search, and filter exercise demonstrations by body part, muscle, or equipment.
- Open an exercise guide with a contained, responsive GIF or image, movement instructions, and related video results when available.
- Calculate a BMI estimate and daily calorie maintenance estimate.
- View the available membership plans.
- Use the site on desktop and mobile screens.

Exercise data and media are loaded from the ExerciseDB API. Video search uses the YouTube Search and Download API and needs a RapidAPI key to return results.

## Getting started

Requirements: Node.js and npm.

```bash
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

To enable related video search, create a `.env` file in the project root and set your RapidAPI key:

```env
REACT_APP_YOUTUBE_API_KEY=your_rapidapi_key
```

Restart the development server after changing environment variables. Exercise browsing, BMI, and calorie estimates do not require this key.

## Production build

```bash
npm run build
```

The optimized static site is written to the `build` directory.

## Tech stack

- React 18 and React Router
- Tailwind CSS
- React Icons
- ExerciseDB API
