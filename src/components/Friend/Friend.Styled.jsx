import styled from 'styled-components';

const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  gap: 10px;
  background-color: #f2f2f2; 
  border-radius: 10px;
  overflow: hidden;
`;

const FriendItem = styled.li`
  display: flex;
  align-items: center;  
  width: 100%
  margin-bottom: 10px;
  background-color: aqua ;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  padding: 5px;
`;

const Avatar = styled.img`
  margin-right: 10px;
  margin-left: 10px;
`;

const OnlineIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;


export { FriendsList, FriendItem, Avatar, OnlineIndicator};
