import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage from '../ChannelMessage';

const ChannelData: React.FC = () => {
  return (
      <Container>
          <Messages>
            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Hoje é meu aniversário!"
            />
          </Messages>

          <InputWrapper>
            <Input type="text" placeholder="Conversar em #geral"/>
            <InputIcon />
          </InputWrapper>
      </Container>
  );
}

export default ChannelData;