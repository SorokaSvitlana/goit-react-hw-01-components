import PropTypes from 'prop-types';
import {ProfileContainer, ProfileDescription, Avatar,Name,  Info, StatList, StatItem, StatLabel, StatQuantity} from "./Profile.Styled"
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <ProfileContainer>
   <ProfileDescription>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Info>@{tag}</Info>
    <Info>{location}</Info>
  </ProfileDescription>

  <StatList>
    <StatItem>
      <StatLabel>Followers</StatLabel>
      <StatQuantity>{stats.followers}</StatQuantity>
    </StatItem>
    <StatItem>
      <StatLabel>Views</StatLabel>
      <StatQuantity>{stats.views}</StatQuantity>
    </StatItem>
    <StatItem>
      <StatLabel>Likes</StatLabel>
      <StatQuantity>{stats.likes}</StatQuantity>
    </StatItem>
  </StatList>
      </ProfileContainer>
    );
  };

  PropTypes.PropTypes = {
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.array.isRequired,
  };