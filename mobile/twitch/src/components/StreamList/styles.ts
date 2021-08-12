import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 24px;
`;

export const StreamContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  
  margin-bottom: 24px;
  margin-right: 24px;
`;

export const StreamThumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const StreamColumn = styled.View`
  flex: 1;

  margin-left: 11px;

`;

export const StreamRow = styled.View`
  height: 66px;

  justify-content: space-between;
`;

export const StreamHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StreamAvatar = styled.View`
  width: 20px;
  height: 20px;

  border-radius: 10px;

  background-color: ${colors.tag};
`;

export const StreamUsername = styled.Text`
  font-family: roboto_700;
  color: ${colors.black};

  margin-left: 5px;
`;

export const StreamDescription = styled.Text`
  color: ${colors.black};
`;

export const StreamCategory = styled.Text`
  font-family: roboto_500;
  color: ${colors.gray};
`;

export const TagRow = styled.View`
  flex-direction: row;

  margin-top: 8px;
`;

export const TagView = styled.View`
  background-color: ${colors.tag};

  border-radius: 10px;

  margin-right: 5px;

  padding: 2px 8px;
`;

export const TagText = styled.Text`
  font-family: roboto_500;
  font-size: 13px;
  color: ${colors.black};
`;
