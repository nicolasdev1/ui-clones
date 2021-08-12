import React from 'react';

import {
  NotificationContainer,
  NotificationImage,
  List
} from './styles';

interface NotificationItemProps {
  isHeader?: boolean;
}

const NotificationList: React.FC = () => {
  const NotificationItem: React.FC<NotificationItemProps> = ({ isHeader }) => {
    return (
      <NotificationContainer>
        <NotificationImage />

        <NotificationTextContainer>
          <NotificationText>

          </NotificationText>


        </NotificationTextContainer>
      </NotificationContainer>
    );
  }

  return (
    <List>
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </List>
  );
};

export default NotificationList;
