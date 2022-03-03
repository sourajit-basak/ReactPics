import React from "react";

class ImageCard extends React.Component {
  ref = React.createRef();
  state = { span: null };
  componentDidMount = () => {
    this.ref.current.addEventListener("load", this.setSpans);
  };
  setSpans = () => {
    console.log("imageref", this.ref.current.clientHeight);
    const picHeight = this.ref.current.clientHeight;
    const spanNeeded = Math.ceil(picHeight / 150);
    this.setState({ span: spanNeeded });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img
          ref={this.ref}
          id={this.props.image.id}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}
export default ImageCard;
