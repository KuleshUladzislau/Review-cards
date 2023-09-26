import { ComponentPropsWithoutRef } from 'react'

import t from './table.module.scss'

type tableType = {
  children: React.ReactNode
} & ComponentPropsWithoutRef<'table'>

type TableHeadType = {
  children: React.ReactNode
} & ComponentPropsWithoutRef<'thead'>

type TableBodyType = {
  children: React.ReactNode
} & ComponentPropsWithoutRef<'tbody'>

type TRType = {
  children: React.ReactNode
} & ComponentPropsWithoutRef<'tr'>

type THType = {
  children: React.ReactNode
} & ComponentPropsWithoutRef<'th'>

type TDType = {
  children: React.ReactNode
} & ComponentPropsWithoutRef<'td'>

export const Table: React.FC<tableType> = ({ children }) => {
  return <table className={t.table}>{children}</table>
}

export const TableHeader: React.FC<TableHeadType> = ({ children }) => {
  return <thead className={t.TableHeader}>{children}</thead>
}

export const THead: React.FC<THType> = ({ children }) => {
  return <th className={t.tableHead}>{children}</th>
}

export const TableBody: React.FC<TableBodyType> = ({ children }) => {
  return <tbody className={t.tableBody}>{children}</tbody>
}

export const TRow: React.FC<TRType> = ({ children }) => {
  return <tr className={t.tableRow}>{children}</tr>
}

export const TData: React.FC<TDType> = ({ children }) => {
  return <td className={t.tableData}>{children}</td>
}
