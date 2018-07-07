import * as React from "react";

interface IMessageProps {
  title: string;
  message: string;
  url: string;
  urlDisplayName: string;
}

class Message extends React.PureComponent<IMessageProps, any> {
  public render() {
    return (
      <section className="message">
        <h4 className="message__headline">{this.props.title}</h4>

        <p className="message_body">{this.props.message}</p>
        <a href={this.props.url} className="message_url">
          {this.props.urlDisplayName}
        </a>
      </section>
    );
  }
}

export default Message;
