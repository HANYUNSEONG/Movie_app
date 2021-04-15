import React from 'react';
import styled from '@emotion/styled';

const WrapBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrap: React.FC = (props) => {
  return (
    <WrapBox>
      {props.children}
    </WrapBox>
  )
}

export default Wrap;