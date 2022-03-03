import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  state = { searchText: "" };

  // onFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("searchtext val", this.state.searchText);
  // };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(e) => {
            e.preventDefault();
            //console.log("searchtext val", this.state.searchText);
            this.props.onSearchBarSubmit(this.state.searchText);
          }}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchText}
              placeholder="enter text to be searched"
              onChange={(e) => {
                this.setState({
                  searchText: e.target.value.toLocaleUpperCase(),
                });
                console.log(this.state.searchText);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
