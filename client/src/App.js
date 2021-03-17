
import React, {useEffect} from 'react';
import {Provider as StoreProvider, useDispatch, useSelector} from 'react-redux';
import {AnimatePresence} from 'framer-motion';
import store from './store';
import AppLayout from './components/AppLayout';
import Login from './components/Login';
import {authenticateUser} from './store/appSlice';
import Loading from './components/Loading';



const App = () => {
  const dispatch = useDispatch();

  const {loading, user} = useSelector(state => state.app);

  useEffect(() => {
    dispatch(authenticateUser());
  }, []);


  return (

    <AnimatePresence initial={false}>
      {loading ? (
        <Loading active={true}/>
      ) : (
        <>
          {user === null ? (
            <Login/>
          ) : (
            <AppLayout/>
          )}
        </>
      )}
    </AnimatePresence>

  );
};
const AppContainer = () => (

  <StoreProvider store={store}>
      <App/>
  </StoreProvider>
);
export default AppContainer;
