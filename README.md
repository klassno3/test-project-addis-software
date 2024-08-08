# Test Project For Addis Software P.L.C

This full stack application enables users to perform CRUD operations (create, delete, update, and read) on a collection of songs. Users can also search for specific songs. The backend of the application is built using Node.js and MongoDB. React.js is utilized for building the front-end components, Redux is employed for state management, Redux Saga is implemented for making asynchronous API calls, Emotion and style-system is used for styling.


## Project Structure

- `public/` - Contains the HTML files.
- `src/`
  - `components/`
    - `common/` - Shared components used across the application.
  - `api/` - Contains API endpoints.
  - `redux/`
    - `songSlices/` - Redux slice files.
    - `SongSaga/` - Redux Saga files.
    - `store/` - Redux store configuration.

## Dependencies Used
- [Formik](https://formik.org/) - For building forms in React.
- [Emotion](https://emotion.sh/docs/introduction) - For styling components with CSS-in-JS.
- [Styled-System](https://styled-system.com/) - For consistent spacing, typography, and color styles.
- [React-Hot-Tost](https://www.npmjs.com/package/react-hot-toast) - For toast notifications.
- [Redux Toolkit](https://redux-toolkit.js.org/) - For efficient Redux development.
- [Redux Saga](https://redux-saga.js.org/) - For managing side effects in Redux.

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

