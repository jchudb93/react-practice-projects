import * as React from "react";
import User from "../data/user";

export interface ICardProps {
  user: User
}

class Card extends React.Component<ICardProps, any> {
  public render() {
    return (
      <div>
        {this.props.user.name}
      </div>
    );
  }
}


export default Card;