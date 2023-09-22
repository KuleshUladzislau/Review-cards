import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Pagination } from '../pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pagination>

export default meta

export const Defalut = {
  render: () => {
    const pageSize = [10, 20, 30, 50, 100]
    const [currentPage, setCurrentPage] = useState(1)
    const totalCount = 400

    return (
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize[0]}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      ></Pagination>
    )
  },
}
