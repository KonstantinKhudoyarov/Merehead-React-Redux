import React from 'react';
import { store } from './store/index.js';
import '../src/Pagination.css';

export class Pagination extends React.Component {

    render() {
        const { switchPageHandler } = this.props;
        const { users, itemsPerPage } = store.getState();
        const pagesAmount = Math.ceil(users.length / itemsPerPage);
        const paginationButtons = [];

        for (let i = 1; i <= pagesAmount; i++) {
            paginationButtons.push(<li key={i} className="pagination__item" onClick={switchPageHandler(i)}>{i}</li>);
        }

        return (
            <ul className="pagination">
                {paginationButtons}
            </ul>
        );
    }
}