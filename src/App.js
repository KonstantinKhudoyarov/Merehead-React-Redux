import React from 'react';
import './App.css';
import { store } from './store/index.js';
import { setCurrentPage } from './actions/index.js'
import { Pagination } from './Pagination';

export class App extends React.Component {

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
    const startUserOnPage = (currentPage === 1) ? 0 : itemsPerPage * (currentPage - 1);
    const lastUserOnPage = itemsPerPage * currentPage;
    const currentUsers = users.slice(startUserOnPage, lastUserOnPage);

    return (
      <div className='container'>
        <section className="users">
          <h1 className='title'>Users List</h1>
          <ul className="list">
            {currentUsers.map((item) => {
              return (
                <li key={item.id} className="list__item">
                  <div className="list__item-wrap">
                    <h3 className="list__title">{item.name} {item.surname}</h3>
                    <p className="list__desc">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <Pagination
          switchPageHandler={this.switchPageHandler}
        />
      </div>
    );
  }

}