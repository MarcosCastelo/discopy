import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  return (
      <Container>
          <Messages>
            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Hoje é meu aniversário!"
            />

            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Uma mensagem"
            />

            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Uma mensagem"
            />

            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Uma mensagem"
            />

            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Uma mensagem"
            />
          
            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Hoje é meu aniversário!"
            />


            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Uma mensagem"
            />

            <ChannelMessage 
              author="Loritta"
              date = "26/08/2020"
              content = {
                <> 
                  <Mention>@Marcos Castelo</Mention>, vou dominar o mundo XD !!!
                </>
              }
              hasMention
              isBot
            />

            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Uma mensagem"
            />

            <ChannelMessage 
              author="Marcos Castelo"
              date = "02/07/2020"
              content = "Hoje é meu aniversário!"
            />

            <ChannelMessage 
              author="Loritta"
              date = "26/08/2020"
              content = {
                <> 
                  <Mention>@Marcos Castelo</Mention>, vou dominar o mundo XD !!!
                </>
              }
              hasMention
              isBot
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