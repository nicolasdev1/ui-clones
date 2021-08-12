import { Platform } from 'react-native';
import Constants from 'expo-constants';

import styled from 'styled-components/native';

import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-top: ${statusBarHeight + 'px'};

  background-color: ${colors.primary};
`;

export const Heading = styled.Text`
  font-family: roboto_500;
  font-size: 30px;
  color: ${colors.purple};
`;
