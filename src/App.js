import React from 'react';
import RenderUser from './user';
import useUser from './hooks/useUser';
import CustomHook from './hooks';


class App extends React.Component {

  state = {
    // lifeCycle: String,
    // user: null,
    iteration: 0,
    isChildComponent: true,
  };

  componentWillMount() {

    this.interval_1 = setInterval(() => {
      this.setState({
        user: this.state.user ? undefined : {name: 'userName'},
      });
    }, 199000);

    this.interval_2 = setInterval(() => {
      this.setState({
        iteration: ++this.state.iteration,
      });
    }, 499000);
  }

  handleClick1 = () => {
    console.log(this.state);
  }

  handleClick2() {
    console.log(this);
  }

  // shouldComponentUpdate() {}

  componentWillUnmount() {
    clearInterval(this.interval_1);
    clearInterval(this.interval_2);
  }

  shouldComponentUpdate( nextProps, nextState ) {
    console.log(nextProps, nextState);
    if (this.state.isChildComponent === nextState.isChildComponent && this.state.user !== nextState.user) {
      return false
    }
    return true
  }
  

  render() {
    const { isChildComponent, iteration, user } = this.state;

    // const {userHook, setUserHook} = useUser();

    return (
      <div>
        <button onClick={this.handleClick1}>test 1</button>
        <button onClick={this.handleClick2}>test 2</button>
        <h1>{iteration}</h1>
        {isChildComponent && <RenderUser user={user} /> }
        <CustomHook />
      </div>
    )
  }
}

export default App;
