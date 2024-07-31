import {SuperButtonProps} from "./SuperButton.type.ts";
import "./SuperButton.scss";

export const SuperButton = (props: SuperButtonProps) => {
  return (
    <button className={`super-button ${props.className}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
