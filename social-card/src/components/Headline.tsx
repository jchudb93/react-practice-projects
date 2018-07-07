import * as React from "react";

export interface IHeadline {
  headline: string;
}

class Headline extends React.PureComponent<IHeadline, any> {
  public render() {
    return <h3 className="main__headline">{this.props.headline}</h3>;
  }
}

export default Headline;
