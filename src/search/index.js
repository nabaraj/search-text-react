import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
        this.searchText = this.searchText.bind(this);
        this.changeSearchText = this.changeSearchText.bind(this);
    }
    changeSearchText(e){
        this.setState({
            searchText:e.target.value
        })
    }
    searchText(){
        let searchText = this.state.searchText;
        this.props.searchItem(searchText);
    }
    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input type="text" onChange={this.changeSearchText} value={this.state.searchText} className="form-control"/>
                    <button className="btn btn-primary" onClick={this.searchText}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Search;