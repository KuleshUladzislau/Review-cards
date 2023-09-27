import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { Delete, Edit, Play } from '../../../assets'

import { TableHead } from './table-header.tsx'
import s from './table.module.scss'
import { Column, Sort } from './types.ts'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(s.table, className),
    }

    return <table className={classNames.table} ref={ref} {...rest} />
  }
)

export const THead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      thead: clsx(s.thead, className),
    }

    return <thead className={classNames.thead} ref={ref} {...rest} />
  }
)

export const TBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tbody: clsx(s.tbody, className),
    }

    return <tbody className={classNames.tbody} ref={ref} {...rest} />
  }
)

export const TRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      tr: clsx(s.tRow, className),
    }

    return <tr className={classNames.tr} ref={ref} {...rest} />
  }
)

export const THeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, onClick, ...rest }, ref) => {
    const classNames = {
      th: clsx(s.theadCell, className),
    }

    return <th className={classNames.th} onClick={onClick} ref={ref} {...rest} />
  }
)

export const TCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      td: clsx(s.tCell, className),
    }

    return <td className={classNames.td} ref={ref} {...rest} />
  }
)

const columns: Column[] = [
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

type DataT = {
  id: number
  name: string
  cards: number
  lastUpdate: string
  createdBy: string
}

const data: DataT[] = [
  { id: 1, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
  { id: 2, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
  { id: 3, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
  { id: 4, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
  { id: 5, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
]

export const CustomTable = () => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <Table>
      <TableHead columns={columns} sort={sort} setSort={setSort} />
      <TBody>
        {data.map(item => {
          return (
            <TRow key={item.id}>
              <TCell>{item.name}</TCell>
              <TCell>{item.cards}</TCell>
              <TCell>{item.lastUpdate}</TCell>
              <TCell>{item.createdBy}</TCell>
              <TCell>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                  <Play />
                  <Edit />
                  <Delete />
                </div>
              </TCell>
            </TRow>
          )
        })}
      </TBody>
    </Table>
  )
}
