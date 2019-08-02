Open [https://kumparan-social-network.herokuapp.com/](https://kumparan-social-network.herokuapp.com/) to see demo.

Application was made by components that are modular / structured. So it's easy to understand and easy to develop (low coupling between modules)

### Available Features
- Responsive design
- Infinite scroll pagination
- Service Worker

## Application Structure

```
/
├─ src/
│  ├─ assets/        # Contains your un-compiled assets
│  │  └─ images/     # Image files
│  │
│  ├─ components/    # Contains your un-compiled assets
│  │  ├─ Albums/     # To display list of album
│  │  ├─ Header/     # To display header
│  │  ├─ Main/       # As container for all components
│  │  ├─ Photos/     # To display list of photos
│  │  ├─ Post/       # To list of post
│  │  ├─ PostDetail/ # To detail of post
│  │  ├─ Posts/      # As container for post component
│  │  ├─ Sidebar/    # To display sidebar widget
│  │  ├─ User/       # To list of user
│  │  └─ Users/      # As container for user components
│  │
│  └─ helpers/       # Contains helpers for development purpose
```

  

## Available Scripts

### `npm install`

Install the dependencies.<br>  

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

  

### `npm test`

Launches the test runner in the interactive watch mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!** 

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.