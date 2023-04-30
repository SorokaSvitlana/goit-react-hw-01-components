export const Statistics = ( {title, stats}) => {
    return (
    <section className="statistics">
  {title && <h2>{ title}</h2>}

  
  <ul className="stat-list">
  {stats.map(({ id, label, percentage }) => ( <li key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li> )) }
  </ul>
</section> )
}