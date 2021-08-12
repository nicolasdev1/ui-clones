import React from 'react';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem: React.FC = () => {
    return (
      <ChannelContainer>
        <LeftSide>
          <Avatar />

          <Column>
            <Username>rocketseat_oficial</Username>
            <Info>36 news videos</Info>
          </Column>
        </LeftSide>
      </ChannelContainer>
    );
  }
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
