React-Frontend-Project-with-Next.js-TS-Starter-Kit

This project serves as a robust and modern starter kit for developing React applications using Next.js and TypeScript. It includes essential features such as global context management with React hooks, role-based navigation, ESLint and Prettier configuration, and more.

Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
4. [Project Structure](#project-structure)
5. [Configuration](#configuration)
   - [ESLint and Prettier](#eslint-and-prettier)
6. [Usage](#usage)
   - [Global Context Management](#global-context-management)
   - [Role-Based Navigation](#role-based-navigation)
   - [Authentication](#authentication)
   - [Basic Pages](#basic-pages)
   - [Basic Components](#basic-components)

# 1. Introduction

This project is designed to be a comprehensive starting point for building React applications with Next.js and TypeScript. It comes with built-in support for global state management, role-based navigation, and an organized codebase that follows best practices.


## 2. Features

- **Global Context Management**: Implemented using React hooks to provide a centralized way to manage application state.
- **Role-Based Conditional Navigation**: Navigation links and access to certain pages are controlled based on user roles (admin, user, judge).
- **ESLint and Prettier Configuration**: Ensures consistent code quality and formatting across the project.
- **Authentication**: Includes basic pages for Login, SignUp, and Onboarding.
- **React Icons**: Utilizes `react-icons/fa` for easily adding scalable vector icons.
- **Templates**: Templates for User Profile and Admin Dashboard.
- **Reusable Components**: Reusable components like Layout, Navigation Bar, and Footer.


### 3. Getting Started

* Prerequisites

Ensure you have the following installed on your local development environment:

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher, or **Yarn** as an alternative
- **VSCode**: Recommended editor for best integration with settings

* Installation

1. **Clone the Repository**:

```bash
git clone https://github.com/yourusername/react-next-ts-starter-kit.git
cd react-next-ts-starter-kit
```

2. **Install Dependencies**:

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

* Running the Project:

To start the development server:

```bash
npm run dev
```

Or with Yarn:

```bash
yarn dev
```


#### 4. Project Structure

```markdown
Here's an overview of the key directories and files in this project:

```plaintext
.
├── pages/                    # Next.js pages (routes)
│   ├── admin/                # Admin specific pages
│   ├── user/                 # User specific pages
│   ├── api/                  # API routes
│   ├── _app.tsx              # Custom App component for global context
│   ├── index.tsx             # Main entry point (Home page)
│   ├── login.tsx             # Login page
│   ├── signup.tsx            # SignUp page
│   ├── onboarding.tsx        # Onboarding page
│   └── profile.tsx           # User profile page
├── public/                   # Public assets (images, icons, etc.)
├── src/                      # Source files
│   ├── components/           # Reusable React components
│   │   ├── Layout.tsx        # Layout component
│   │   ├── Nav.tsx           # Navigation bar component
│   │   └── Footer.tsx        # Footer component
│   ├── context/              # Global context files
│   │   └── GlobalContext.tsx # Context provider and hook
│   ├── styles/               # Global CSS styles
│   │   └── globals.css       # Global styles
├── .eslintrc.json            # ESLint configuration
├── .prettierrc               # Prettier configuration
├── next.config.js            # Next.js configuration
└── tsconfig.json             # TypeScript configuration

```


##### 5. Configuration

```markdown
ESLint and Prettier

This project uses ESLint and Prettier for linting and formatting to maintain a consistent code style.

**.eslintrc.json**:
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
```

.prettierrc:
```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}
```


###### 6. Usage

* Global Context Management
This project uses React's Context API for global state management. The context is provided in the _app.tsx file, which wraps the entire application:

```ts
import { GlobalProvider } from '@/context/GlobalContext'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
```

* Role-Based Navigation
Navigation is dynamically rendered based on the user's role and authentication status. This is handled in the Nav.tsx component:

```ts
import { useGlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'

const Nav = () => {
  const { role, authenticated } = useGlobalContext()

  return (
    <nav>
      {/* Navigation Links */}
      {authenticated ? (
        <>
          {role === 'admin' && <Link href="/admin">Admin</Link>}
          {role === 'user' && <Link href="/user">User</Link>}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  )
}

export default Nav
```

* Basic Authentication | Basic authentication pages include:

- Login Page (/pages/login.tsx)
- SignUp Page (/pages/signup.tsx)
- Onboarding Page (/pages/onboarding.tsx)
Example: `signup.tsx`

```ts
import { useState } from 'react'
import { useGlobalContext } from '@/context/GlobalContext'
import { useRouter } from 'next/router'

const SignUp = () => {
  const { setAuthenticated, setRole } = useGlobalContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignUp = () => {
    setRole('user')
    setAuthenticated(true)
    router.push('/onboarding')
  }

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default SignUp
```

* Basic Page Templates
    - User Profile Page: Provides a template for user profile management (/pages/user/profile.tsx).
    - Admin Dashboard: Serves as a template for admin-specific functionality (/pages/admin/dashboard.tsx).


* Basic Components | Reusable components include:
    - Layout: Wraps around the main content and includes navigation and footer.
    - Navigation Bar: Dynamic links based on user roles.
    - Footer: A simple footer component for the site.


Contributions are welcome! If you'd like to improve this project, here's how you can do it:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3. Make your changes and test thoroughly.
4. Commit your changes: `git commit -am 'Add some feature'`.
5. Push to the branch: `git push origin feature/your-feature-name`.
6. Create a new Pull Request.

Please ensure your code follows the existing code style and conventions. Before submitting a pull request, run ESLint (`npm run lint` or `yarn lint`) to ensure your code passes linting checks.
