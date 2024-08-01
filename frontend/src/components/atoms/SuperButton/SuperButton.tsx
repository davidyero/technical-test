import {SuperButtonProps} from "./SuperButton.type.ts";
import "./SuperButton.scss";

export const SuperButton = ({onClick, isDisabled, text, className}: SuperButtonProps) => {

  const handleClick = () => {
    console.log("Button clicked");
    if (isDisabled) {
      return;
    }
    if (onClick) {
      onClick();
    }
  }

  return (
    <button className={`super-button ${className} ${isDisabled ? 'super-button__disabled' : ''}`} onClick={handleClick} disabled={isDisabled}>
      {text}
    </button>
  );
}
