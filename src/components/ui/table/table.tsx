import t from './table.module.scss'

type tableType = {
  children: React.ReactNode
}

export const Table: React.FC<tableType> = ({ children }) => {
  return (
    <table>
      <thead className={t.table}>
        <tr>
          <th></th>
          {/*<th>Cards</th>*/}
          {/*<th onClick={onSortHandler}>Last Updated</th>*/}
          {/*<th>Created by</th>*/}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
