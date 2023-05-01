import styled from 'styled-components';
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const StatisticsSection = styled.section`
width: 500px;
display: flex;
flex-direction: column;
align-items: center;
margin: 20px 0;
border: 1px solid white;
border-radius: 10px;
overflow: hidden;
background-color: #f5f5f5;
`;
const StatisticTitle = styled.h2`
font-size: 36px; 
margin-bottom: 20px; 
text-align: center;`;


const StatisticList = styled.ul`
width: 100%;
list-style: none;
margin: 0;
padding: 0;
display: flex;
justify-content: center; `;

  const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  background-color: ${getRandomHexColor};
  }`

  const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Percentage = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export {StatisticsSection, StatisticTitle, StatisticList, StatisticItem, Label, Percentage}