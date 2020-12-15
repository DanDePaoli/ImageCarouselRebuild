/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const RightButton = styled.button`
  background-color: white;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  height: 35px;
  margin: 0px;
  outline: none;
  width: 35px;
  :hover {
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18);
    transition: box-shadow 0.2s ease 0s;
  }
`;

const LeftButton = styled.button`
  background-color: white;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  height: 35px;
  margin-right: 12px;
  outline: none;
  width: 35px;
  :hover {
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18);
    transition: box-shadow 0.2s ease 0s;
  }
`;

const PageCount = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-right: 16px;
`;

const Container = styled.div`
  align-items: center;
  background-color: rgb(247, 247, 247);
  display: flex;
`;

class NavButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 3,
    };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(count) {
    this.props.renderPage(count);
  }

  handleRightClick() {


    let curCount = this.state.currentPage;
    if (curCount === this.state.totalPages) {
      const resetState = 1;
      this.setState({ currentPage: resetState });

      this.props.resetBeginning()
      // this.handlePageChange(resetState);
    } else {
      curCount += 1;
      this.setState({ currentPage: curCount });
      this.props.scrollRight();
      // this.handlePageChange(curCount);
    }
  }

  handleLeftClick() {

    let curCount = this.state.currentPage;
    if (curCount === 1) {
      this.setState({ currentPage: this.state.totalPages });
      this.props.resetToEnd()
      // this.handlePageChange(this.state.totalPages);
    }
    if (curCount !== 1) {
      curCount -= 1;
      this.setState({ currentPage: curCount });
      this.props.scrollLeft();
      // this.handlePageChange(curCount);
    }
  }



  render() {


    return (
      <Container>
        <PageCount>
          {this.state.currentPage}
          {' '}
          /
          {' '}
          {this.state.totalPages}
        </PageCount>
        <LeftButton onClick={this.handleLeftClick} onMouseEnter={this.handleLeftMouseHover}>
          <svg viewBox="0 0 18 18" role="presentation" style={{ height: 10, width: 10 }}>
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
          </svg>
        </LeftButton>
        <RightButton onClick={this.handleRightClick} onMouseEnter={this.handleRightMouseHover}>
          <svg viewBox="0 0 18 18" style={{ height: 10, width: 10 }}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
          </svg>
        </RightButton>
      </Container>
    );
  }
}

export default NavButtons;
