/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 85%;
  font-weight: 400;
  font-size: 16px;
  max-height: 20px;
  margin-bottom: 4px;
`;

const Description = (props) => (
  <Title>{props.description.description}</Title>
);

export default Description;
