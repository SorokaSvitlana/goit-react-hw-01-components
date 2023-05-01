import {Avatar, OnlineIndicator} from "./Friend.Styled"
import PropTypes from 'prop-types'; 

export const FriendListItem = ({ avatar, name, isOnline }) => {
return  (<>
<OnlineIndicator style={{ backgroundColor: isOnline ? 'green' : 'red' }}></OnlineIndicator>
<Avatar src={avatar} alt="User avatar" width="48" />
<p className="name">{name}</p>
</>) }

PropTypes.PropTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };