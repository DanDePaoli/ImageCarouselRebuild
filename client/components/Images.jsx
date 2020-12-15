/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import Heart from './Heart.jsx';

const InnerHeartWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 250px;
  padding: 8px;
`;

const InnerWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 250px;
  padding: 8px;
`;

const ListingImage = styled.img`
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  width: 100%;
  object-fit: cover;
  :hover {
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18);
    transition: box-shadow 0.2s ease 0s;
  }
`;

const OuterWrapper = styled.div`
  margin: 0;
  margin-bottom: 10px;
  padding:0;
  height: 165px;
  width: 260px;
  position: relative;
`;

const SuperhostWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: rgb(34, 34, 34);
  font-size: 12px;
  font-family: inherit;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 4px 8px;
`;

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <OuterWrapper>
        <InnerWrapper>
          {this.props.graphics.superhost ? (
            <SuperhostWrapper>
              SUPERHOST
            </SuperhostWrapper>
          )
            : null}
          <Heart
            heart={this.props.graphics}
            modal={this.props.modal}
            liked={this.props.wasLiked}
          />
        </InnerWrapper>
        <ListingImage alt="" src={this.props.graphics.image} />
      </OuterWrapper>
    );
  }
}

export default Images;
