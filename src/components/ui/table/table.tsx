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

export const Table: React.FC<tableType> = ({ children, className }) => {
  return <table className={className}>{children}</table>
}

export const TableHeader: React.FC<TableHeadType> = ({ children }) => {
  return <thead>{children}</thead>
}

export const THead: React.FC<THType> = ({ children, className }) => {
  return <th className={className}>{children}</th>
}

export const TableBody: React.FC<TableBodyType> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>
}

export const TRow: React.FC<TRType> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>
}

export const TData: React.FC<TDType> = ({ children, className }) => {
  return <td className={className}>{children}</td>
}
