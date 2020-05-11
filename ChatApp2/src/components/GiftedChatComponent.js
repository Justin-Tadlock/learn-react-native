import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import Firebase from "../../Firebase";

class GiftedChatComponent extends React.Component {
  constructor(props) {
    super(props);

    this.username = props.username;
  }
  state = {
    messages: [],
  };

  componentDidMount() {
    Firebase.shared.on((messageArr) => {
      this.setState((prevState) => ({
        messages: GiftedChat.append(prevState.messages, messageArr),
      }));
    });
  }

  get user() {
    return { name: this.username, _id: Firebase.shared.uid };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        user={this.user}
        onSend={Firebase.shared.send}
      />
    );
  }
}

export default GiftedChatComponent;
