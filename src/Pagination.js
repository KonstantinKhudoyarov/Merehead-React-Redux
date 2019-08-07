import React from 'react';
import store from './store/index.js';

class Pagination extends React.Component {

    render() {
        const pagesAmount = Math.ceil(store.getState().result.length / store.getState().itemsPerPage);
        const paginationButtons = [];

        for (let i = 1; i <= pagesAmount; i++) {
            paginationButtons.push(<li className="pagination__item">{i}</li>);
        }

        return (
            <ul className="pagination">
                {paginationButtons}
            </ul>
        );
    }
}

export default Pagination;