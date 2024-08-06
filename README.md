# danilocangucu.com 2024 (Frontend)

Welcome to the frontend of my website from 2024, built with Vite, React, TypeScript, and Tailwind CSS. This project showcases a modern, responsive website with a clean design.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Folder Structure](#folder-structure)
3. [Fonts](#fonts)
4. [Dependencies](#dependencies)

## Project Setup

### Requirements

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/danilocangucu/danilocangucu-frontend.git
   cd danilocangucu-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the Vite development server and open the website in your default browser.

## Folder Structure

- `src/`
  - `components/`
    - `NavBar.tsx` — The navigation bar component.
    - `Home/`
      - `Home.tsx` — The main home section, including `TextSection` and `ImageSection`.
      - `TextSection.tsx` — The text section component.
      - `ImageSection.tsx` — The image section component.
  - `assets/`
    - `danilo-duotone.jpg` — Image asset used in the `ImageSection` component.
  - `App.tsx` — The main application component that includes `NavBar` and `Home`.

## Fonts

The project uses the following custom fonts:

- **Caladea**:
  - `caladea-regular` — Regular weight
  - `caladea-bold` — Bold weight

  ```css
  .caladea-regular {
    font-family: "Caladea", serif;
    font-weight: 400;
    font-style: normal;
  }

  .caladea-bold {
    font-family: "Caladea", serif;
    font-weight: 700;
    font-style: normal;
  }
  ```

- **Familjen Grotesk**:
  - `familjen-grotesk-700` — Bold weight

  ```css
  .familjen-grotesk-700 {
    font-family: "Familjen Grotesk", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
  }
  ```

## Dependencies

- **[Vite](https://vitejs.dev/)**: A modern build tool for faster development and optimized builds.
- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework.
- **[Caladea Font](https://fonts.google.com/specimen/Caladea)**: Custom serif font used in the project.
- **[Familjen Grotesk Font](https://fonts.google.com/specimen/Familjen+Grotesk)**: Custom sans-serif font used in the project.