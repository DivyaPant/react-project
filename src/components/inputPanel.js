import React from "react";

//Input class for taking and storing user data and passing the values to call API
class Inputpanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ingredients: "", other: "" };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="search">
          <div className="max-width-search">
            <form className="searchPanel">
              <label htmlFor="ingredients"></label>
              <input
                placeholder="Ingredients"
                type="text"
                name="ingredients"
                value={this.state.ingredients}
                onChange={this.handleChange}
              />
              <label htmlFor="other"></label>
              <input
                placeholder="Keyword"
                type="text"
                name="other"
                value={this.state.other}
                onChange={this.handleChange}
              />
            </form>
            <button
              className="searchBtn"
              onClick={() => {
                this.props.click(this.state.ingredients, this.state.other);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Inputpanel;
