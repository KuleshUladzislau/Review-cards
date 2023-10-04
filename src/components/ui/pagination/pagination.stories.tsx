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
    const [currentPage, setCurrentPage] = useState<string | number>(1)
    const totalCount = 1000
    const options = [
      { title: '10', value: '10' },
      { title: '20', value: '20' },
      { title: '30', value: '30' },
      { title: '40', value: '40' },
      { title: '50', value: '50' },
    ]

    return (
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        currentPage={currentPage as number}
        onCurrentPageChange={setCurrentPage}
        options={options}
      ></Pagination>
    )
  },
}
