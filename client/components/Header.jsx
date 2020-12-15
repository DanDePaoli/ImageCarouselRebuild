/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  background-color: inherit;
  display: inherit;
  color: #222222;
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  padding: 0;
`;

const Section = styled.section`
  background-color: inherit;
  display: block;
`;

const Header = () => (
  <Section>
    <Heading>Places to stay</Heading>
  </Section>
);

export default Header;
