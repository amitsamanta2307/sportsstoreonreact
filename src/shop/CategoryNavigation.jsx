import React from 'react';
import { Link } from 'react-router-dom';

class CategoryNavigation extends React.Component {

    render() {
        return <React.Fragment>
            <Link
                className="btn btn-secondary btn-block"
                to={ this.props.baseUrl }>
                { this.props.categories && this.props.categories.map(cat =>
                    <Link
                        key={ cat }
                        className="btn btn-secondary btn-block"
                        to={ `${this.props.baseUrl}/${cat.toLowerCase()}` }>
                        { cat }
                    </Link>
                )}
            </Link>
        </React.Fragment>
    }
}

export default CategoryNavigation;