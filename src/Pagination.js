import React from 'react';
import { store } from './store/index.js';

export class Pagination extends React.Component {

    render() {
        const { switchPageHandler } = this.props;
        const pagesAmount = Math.ceil(store.getState().users.length / store.getState().itemsPerPage);
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