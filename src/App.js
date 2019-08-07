import React from 'react';
import './App.css';
import store from './store/index.js';
import setCurrentPage from './actions/index.js'
import Pagination from './Pagination';

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  switchPageHandler() {

  }

  render() {

    return (
      <div>
        <ul className="list">
          {store.getState().result.map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </li>
            );
          })}
        </ul>
        <Pagination />
      </div>
    );
  }

}

export default App;
