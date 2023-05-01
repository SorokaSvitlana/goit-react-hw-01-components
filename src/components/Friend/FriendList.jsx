import { FriendListItem } from "./FriendListItem"
import {FriendsList,FriendItem } from "./Friend.Styled"
import PropTypes from 'prop-types'

export const FriendList = ({friends}) => {

    return (
        <FriendsList>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendItem key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </FriendItem>
          ))}
        </FriendsList>
      );
}

PropTypes.PropTypes = {
  friends: PropTypes.array,
};