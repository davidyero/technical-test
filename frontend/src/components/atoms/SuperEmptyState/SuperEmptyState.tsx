import { SuperEmptyStateProps } from './SuperEmptyState.type'
import './SuperEmptyState.scss'

export const SuperEmptyState = ({ text }: SuperEmptyStateProps) => {
  return (
    <div className='empty-state'>
      <p>{text}</p>
    </div>
  )
}
