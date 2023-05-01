import {StatisticsSection, StatisticTitle, StatisticList, StatisticItem, Label, Percentage} from "./Statistic.Styled"
import PropTypes from 'prop-types'; 
export const Statistics = ( {title, stats}) => {
    return (
    <StatisticsSection>
  {title && <StatisticTitle>{ title}</StatisticTitle>}

  
  <StatisticList>
  {stats.map(({ id, label, percentage }) => ( <StatisticItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticItem> )) }
  </StatisticList>
</StatisticsSection> )
}

PropTypes.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};