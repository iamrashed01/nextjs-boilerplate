import { Component } from 'react';

// This function takes a component...
export default function withProtected(WrappedComponent) {
  // ...and returns another component...
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
      };
    }

    render() {
      // ... and renders the wrapped component with the fresh data!

      const { user } = this.state;

      // Notice that we pass through any additional props
      return <WrappedComponent user={user} {...this.props} />;
    }
  };
}
