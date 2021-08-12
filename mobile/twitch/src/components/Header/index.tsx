import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons, Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';

import {
  Container,
  Avatar,
  OnlineStatus,
  LeftSide,
  Center,
  Title,
  RightSide,
  Button,
} from './styles';
import { Platform } from 'react-native';

export interface Props {
  title?: string;
  back?: boolean;
  config?: boolean;
  avatar?: boolean;
  notifications?: boolean;
  whispers?: boolean;
  search?: boolean;
}

const Header: React.FC<Props> = ({ title, back, avatar, config, notifications, whispers, search }) => {
  const navigation = useNavigation();

  const handleNavigationToNotifications = () => {
    navigation.navigate('Notifications');
  }

  return (
    <Container>
      <LeftSide>
        { back 
          ?
          <Button
            style={{ marginLeft: 4 }}
          >
            <Ionicons 
              name="ios-arrow-back"
              size={24}
              color="#fff"
            />
          </Button>
          : null
        }

        { avatar ? <Avatar>
          <OnlineStatus />
        </Avatar> : null }
      </LeftSide>

      <Center>
        <Title
          style={{ paddingLeft: Platform.OS === 'android' ? 29 : 36, fontWeight: Platform.OS === 'android' ? '700' : '600' }}
        >
          {title}
        </Title>
      </Center>

      <RightSide>
        { config
          ?
          <Button
            style={{ marginRight: Platform.OS === 'android' ? 4 : 11 }}
          >
          <SimpleLineIcons 
            name="settings"
            size={22}
            color="#fff"
          />
          </Button>
          : null
        }

        { notifications ? <Button
          onPress={handleNavigationToNotifications}
        >
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button> : null }

        { whispers ? <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={24}
            color={colors.black}
          />
        </Button> : null }

        { search ? <Button>
          <Feather
            name="search"
            size={24}
            color={colors.black}
          />
        </Button> : null }
      </RightSide>
    </Container>
  );
};

export default Header;
