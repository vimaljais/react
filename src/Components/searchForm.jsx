import React, { Component } from 'react';

class SearchForm extends Component {
    state = {
        searchText: ''
    };

    onSearchChange = q => {
        this.setState({ searchText: q.target.value });
    };

    handleSubmit = q => {
        q.preventDefault();
        this.props.onSearch(this.query.value);
        q.currentTarget.reset();
    };

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input
                    type="search"
                    onChange={this.onSearchChange}
                    ref={input => (this.query = input)}
                    name="search"
                    placeholder="Search..."
                />
                <button type="submit" id="submit" className="search-button">
                    <i className="material-icons icn-search">search</i>
                </button>
            </form>
        );
    }
}

export default SearchForm;