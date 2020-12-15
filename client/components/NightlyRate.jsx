/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const PerNight = styled.span`
  margin-left: 0.25em;
`;

const Rate = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  max-height: 20px;
`;

const NightlyRate = (props) => (
  <Rate>
    <strong>
      <span>$</span>
      {props.rate.rate}
    </strong>
    <PerNight>
      / night
    </PerNight>
  </Rate>
);

export default NightlyRate;
