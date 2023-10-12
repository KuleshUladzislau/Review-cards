import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

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
