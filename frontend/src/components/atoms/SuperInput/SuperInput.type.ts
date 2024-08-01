export interface SuperInputProps {
  className: string
  type: string
  placeholder: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
