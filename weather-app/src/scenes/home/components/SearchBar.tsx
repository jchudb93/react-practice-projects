import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchWeather } from "../../../services/weather/actions/weather";

class SearchBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  public render() {
    return (
      <div>
        <form>
          <input
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </span>
        </form>
      </div>
    );
  }

  private onInputChange = (event: any) => {
    this.setState({ term: event.target.value });
  };

  private onFormSubmit = (event: any) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
