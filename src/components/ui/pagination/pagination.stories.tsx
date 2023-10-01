import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta

export const Defalut = {
  render: () => {
    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const totalCount = 100

    return (
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        currentPage={currentPage}
        onCurrentPageChange={() => setCurrentPage}
      ></Pagination>
    )
  },
}
