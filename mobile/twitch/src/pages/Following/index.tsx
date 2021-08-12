import React, { useMemo, useState, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import {
  Wrapper,
  Container,
  Main
} from './styles';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const handleWait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Following: React.FC = () => {
  const { data, indexes } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      { key: 'COMPONENT_1', render: () => <CategoryList /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      { key: 'COMPONENT_2', render: () => <StreamList /> },

      {
        key: 'RECOMMENDED_CHANNELS',
        render: () => <Title>Recommended Channels</Title>,
        isTitle: true,
      },
      { key: 'COMPONENT_3', render: () => <StreamList /> },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      { key: 'COMPONENT_4', render: () => <StreamList /> },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      { key: 'COMPONENT_5', render: () => <ChannelList /> },
    ];

    // array que contem apenas os indices dos elementos que sao titulos
    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    }
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    handleWait(1500).then(() => setRefreshing(false));
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header
          avatar
          notifications
          whispers
          search
        />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}
            indicatorStyle="white"
            contentContainerStyle={{
              paddingBottom: 75,
            }}
            
            // Refresh Effect
            refreshControl={
              <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  tintColor="#fff"
               />
            }
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
