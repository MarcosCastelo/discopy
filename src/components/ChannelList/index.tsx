import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="comunicados"/>
      <ChannelButton channelName="geral"/>
      <ChannelButton channelName="bots"/>
      <ChannelButton channelName="promoções"/>
      <ChannelButton channelName="nostalgia"/>
      <ChannelButton channelName="flutter"/>
    </Container>
  );
}

export default ChannelList;