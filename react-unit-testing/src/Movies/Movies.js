import { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { url } = this.props;

    return (<a href={url}>
      <div>Here's the Movies Component</div>
      <p role='heading'>Welcome to movies page!</p>
    </a>
    )
  }
}

export default Movies;