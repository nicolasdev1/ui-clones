import React, { useState, useCallback, useMemo } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import {
  Container,
  Wrapper,
  Main
} from './styles';

import Header from '../../components/Header';
import NotificationList from '../../components/NotificationList';

const handleWait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

interface Item {
  key: string;
  render: () => JSX.Element;
  isNotRead?: boolean;
}

const Notifications: React.FC = () => {
  const { data } = useMemo(() => {
    const items: Item[] = [
      {
        key: String(Math.random()),
        render: () => <NotificationList />
      },
    ];

    return {
      data: items,
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
          title="Notifications"
          back
          avatar={false}
          config
          notifications={false}
          whispers={false}
          search={false}
        />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
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

export default Notifications;
