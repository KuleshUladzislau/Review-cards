import React, { useState } from 'react'

import s from './table.module.scss'

export const Tables = () => {
  const [sort, setSort] = useState<Sort>(null)

  const data = [
    {
      title: 'Project A',
      cardsCount: 10,
      updated: '2023-07-07',
      createdBy: 'John Doe',
    },
    {
      title: 'Project B',
      cardsCount: 5,
      updated: '2023-07-06',
      createdBy: 'Jane Smith',
    },
    {
      title: 'Project C',
      cardsCount: 8,
      updated: '2023-07-05',
      createdBy: 'Alice Johnson',
    },
    {
      title: 'Project D',
      cardsCount: 3,
      updated: '2023-07-07',
      createdBy: 'Bob Anderson',
    },
    {
      title: 'Project E',
      cardsCount: 12,
      updated: '2023-07-04',
      createdBy: 'Emma Davis',
    },
  ]

  type Sort = {
    key: string
    direction: 'asc' | 'desc'
  } | null

  const handleSort = (key: string) => {
    if (sort && sort.key === key) {
      setSort({
        key,
        direction: sort.direction === 'asc' ? 'desc' : 'asc',
      })
    } else {
      setSort({
        key,
        direction: 'asc',
      })
    }
  }

  console.log(sort)

  const columns = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cardsCount',
      title: 'Cards',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'createdBy',
      title: 'Created by',
    },
  ]

  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          {columns.map((column, i) => (
            <th
              className={s.th}
              key={column.key}
              onClick={() => handleSort(column.key)}
              colSpan={i === columns.length - 1 ? 2 : 0}
            >
              {column.title}
              {sort && sort.key === column.key && (
                <span style={{ position: 'absolute' }}>{sort.direction === 'asc' ? '▲' : '▼'}</span>
              )}
            </th>
          ))}

        </tr>
      </thead>
      <tbody className={s.tbody}>
        {data.map(item => (
          <tr key={item.title} className={s.tr}>
            <td className={s.td}>{item.title}</td>
            <td className={s.td}>{item.cardsCount}</td>
            <td className={s.td}>{item.updated}</td>
            <td className={s.td}>{item.createdBy}</td>
            <td className={s.td}>icons...</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
