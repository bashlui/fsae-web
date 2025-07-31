# Image Setup Guide for Subsystem Cards

## Overview
The subsystem cards now have image placeholders that will display your actual images once you add them to the project.

## Image Locations
Place your subsystem images in the following directory structure:

```
/public/images/subsystems/
├── aerodynamics.jpg
├── chassis.jpg  
├── electronics.jpg
├── powertrain.jpg
└── suspension.jpg
```

## Image Requirements
- **Format**: JPG, PNG, or WebP
- **Dimensions**: Recommended 800x600px or similar aspect ratio
- **Size**: Keep under 500KB for optimal loading
- **Content**: High-quality photos of your actual subsystem components

## Current Image Paths
The components are currently configured to look for images at:
- `/images/subsystems/aerodynamics.jpg`
- `/images/subsystems/chassis.jpg`
- `/images/subsystems/electronics.jpg`
- `/images/subsystems/powertrain.jpg`
- `/images/subsystems/suspension.jpg`

## Fallback Behavior
If an image fails to load or doesn't exist, the card will display:
- The subsystem icon
- Text saying "Add [Subsystem Name] Image"
- Black background matching your current design

## How to Add Images

1. **Create the directory** (if it doesn't exist):
   ```bash
   mkdir -p public/images/subsystems
   ```

2. **Add your images** to the `public/images/subsystems/` folder with the exact names:
   - `aerodynamics.jpg`
   - `chassis.jpg`
   - `electronics.jpg`
   - `powertrain.jpg`
   - `suspension.jpg`

3. **The changes will be visible immediately** - no code changes needed!

## Customizing Image Paths
If you want to use different image names or paths, you can modify the image paths in:
- `/src/components/OurCars.tsx` (lines with `image: '/images/subsystems/...'`)
- `/src/components/Home.tsx` (lines with `image: '/images/subsystems/...'`)

## Example Images to Photograph
- **Aerodynamics**: Wings, diffusers, body panels
- **Chassis**: Frame structure, roll cage, mounting points
- **Electronics**: ECU, wiring harnesses, dashboard
- **Powertrain**: Engine, transmission, drivetrain components
- **Suspension**: Shock absorbers, A-arms, wheels and tires

The images will appear in the black spaces of your cards, maintaining the dark theme aesthetic you've established.
