import * as React from "react";
import User from "../data/user";
import CreditBox from "./CreditBox";
import Headline from "./Headline"
import Message from "./Message";


export interface ICardProps {
  user: User;
  creditImageUrl: string;
}

class Card extends React.PureComponent<ICardProps, any> {
  public render() {
    return (
      <div className="card">
        <section className="main">
          <Headline headline={this.props.user.headline} />
          <CreditBox
            name={this.props.user.name}
            creditImageUrl={this.props.creditImageUrl}
          />
        </section>
        <Message
          title={this.props.user.headline}
          message={this.props.user.message}
          url={this.props.user.url}
          urlDisplayName={this.props.user.urlDisplayName}
        />
      </div>
    );
  }
}

export default Card;
