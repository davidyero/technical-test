export interface SuperPaginatorProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}
