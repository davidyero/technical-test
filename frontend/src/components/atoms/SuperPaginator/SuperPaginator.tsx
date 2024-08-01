import { SuperPaginatorProps } from './SuperPaginator.type.ts'
import LeftIcon from '../../../assets/icons/left.svg'
import RightIcon from '../../../assets/icons/right.svg'
import './SuperPaginator.scss'
import { useState } from 'react'

export const SuperPaginator = ({
  currentPage,
  totalPages,
  onPageChange,
}: SuperPaginatorProps) => {
  const maxPages = 5
  const [selectedPage, setSelectedPage] = useState(currentPage)
  const [startPage, setStartPage] = useState(0)
  const [endPage, setEndPage] = useState(maxPages)

  const handlePagePrev = () => {
    if (selectedPage > 1) {
      setSelectedPage(selectedPage - 1)
      onPageChange(selectedPage - 1)
      if (selectedPage - 1 === startPage) {
        setStartPage(startPage - 1)
        setEndPage(endPage - 1)
      }
    }
  }

  const handlePageNext = () => {
    if (selectedPage < totalPages) {
      setSelectedPage(selectedPage + 1)
      onPageChange(selectedPage + 1)
      if (selectedPage === endPage) {
        setStartPage(startPage + 1)
        setEndPage(endPage + 1)
      }
    }
  }

  return (
    <div className='paginator'>
      <div className='paginator__order'>
        <img
          onClick={handlePagePrev}
          className='paginator__icon'
          src={LeftIcon}
          alt='left'
        />
        <div className='paginator__list'>
          {Array.from({ length: totalPages }, (_, index) => {
            if (index < endPage && index >= startPage) {
              return (
                <div
                  className={`paginator__list--number ${index + 1 === selectedPage && 'paginator__selected'}`}
                  key={`page-${index}`}
                >
                  {index + 1}
                </div>
              )
            } else if (index === endPage) {
              return (
                <div className='paginator__list--number' key={`page-${index}`}>
                  ...
                </div>
              )
            }
          })}
        </div>
        <img
          onClick={handlePageNext}
          className='paginator__icon'
          src={RightIcon}
          alt='right'
        />
      </div>
    </div>
  )
}
