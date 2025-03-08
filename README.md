# Three.js Icosahedron Project

## Overview
This project demonstrates the use of **Three.js** to create a **rotating icosahedron** with a wireframe overlay. It features:
- A **WebGL renderer** for smooth rendering.
- **Orbit controls** for user interaction (planned but not included in the current code).
- **Hemisphere lighting** for realistic shading.
- **Mesh and wireframe combination** for a unique visual effect.

## Demo
Open the HTML file in a browser to see the rotating icosahedron in action!

## Installation & Usage
### Prerequisites
- A local or online server (e.g., **Live Server extension in VS Code**) to handle module imports.
- A modern browser that supports **WebGL**.

### Steps to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/threejs-icosahedron.git
   cd threejs-icosahedron
   ```
2. Install dependencies (if using a package manager like npm):
   ```bash
   npm install three
   ```
3. Open `index.html` in a browser, or run:
   ```bash
   npx serve   # If you have serve installed
   ```

## Code Explanation
- **Scene Setup:** Initializes `THREE.Scene()`, `THREE.PerspectiveCamera()`, and `THREE.WebGLRenderer()`.
- **Lighting:** Adds `THREE.HemisphereLight()` for natural illumination.
- **Geometry & Material:** Creates an **icosahedron mesh** with a standard material and a wireframe overlay.
- **Animation Loop:** Rotates the object and continuously renders the scene.

## Future Enhancements
- Add **OrbitControls** for interactive viewing.
- Experiment with **different materials** and shading techniques.
- Implement **user-controlled parameters** for dynamic shape modifications.

## Resources
- [Three.js Documentation](https://threejs.org/docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

## License
This project is open-source and available under the **MIT License**.

---
**Author:** Kevin Alex(https://github.com/yourusername)  
**Created on:** March 2025

