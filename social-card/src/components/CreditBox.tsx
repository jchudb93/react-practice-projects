import * as React from "react";

export interface ICreditBox {
  name: string;
  creditImageUrl: string;
}

class CreditBox extends React.PureComponent<ICreditBox, any> {
  public render() {
    return (
      <div className="credit-box">
        <p className="credit-box__name">{this.props.name}</p>
        <img className="credit-box__img" src={this.props.creditImageUrl} />
      </div>
    );
  }
}

export default CreditBox;
