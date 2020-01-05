import React from 'react';
import { AppStore } from './store';
import { Provider } from 'react-redux'
import Index from './components';

export default function App(){
  return(
    <Provider store={AppStore}>
      <Index/>
    </Provider>
  )
}