import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchAsteroids } from './redux/actions';
import AsteroidList from './components/Asteroid/AsteroidList';
import AsteroidDetail from './components/Asteroid/AsteroidDetail';
import SearchBar from './components/SearchText/SearchBar';
import SortButton from './components/Sort/SortButton';
import { Provider } from 'react-redux';
import store from './redux/store';
import { RootState } from './redux/reducers';
import DateRangeSearch from './components/SearchDate/DateSearch';
import Asteroid from "./models/asteroid";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const App: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();


  useEffect(() => {
    const fetchData = async () => {
      const startDate = '2023-01-01';
      const endDate = '2023-01-05';
      await dispatch(fetchAsteroids(startDate, endDate));
    };

    fetchData();
  }, [dispatch]);

  return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <h1>Asteroid App</h1>
            <div className="app__controls">
              <SearchBar />
              <SortButton sortOption="name" />
              <DateRangeSearch />
            </div>
            <Routes>
              <Route
                  path="/"
                  element={<AsteroidList />}
              />
              <Route path="/asteroids/:id" element={<AsteroidDetail />} />
            </Routes>
          </div>
        </Router>
      </Provider>
  );
};

export default App;
