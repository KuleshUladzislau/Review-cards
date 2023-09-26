import { ComponentPropsWithoutRef } from 'react'

import t from './table.module.scss'

type tableType = {
  children?: React.ReactNode
} & ComponentPropsWithoutRef<'table'>

type TableHeadType = {
  children?: React.ReactNode
} & ComponentPropsWithoutRef<'thead'>

type TableBodyType = {
  children?: React.ReactNode
} & ComponentPropsWithoutRef<'tbody'>

type TRType = {
  children?: React.ReactNode
} & ComponentPropsWithoutRef<'tr'>

type THType = {
  children?: React.ReactNode
} & ComponentPropsWithoutRef<'th'>

type TDType = {
  children?: React.ReactNode
} & ComponentPropsWithoutRef<'td'>

export const Table: React.FC<tableType> = ({ children, className, ...restProps }) => {
  return (
    <table className={`${t.table} ${className}`} {...restProps}>
      {children}
    </table>
  )
}

export const TableHeader: React.FC<TableHeadType> = ({ children, className, ...restProps }) => {
  return (
    <thead className={`${t.tableHeader} ${className}`} {...restProps}>
      {children}
    </thead>
  )
}

export const THead: React.FC<THType> = ({ children, className, ...restProps }) => {
  return (
    <th className={`${t.tHead} ${className}`} {...restProps}>
      {children}
    </th>
  )
}

export const TableBody: React.FC<TableBodyType> = ({ children, className, ...restProps }) => {
  return (
    <tbody className={`${t.tableBody} ${className}`} {...restProps}>
      {children}
    </tbody>
  )
}

export const TRow: React.FC<TRType> = ({ children, className, ...restProps }) => {
  return (
    <tr className={`${t.tRow} ${className}`} {...restProps}>
      {children}
    </tr>
  )
}

export const TData: React.FC<TDType> = ({ children, className, ...restProps }) => {
  return (
    <td className={`${t.tData} ${className}`} {...restProps}>
      {children}
    </td>
  )
}
