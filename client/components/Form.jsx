import React from 'react';
import styled from 'styled-components';

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

const Heading = styled.h1`
  font-family: inherit;
  font-size: 14px;
`;

const NameThisList = styled.div`
  display: block;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  min-height: 50px;
  padding: 0px 24px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const Footer = styled.div`
  align-items: center;
  border-top: 1px solid rgb(235, 235, 235);
  display: flex;
  justify-content: space-around;
  line-height: 20px;
  padding: 16px 24px;
`;

const CreateAList = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background: rgb(221, 221, 221)
  font: inherit;
  font-size: 16px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  line-height: 34px;
  padding: 10px;
  width: 100%;
  outline: none;
  :hover{
    cursor: not-allowed;
  }
`;

const CreateAListTriggered = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background: rgb(34, 34, 34);
  font: inherit;
  font-size: 16px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  line-height: 34px;
  padding: 10px;
  width: 100%;
  outline: none;
  :hover{
    background: black;
  }
`;

const FormContainer = styled.div`
  display: block;
  width: 94%;
  padding: 32px 16px;
`;

const Input = styled.input`
  margin: 26px 12px 10px 12px;
  border: none;
  background: tansparent;
  width: 100%;
  min-height: 1px;
  maxlength: 50;
  outline: none;
`;

const InputContainer = styled.div`
  display: flex;
  border: solid 1px;
  border-radius: 8px;
  color: rgb(113, 113, 113);
  cursor: text;
  font-size: 16px;
  font-weight: 400;
  height: 56px;
  line-height: 20px;
  width: 100%;
`;

const InputTriggeredContainer = styled.div`
  display: flex;
  border: solid 1px;
  border-radius: 8px;
  color: rgb(113, 113, 113);
  cursor: text;
  font-weight: 400;
  height: 56px;
  line-height: 20px;
  width: 100%;
`;

const NameContainerTriggered = styled.div`
  transform: translateY(-8px) scale(0.75);
  color: rgb(113, 113, 113)
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  position: absolute;
`;

const Name = styled.div`
  position: absolute;
  margin: 18px 12px;
  width: 100%;
`;

const NameContainer = styled.div`

  color: rgb(113, 113, 113)
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  position: absolute;
`;

const Minimum = styled.div`
  color: rgb(113, 113, 113);
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  padding-top: 8px;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTriggered: false,
      value: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.exitInput = this.exitInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  exitInput() {
    this.setState({ inputTriggered: false });
  }

  handleClick() {
    this.setState({ inputTriggered: true });
  }

  render() {
    return (
      <NameThisList onClick={this.state.inputTriggered ? this.exitInput : null}>
        <Header onClick={this.exitInput}>
          <ExitButton onClick={this.props.hideForm}>
            <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ height: 16, width: 16 }}>
              <path d="m6 6 20 20" />
              <path d="m26 6-20 20" />
            </svg>
          </ExitButton>
          <Heading>Name this list</Heading>
          <DummyDiv />
        </Header>
        <FormContainer>
          <InputContainer>
            {this.state.inputTriggered
              ? (
                <NameContainerTriggered>
                  <Name>Name</Name>
                </NameContainerTriggered>
              )
              : (
                <NameContainer>
                  <Name>Name</Name>
                </NameContainer>
              )}
            <Input type="text" maxlength="50" value={this.state.value} onClick={this.handleClick} onChange={this.handleChange} />
          </InputContainer>
          <Minimum>50 characters maximum</Minimum>
        </FormContainer>
        <Footer>
          {this.state.value.length > 0
            ? (
              <CreateAListTriggered onClick={() => { this.props.renderLike(); }}>
                Create
              </CreateAListTriggered>
            )
            : (
              <CreateAList>Create</CreateAList>
            )}
        </Footer>
      </NameThisList>
    );
  }
}

export default Form;
