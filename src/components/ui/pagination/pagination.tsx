type PaginationProps = {
  totalItemCount: number
}

const pageSize = [10, 20, 30, 50, 100]

export const Pagination = (props: PaginationProps) => {
  const {} = props

  const pagesCount = Math.ceil(200 / pageSize[0])
  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <button style={{ color: 'black' }}>{'<'}</button>
      {pages.map((el, i) => (
        <button key={i} className={''}>
          {el}
        </button>
      ))}
      <button className={''} style={{ color: 'black' }}>
        {'>'}
      </button>
      <span>
        Показать
        <button>100</button>
        на странице
      </span>
    </div>
  )
}
