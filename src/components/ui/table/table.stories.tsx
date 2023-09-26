import { Meta, StoryObj } from '@storybook/react'

import { Table, TableHeader, TableBody, TRow, THead, TData } from './table'
import t from './table.module.scss'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const TableDefault: Story = {
  args: {
    children: <></>,
  },
}

export const TableDefaults = {
  render: () => {
    const tRows = ['Name', 'Cards', 'Last Updated', 'Created by']
    const tRowsMapped = tRows.map((el, i) => (
      <THead key={i} className={t.tableHead}>
        {el}
      </THead>
    ))

    type DataT = {
      id: number
      name: string
      cards: number
      lastUpdate: string
      createdBy: string
    }

    const Tdata: DataT[] = [
      { id: 1, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
      { id: 2, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
      { id: 3, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
      { id: 4, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
      { id: 5, name: 'Pack name', cards: 7, lastUpdate: '25.09.2023', createdBy: 'Iliya' },
    ]

    const tDataMapped = Tdata.map((el: DataT) => (
      <TRow key={el.id} className={t.tableRow}>
        <TData>{el.name}</TData>
        <TData>{el.cards}</TData>
        <TData>{el.lastUpdate}</TData>
        <TData>{el.createdBy}</TData>
      </TRow>
    ))

    return (
      <Table className={t.table}>
        <TableHeader>
          <TRow className={t.tableRow}>{tRowsMapped}</TRow>
        </TableHeader>
        <TableBody className={t.tableBody}>{tDataMapped}</TableBody>
      </Table>
    )
  },
}
