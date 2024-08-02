import { SuperInputProps } from './SuperInput.type'
import './SuperInput.scss'

export const SuperInput = (props: SuperInputProps) => {
  return (
    <div className='super-input--container'>
      <label className='super-input__label'>{props.label}</label>
      <input
        className={`super-input ${props.className}`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}
