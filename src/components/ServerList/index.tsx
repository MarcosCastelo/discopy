import React from 'react';

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
        <ServerButton isHome />

        <Separator />

        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={4}/>
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications mentions={2}/>
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={12}/>
    </Container>
  );
}

export default ServerList;