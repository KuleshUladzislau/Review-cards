import { ComponentPropsWithoutRef, FC } from 'react'

import ArrowDown from '../../../assets/icons/ArrowDown.tsx'
import ArrowUp from '../../../assets/icons/ArrowUp.tsx'

import s from './table.module.scss'
import { THead, THeadCell, TRow } from './table.tsx'
import { Column, Sort } from './types.ts'

export const TableHead: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      sort?: Sort
      setSort?: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, setSort, ...rest }) => {
  const changeSortHandler = (key: string) => {
    if (setSort && sort && sort.key === key) {
      if (sort.direction === 'asc') {
        setSort({ key, direction: 'desc' })
      } else if (sort.direction === 'desc') {
        setSort(null)
      } else {
        setSort({ key, direction: 'asc' })
      }
    } else {
      setSort && setSort({ key, direction: 'asc' })
    }
  }

  return (
    <THead {...rest}>
      <TRow>
        {columns.map((column, i) => {
          return (
            <THeadCell
              className={s.theadCell}
              colSpan={i === columns.length - 1 ? 2 : 0}
              key={column.key}
              onClick={() => changeSortHandler(column.key)}
            >
              {column.title}
              {sort && sort.key === column.key && (
                <span>
                  {sort.direction === 'asc' ? (
                    <ArrowUp className={s.arrow} />
                  ) : (
                    <ArrowDown className={s.arrow} />
                  )}
                </span>
              )}
            </THeadCell>
          )
        })}
      </TRow>
    </THead>
  )
}
