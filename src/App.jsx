import React from 'react';
// import DrawerNavigator from './navigators/DrawerNavigator';
// import Home from './screens/Home';
// import Camera from './screens/Camera';
import ImageManager from './screens/ImageManager';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return(
    <Provider store={store}>
      <ImageManager />
    </Provider>
  ) 
  
}

export default App;
