export const FriendListItem = ({ avatar, name, isOnline }) => {
return  (<>
<span className="status" style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
<img className="avatar" src={avatar} alt="User avatar" width="48" />
<p className="name">{name}</p>
</>) }