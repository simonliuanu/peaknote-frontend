# PeakNote Frontend

This is the frontend for PeakNote, a simple Microsoft Teams Tab app that allows you to record meeting notes, view history, and export summaries.

## Running the App

This project is a static frontend app. You can run it locally using any static file server. The easiest way is with Python:

1. Download or clone the repository.
2. Start a local server from the `public` directory:
   ```bash
   cd public
   python3 -m http.server 8000
   ```
3. Open your browser and go to [http://localhost:8000](http://localhost:8000)

## Microsoft Teams Testing

To test as a Teams Tab app:
1. Upload the `manifest/manifest.json` to the Microsoft Teams Developer Portal.
2. Follow the Teams documentation to sideload and test the app.

## Features
- Choose meeting templates
- Record notes in real-time
- View historical meetings
- Export meeting summaries by speaker or topic
