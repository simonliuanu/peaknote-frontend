# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PeakNote is a Microsoft Teams Tab app for meeting notes. The project consists of:
- **Frontend**: Static HTML/CSS/JS application with React components
- **Deployment**: Azure Static Web Apps (white-forest-056934c1e.6.azurestaticapps.net)
- **Integration**: Microsoft Teams Tab via manifest.json

## Development Commands

### Running the Application
```bash
# Serve the static files locally
cd public
python3 -m http.server 8000
# Access at http://localhost:8000
```

### Microsoft Teams Testing
1. Upload `manifest/manifest.json` to Microsoft Teams Developer Portal
2. Sideload the app in Teams following Microsoft's documentation

## Architecture

### Project Structure
- `public/index.html` - Main application with inline CSS/JS (complete standalone app)
- `src/App.jsx` - Basic React component (appears to be unused/placeholder)
- `manifest/` - Microsoft Teams app manifest and icons
- `package-lock.json` - NPM dependencies (no package.json present)

### Key Technical Details
- **Frontend Stack**: Vanilla HTML/CSS/JS with Bootstrap 5.3.0, Particles.js, FontAwesome
- **UI Framework**: Bootstrap with custom glassmorphism design and gradient animations
- **JavaScript Libraries**: 
  - particles.js@2.0.0 for background effects
  - Bootstrap 5.3.0 bundle for UI components
  - FontAwesome for icons
- **Teams Integration**: Uses Microsoft Teams SDK (manifest v1.11)

### Application Flow
1. User enters Teams meeting URL and selects template (Standard/Client/Scrum/Standup)
2. App generates meeting minutes based on template
3. Users can download as PDF or share via Outlook
4. All functionality is currently demo/placeholder - no real API integration

### Design System
- **Color Scheme**: Dark theme with purple/blue gradients (#150429 base)
- **Effects**: Glassmorphism cards, particle background, custom button animations
- **Layout**: Responsive Bootstrap grid, centered container design

## Teams App Configuration
- **App ID**: 9b6db5d8-6f59-4cd3-b823-d20be58cbb0d
- **Permissions**: identity, messageTeamMembers
- **Scopes**: personal
- **Domain**: white-forest-056934c1e.6.azurestaticapps.net