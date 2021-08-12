import styled from 'styled-components/native';

import colors from '../../styles/colors';

import { Props } from '.';

export const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  padding-right: 14px;
`;

export const Avatar = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  border-radius: 16px;

  background-color: ${colors.tag};
`;

export const OnlineStatus = styled.View`
  width: 10px;
  height: 10px;

  border: 2px solid ${colors.primary};
  border-radius: 10px;

  background-color: ${colors.green};

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Center = styled.View`
  justify-content: center;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #fff;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
