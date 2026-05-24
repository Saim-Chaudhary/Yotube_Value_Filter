# YouTube Video Value Filter

## Overview
People waste time on low-value videos. This project helps decide if a video is worth watching by letting you paste a YouTube link and then:
- Summarizing the video
- Producing a value score
- Recommending whether it is worth your time

## Why It Stands Out
- Direct productivity SaaS idea
- Extremely relatable pain point

## Features
- Transcript summarization
- Keyword importance scoring
- LLM-based ranking
- History stored in MongoDB

## Tech Stack
- React (input + summary dashboard)
- Node.js (YouTube API integration)
- MongoDB (history)

## Project Structure
- backend/ - API server
- frontend/ - React app

## Prerequisites
- Node.js (LTS recommended)
- MongoDB (local or hosted)
- YouTube Data API key (if required by your implementation)
- LLM API key (if required by your implementation)

## Run Locally
1. Install backend dependencies:
   - `cd backend`
   - `npm install`
2. Install frontend dependencies:
   - `cd ../frontend`
   - `npm install`
3. Configure environment variables (create `.env` files in `backend/` and/or `frontend/` as needed).
4. Start the backend server:
   - `cd ../backend`
   - `npm run dev` (or `npm start` if you do not have a dev script)
5. Start the frontend app:
   - `cd ../frontend`
   - `npm run dev`

## Usage
1. Open the frontend in your browser (Vite will print a local URL).
2. Paste a YouTube link.
3. Review the summary and value score.
4. Decide if the video is worth watching.
