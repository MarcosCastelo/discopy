import React from 'react';

import { Container, HastagIcon, Title, Description, Separator } from './styles';

const ChannelInfo: React.FC = () => {
  return (
      <Container>
          <HastagIcon />
          <Title> comunicados</Title>
          <Separator />
          <Description>Canal para realizar comunicados importantes</Description>
      </Container>
  );
}

export default ChannelInfo;