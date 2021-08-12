import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0;
`;

export const ChannelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-right: 14px;

  margin-bottom: 25px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;

  border-radius: 24px;

  background-color: ${colors.tag};
`;

export const Column = styled.View`
  padding-left: 10px;
`;

export const Username = styled.Text`
  font-family: roboto_500;
  font-size: 16px;
  color: ${colors.black};
`;

export const Info = styled.Text`
  font-size: 13px;
  color: ${colors.gray};

  margin-top: 1px;
`;
