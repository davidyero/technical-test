export interface SuperModalProps {
  isOpen: boolean
  children: React.ReactNode
  className?: string
  onRequestClose: () => void
}
