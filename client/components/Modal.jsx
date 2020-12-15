import React from 'react';
import styled from 'styled-components';
import Form from './Form.jsx';

const DummyDiv = styled.div`
`;

const ExitButton = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
  display: block;
  fill: none;
  outline: none;
  overflow: visible;
  stroke: currentcolor;
  stroke-width: 3;
  :hover {
    background-color: rgb(247, 247, 247)
  }
`;

const CreateList = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: transparent;
  font: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  padding: 10px;
  width: 100%;
  outline: none;
  :hover{
    background-color: rgb(247, 247, 247)
  }
`;

const HeadingContainer = styled.div`
  display: block;
`;

const Heading = styled.h1`
  font-family: inherit;
  font-size: 14px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  min-height: 64px;
  padding: 0px 24px;
`;

const Footer = styled.div`
  align-items: center;
  border-top: 1px solid rgb(235, 235, 235);
  display: flex;
  justify-content: space-around;
  line-height: 20px;
  padding: 16px 24px;
`;

const SaveToAList = styled.div`
  display: block;
  width: 100%;
  max-width: 568px;
  border-radius: 12px;
`;

const ListContainer = styled.div`
  padding: 20px 16px;
`;

const ListItem = styled.div`
  padding: 20px 16px;
  cursor: pointer;
  border-radius: 12px;
  :hover{
    background-color: rgb(247, 247, 247)
  }
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  color: #484848;
  display: flex;
  flex-direction: row;
  font: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  justify-content: center;
  max-width: 568px;
  padding-top: 12px;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const OuterContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 40px;
  z-index: 2;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding-top: 12px;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(72, 72, 72, 0.75);
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTriggered: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  hideForm() {
    this.setState({ formTriggered: false });
  }

  handleClick() {
    this.setState({ formTriggered: true });
  }

  render(props) {
    if (this.state.formTriggered) {
      return (
        <OuterContainer>
          <ModalContainer>
            <Form hideForm={this.hideForm} renderLike={this.props.renderLike} />
          </ModalContainer>
        </OuterContainer>
      );
    }
    return (
      <OuterContainer>
        <ModalContainer>
          <SaveToAList>
            <Header>
              <ExitButton onClick={this.props.hideModal}>
                <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ height: 16, width: 16 }}>
                  <path d="m6 6 20 20" />
                  <path d="m26 6-20 20" />
                </svg>
              </ExitButton>
              <Heading>Save to a List</Heading>
              <DummyDiv />
            </Header>
            <ListContainer>
              <ListItem>List Item</ListItem>
              <ListItem>Anotha One</ListItem>
            </ListContainer>
            <Footer>
              <CreateList type="button" onClick={this.handleClick}>Create a list</CreateList>
            </Footer>
          </SaveToAList>
        </ModalContainer>
      </OuterContainer>
    );
  }
}

export default Modal;
