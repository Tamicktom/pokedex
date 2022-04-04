class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    <div>Hello meteor!</div>;
  }
}

class anotherButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    <button>Another one bites the dust</button>;
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<LikeButton />, domContainer);
