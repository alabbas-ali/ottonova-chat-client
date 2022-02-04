# OTTONOVA chat clint 

This is a react chat clinet project.
This project is created as a chat clint for the chat server deplyed at https://demo-chat-server.on.ag/

## Libraries

- [@material-ui/core](https://v4.mui.com/): Used as UX/UI freamwork.
- [@material-ui/icons](https://v4.mui.com/components/material-icons/#material-icons): React Material icons.
- [@sindresorhus/string-hash](https://www.npmjs.com/package/@sindresorhus/string-hash): Used to create a unique id for each chat message.
- [google-map-react](https://www.npmjs.com/package/google-map-react): A small set of the Google Maps API. to render any React component on the Google Map.
- [jwt-decode](https://www.npmjs.com/package/jwt-decode): Used in this case to create a fake JWT token for a loged in user.


## Project structure

```
├── .env
└── src/
    ├── assets/
    ├── components/
    ├── models/
    ├── pages/
    │    ├── app.test.tsx
    │    └── app.tsx
    ├── services/
    ├── utils/
    ├── index.css
    └── index.tsx
```
- .env : This is a basic configuration file for config the `create-react-app` .
- pages directory: contains the intial login page and chat page.
- models directory: contains all the shared models.
- components directory: contains all the component that can by used in any page.
- service directory: usually it should contains all the services that can handle request to backend and responce to use HTTP API endpoint. decabsolate the responce or encapsulate date to be send to the server. In this case it contans a fake login function that create a JWT token.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
