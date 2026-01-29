# Dev News

[🎬 Watch a Live Demo of the Project](https://github.com/user-attachments/assets/0e74116f-8375-455b-838d-5e2494ee9f2b)

A modern, feature-rich news aggregator platform for developers, built with Next.js and Tailwind CSS. It provides a clean, dark-themed interface to browse and read the latest articles and signals from the tech world.

---

## About The Project

Dev News is a web application designed to keep developers up-to-date with the latest news, articles, and trends in the software development ecosystem. The project leverages the power of the Next.js App Router for a fast, server-rendered experience and features a sleek, modern UI built with Tailwind CSS. One of its core features is internationalization (i18n), allowing content to be served in multiple languages.

---

## Key Features

- **Modern UI:** A beautiful dark mode interface with subtle animations and effects.
- **Dynamic Content:** Fetches and displays a list of articles from a local data source.
- **Modal Article View:** Leverages **Next.js's Intercepted Routes** to show articles in a modal, keeping the context of the main page while providing a focused reading experience.
- **Detailed Article Page:** A dedicated page for each article with detailed information, including engagement stats (views, upvotes, downvotes) and author details.
- **Internationalization (i18n):** Fully internationalized with support for English and Bengali (`en`/`bn`).
- **Search Functionality:** A search bar to quickly find articles (UI implemented).
- **Responsive Design:** Looks great on all devices, from mobile phones to desktops.

---

## Built With

- [Next.js](https://nextjs.org/) - React Framework for Production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [next-intl](https://next-intl.dev/) - Library for internationalization in Next.js

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/Mahmudulislamshuvo/dev-news
    ```
2.  Navigate to the project directory
    ```sh
    cd dev-news
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Run the development server
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will automatically redirect to your preferred language (e.g., `/en` or `/bn`).

---

## Project Structure

```
.
├── app/
│   ├── [lang]/               # Language-specific routes
│   │   ├── dictionaries.js   # i18n dictionary loader
│   │   ├── page.js           # Main homepage component
│   │   └── dictionaries/
│   │       ├── bn.json       # Bengali translations
│   │       └── en.json       # English translations
│   └── api/                  # API routes
├── components/               # Reusable React components
├── data/                     # Local data source (data.json)
├── lib/                      # Helper functions and utilities
├── middleware.js             # Handles i18n locale redirection
├── public/                   # Static assets
└── ...
```

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
