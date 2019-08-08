import React from 'react';
import './App.css';
import { store } from './store/index.js';
import { setCurrentPage } from './actions/index.js'
import { Pagination } from './Pagination';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    }

    store.subscribe(() => {
      this.setState({
        currentPage: store.getState().currentPage
      })
    })
  }

  switchPageHandler(page) {
    return () => {
      store.dispatch(setCurrentPage(page));
    }
  }

  render() {
    const { users, currentPage, itemsPerPage } = store.getState();
    const startUserOnPage = (currentPage == 1) ? 0 : itemsPerPage * (currentPage - 1);
    const lastUserOnPage = itemsPerPage * currentPage;
    const currentUsers = users.slice(startUserOnPage, lastUserOnPage);
    console.log(startUserOnPage, lastUserOnPage);

    return (
      <div>
        <ul className="list">
          {currentUsers.map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.name} {item.surname}</h3>
                <p>{item.desc}</p>
              </li>
            );
          })}
        </ul>
        <Pagination
          switchPageHandler={this.switchPageHandler}
        />
      </div>
    );
  }

}

export default App;
