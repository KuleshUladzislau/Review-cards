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
    const tRows = ['Question', 'Answer', 'Last Updated', 'Grade']
    const tRowsMapped = tRows.map((el, i) => <THead key={i}>{el}</THead>)

    const tData = []

    return (
      <Table className={t.table}>
        <TableHeader className={t.tableHead}>
          <TRow className={t.tableRow}>{tRowsMapped}</TRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    )
  },
}
