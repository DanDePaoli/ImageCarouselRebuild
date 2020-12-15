/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const List = styled.ol`
  background-color: inherit;
  display: inherit;
  margin: inherit;
  padding: inherit;
`;

const SpaceAvailable = styled.li`
  background-color: inherit;
  display: inherit;
  font-size: 16px;
  margin: inherit;
  padding: inherit;
`;

const Wrapper = styled.div`
  color: rgb(34, 34, 34);
  background-color: rgb(247, 247, 247);
  display: flex;
  font-weight: 400;
  font-size: 16px;
  max-height: 20px;
  margin-bottom: 2px;
  padding: 0;
`;

const Listing = (props) => (
  <Wrapper>
    <List>
      <SpaceAvailable>{props.listing.name}</SpaceAvailable>
    </List>
  </Wrapper>
);

export default Listing;
