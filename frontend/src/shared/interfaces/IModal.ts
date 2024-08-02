export interface IModal {
  isOpen: boolean
  title: string
  message: string
  textConfirm: string
  textCancel: string
  onConfirm: () => void
  onCancel: () => void
  classNameButtonConfirm?: string
  classNameButtonCancel?: string
  children: React.ReactNode
}
