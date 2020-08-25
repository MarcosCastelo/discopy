import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
      <Container>
          <Category> 
            <span>Canais de texto</span>
            <AddCategoryIcon />
          </Category>
      </Container>
  );
}

export default ChannelList;