const PageLayout = ({ list, filters }) => {
  return (
    <div className="pageLayout">
      <div className="pageLayout-filters">{filters}</div>

      <div className="pageLayout-list">{list}</div>
    </div>
  )
}

export default PageLayout
