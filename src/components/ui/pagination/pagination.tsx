import { SelectCustom } from '../select/select.tsx'

import p from './pagination.module.scss'

export type PaginationProps = {
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number | string) => void
  siblingCount?: number
}

export const Pagination = (props: PaginationProps) => {
  const { totalCount, currentPage, pageSize, siblingCount = 1, onPageChange } = props

  const pagesCount = Math.ceil(totalCount / pageSize)

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }



  const renderPageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = []

    if (pagesCount <= 1) {
      return pageNumbers
    }

    const leftSiblingCount = Math.min(siblingCount, currentPage - 1)
    const rightSiblingCount = Math.min(siblingCount, pagesCount - currentPage)

    const rangeStart = currentPage - leftSiblingCount
    const rangeEnd =
      currentPage <= 4 ? currentPage + (5 - currentPage) : currentPage + rightSiblingCount

    if (rangeStart > 1) {
      pageNumbers.push(1)
      if (rangeStart > 2) {
        pageNumbers.push('...')
      }
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      if (i > 0 && i <= pagesCount) {
        pageNumbers.push(i)
      }
    }

    if (rangeEnd < pagesCount) {
      if (rangeEnd < pagesCount - 1) {
        pageNumbers.push('...')
      }

      pageNumbers.push(pagesCount)
    }

    // if (pageNumbers[pageNumbers.length-1] - currentPage === 2  ) {
    //   pageNumbers.splice(2,0,(pageNumbers[2]-1))
    // }



    return pageNumbers
  }

  const onPageSizeHandler = (value:string)=>{
    console.log(value)
  }


  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div>
        <button className={p.pageStyle} onClick={onPrevious} disabled={currentPage === 1}>
          {'<'}
        </button>
        {renderPageNumbers().map((el, i) => (
          <button
            key={i}
            className={`${currentPage === el ? p.activePageStyle : ''} ${p.pageStyle}`}
            onClick={() => onPageChange(el)}
            disabled={el === '...'}
          >
            {el}
          </button>
        ))}
        <button className={p.pageStyle} onClick={onNext} disabled={currentPage === pagesCount}>
          {'>'}
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        Показать <SelectCustom  options={['10', '20', '30', '40', '50']} defaultValue={'10'} onValueChange={onPageSizeHandler} /> на
        на странице
      </div>
    </div>
  )
}
