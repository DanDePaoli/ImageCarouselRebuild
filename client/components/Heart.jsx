import React from 'react';
import styled from 'styled-components';

const HeartGraphic = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  fill: rgba(0, 0, 0, 0.5);
  stroke: rgb(255, 255, 255);
  stroke-width: 2;
  overflow: visible;
`;

const ClickedHeartGraphic = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  fill: rgb(255, 56, 92);
  stroke: rgb(255, 255, 255);
  stroke-width: 2;
  overflow: visible;
`;

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // pass function to handle click whne ths button is clicks
  // this function whould have to inform the app that the state has changed...
  // so what is this function we write just changes some state in the app...
  // and this state change triggers the modal to appear!

  // handleSubmit() {
  // }

  handleClick() {
    this.props.modal();
    if (this.props.liked) {
      this.setState({ isLiked: true });
    }
  }
  // this.props.heart.wasLiked

  render() {
    return (
      <div>
        {this.state.isLiked
          ? (
            <ClickedHeartGraphic onClick={this.handleClick}>
              <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ height: 24, width: 24 }}>
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
              </svg>
            </ClickedHeartGraphic>
          )
          : (
            <HeartGraphic onClick={this.handleClick}>
              <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ height: 24, width: 24 }}>
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
              </svg>
            </HeartGraphic>
          )}
      </div>
    );
  }
}

export default Heart;
