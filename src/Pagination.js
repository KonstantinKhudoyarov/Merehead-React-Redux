import React from 'react';

class Pagination extends React.Component {

    render() {
        const { dataAmount, currentPage, itemsPerPage } = this.props;
        const pagesAmount = dataAmount / itemsPerPage;

        return (
            <div className="pagination">
                {pagesAmount}
            </div>
        );
    }
}

export default Pagination;