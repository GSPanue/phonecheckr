<h1 align="center">PhoneCheckr</h1>

<div align="center">
A single-page application for comparing mobile phone deals
</div>

## Installation

1. Clone the repository: ``git clone https://github.com/GSPanue/phonecheckr.git``
2. Install the dependencies: ``npm install``

## Demo

1. Generate the frontend and backend production bundles: ``npm run build``
2. Initialise the server: ``npm start``
3. Go to: ``http://localhost:8080``

## Frontend Development

#### Getting started

1. Initialise the local development server: ``npm run frontend:dev``
2. Go to: ``http://localhost:8080``

#### Generating the frontend production bundle

You can generate the frontend production bundle by running ``npm run frontend:build``.

Note: The bundle will be output to ``frontend/dist/js``.

#### Analysing the frontend bundle

After generating the frontend production bundle, you can [analyse it](https://github.com/webpack-contrib/webpack-bundle-analyzer#webpack-bundle-analyzer) by running ``npm run frontend:analyse``.

## Backend Development

#### Getting started

1. Create a ``.env`` file in the ``backend`` folder with the following environment variables:

```
DB_HOST=127.0.0.1
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
```

1. Initialise the local development server: ``npm run backend:dev``
2. Go to: ``http://localhost:8080``

#### Generating the backend production bundle

You can generate the backend production bundle by running ``npm run backend:build``.

Note: The bundle will be output to ``backend/dist``.

#### Analysing the backend bundle

After generating the backend production bundle, you can [analyse it](https://github.com/webpack-contrib/webpack-bundle-analyzer#webpack-bundle-analyzer) by running ``npm run backend:analyse``.

## Version

1.0.0

## Author

Gurdev S. Panue
