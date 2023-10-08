import { FC } from 'react'

import p from './pagination.module.scss'

import Arrow from '@/assets/icons/ArrowUp.tsx'
import { OptionsType, SelectCustom} from '@/components/ui/select'


export type PaginationProps = {
  totalCount: number | undefined
  currentPage: number
  pageSize: number
  onPageSizeChange: (value: number) => void
  onCurrentPageChange: (page: number | string) => void
  siblingCount?: number | string
  options: OptionsType[]
}

const DOTS = '...'

const renderPageNumbers = (
  siblingCount: string | number,
  currentPage: number,
  pagesCount: number
): (number | string)[] => {
  const pageNumbers: (number | string)[] = []

  const leftSiblingCount = Math.min(+siblingCount, currentPage - 1)
  const rightSiblingCount = Math.min(+siblingCount, pagesCount - currentPage)

  const rangeStart = currentPage - leftSiblingCount
  const rangeEnd =
    currentPage <= 4 ? currentPage + (5 - currentPage) : currentPage + rightSiblingCount

  if (rangeStart > 1) {
    pageNumbers.push(1)
    if (rangeStart > 2) {
      pageNumbers.push(DOTS)
    }
  }

  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i > 0 && i <= pagesCount) {
      pageNumbers.push(i)
    }
  }

  if (rangeEnd < pagesCount) {
    if (rangeEnd < pagesCount - 1) {
      pageNumbers.push(DOTS)
    }

    pageNumbers.push(pagesCount)
  }

  return pageNumbers
}

export const Pagination: FC<PaginationProps> = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
  onPageSizeChange,
  onCurrentPageChange,
  options,
}) => {
  //Поставил временную заглушку!!!!!
  const pagesCount = Math.ceil(totalCount! / pageSize)

  const onNext = () => {
    onCurrentPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onCurrentPageChange(currentPage - 1)
  }

  const onPageSizeHandler = (value: string) => {
    onPageSizeChange(+value)
  }

  const mappedPageNumbers = renderPageNumbers(siblingCount, currentPage, pagesCount)

  return (
    <div className={p.paginationWrapper}>
      <div>
        <button
          className={`${p.pageStyle} ${p.arrowButtonsStyle}`}
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          <Arrow className={p.leftArrow} />
        </button>
        {mappedPageNumbers.map((el, i) => (
          <button
            key={i}
            className={`${currentPage === el ? p.activePageStyle : ''} ${
              el === DOTS ? p.dotsStyle : p.pageStyle
            }`}
            onClick={() => onCurrentPageChange(el)}
            disabled={el === DOTS}
          >
            {el}
          </button>
        ))}
        <button
          className={`${p.pageStyle} ${p.arrowButtonsStyle}`}
          onClick={onNext}
          disabled={currentPage === pagesCount}
        >
          <Arrow className={p.rightArrow} />
        </button>
      </div>
      <div className={p.selectWrapper}>
        Show
        <SelectCustom
          options={options}
          defaultValue={pageSize.toString()}
          onValueChange={onPageSizeHandler}
        />
        on the page
      </div>
    </div>
  )
}
