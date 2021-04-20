# Assessment

This project was about building a Card Platform web app page based on mockups provided.

## Tech Stack

- React.js
- Material UI

## Run locally

```sh
$ git clone https://github.com/ruslan-akhm/rfa.git
$ cd rfa
$ npm install
$ npm start
```

## Highlights

1. API calls are mocked with async/await and setTimeout functions. All the data "fetched" by those calls is stored in src/data/data.js file;
2. React router used for better navigation between pages that could be added in future;
3. Global State is managed with useReducer and React Context, with some local state managed via useState;
4. App structured the way it is very easy to expand by just adding new/modifying exisiting files;
5. The whole application built with Material UI components with minimum (almost none) native components of React. Styling is deeply custom with classes and theme declaration.
