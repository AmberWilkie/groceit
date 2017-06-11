### Dependencies
```
npm install --save react-modal redux react-redux redux-promise redux-form react-router-dom react-router-redux@next react-bootstrap react-router-bootstrap
```

### Notes
- You'll have to install the Redux Chrome devtools extension. The damn thing breaks entirely. You might want to edit out that line in `configureStore` -> `compose` for production.