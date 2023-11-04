<a name="readme-top"></a>

# Pokédex

**Table of Contents:**

<ul>
    <li>
        <a href="#ℹ️-about">ℹ️ About</a>
    </li>
    <li>
        <a href="#🧭-getting-started">🧭 Getting Started</a>
        <ul>
        <li><a href="#🗺-prerequisites">🗺 Prerequisites</a></li>
        <li><a href="#🛳-installation">🛳 Installation</a></li>
        </ul>
    </li>
    <li><a href="#🏭-development">🏭 Development</a></li>
    <li><a href="#🚀-deployment">🚀 Deployment</a></li>
</ul>

---

## ℹ️ About

This is a Pokédex project made with [Next.js](https://nextjs.org/) and bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The Pokédex displays a list of Pokémon with various filtering options.

<p align="right"><a href="#readme-top">🔼 back to top</a></p>

## 🧭 Getting Started

### 🗺 Prerequisites

For the local development environment, the [Node.js](https://nodejs.org/es/) version is expected to be the one specified in the `.nvmrc` and to be compatible with `engines.node`:

```sh
# with nvm
nvm use

# with n
n auto
```

<p align="right"><a href="#readme-top">🔼 back to top</a></p>

### 🛳 Installation

Install dependencies:

```sh
yarn
```

Next, set the environment variables for the Pokémon API:

```sh
# copy the example file `.env.example` to another file named `.env`.
cp .env.example .env

# and use your preferred editor to fill it in according to the steps defined within
code .env
```

<p align="right"><a href="#readme-top">🔼 back to top</a></p>

## 🏭 Development

Start the development server:

```sh
yarn dev
```

Open http://localhost:3000/ in your browser to view the Pokédex.

<p align="right"><a href="#readme-top">🔼 back to top</a></p>

## 🚀 Deployment

For deploying your Next.js app, you can follow the Next.js deployment documentation for more details.

<p align="right"><a href="#readme-top">🔼 back to top</a></p>
