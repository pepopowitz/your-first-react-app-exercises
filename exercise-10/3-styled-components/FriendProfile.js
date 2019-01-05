import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const FriendProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameH3 = styled.h3`
  margin-bottom: 0;
`;

export default function FriendProfile({ name, image }) {
  return (
    <Card>
      <FriendProfileDiv>
        <img src={image} alt={name} />
        <NameH3>{name}</NameH3>
      </FriendProfileDiv>
    </Card>
  );
}
