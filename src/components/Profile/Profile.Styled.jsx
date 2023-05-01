import styled from 'styled-components';

const ProfileContainer = styled.div`
display: flex; 
flex-direction: column;
align-items: center; 
background-color: #f2f2f2; 
padding: 20px; 
border-radius: 5px; 
`;

const ProfileDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const Name = styled.p`
font-weight: bold; 
margin-right: 10px
`;

const Info = styled.p`
font-size: 28px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  color: #999;
`;

const StatList = styled.ul`
background-color: #f2f2f50;
  display: flex;
  list-style: none;
  margin: 30px 0 0 0;
  padding: 0;
  gap: 20px;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StatLabel = styled.span`
  font-size: 18px;
  color: #999;
`;

const StatQuantity = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;

export {ProfileContainer, ProfileDescription, Avatar, Name, Info, StatList, StatItem, StatLabel, StatQuantity }