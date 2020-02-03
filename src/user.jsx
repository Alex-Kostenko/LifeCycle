import React from 'react';


class RenderUser extends React.Component {

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    if (this.props.user === undefined) {
      console.log(this.props.user);
      return "User  is undefined";
    }
    if (this.props.user.name === undefined) {
      console.log(this.props.user);
      return "User  is undefined";
    }

    return <div> {this.props.user.name} </div>;
  }
}

export default RenderUser;
