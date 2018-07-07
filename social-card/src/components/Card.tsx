import * as React from "react";
import User from "../data/user";
import CreditBox from "./CreditBox";

export interface ICardProps {
  user: User;
  creditImageUrl: string;
}

class Card extends React.Component<ICardProps, any> {
  public render() {
    return (
      <div className="card">
        <CreditBox
          name={this.props.user.name}
          creditImageUrl={this.props.creditImageUrl}
        />
      </div>
    );
  }
}

export default Card;
