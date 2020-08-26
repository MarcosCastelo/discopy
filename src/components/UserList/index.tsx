import React from 'react';

import { Container } from './styles';

const UserList: React.FC = () => {
  return (
      <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="Marcos Castelo" />

        <Role>Offline - 18</Role>
        <UserRow nickname="Loritta" isBot />
      </Container>
  );
}

export default UserList;