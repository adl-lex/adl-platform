# ADL Web-Interface

A React-based web application for lexicographic research built with [Vite](https://vite.dev/) and
[Mantine](https://mantine.dev/).

## Setup

After cloning the repository, run `npm install` to set up the dependencies.

Optionally, for deploying the app, create a file named .env.local in the project root (next to
vite.config.ts) and add the following line, replacing "..." with the URL of the LRZ VM.

```sh
VITE_VM_URL=...
```

## Starting the Development Server

To run the app locally, execute `npm run dev`.

## Deployment (Test Setup)

On the VM, move to the root directory of the repository and run:

```sh
git pull
cd ..
docker compose build adl-app
docker compose up
```
