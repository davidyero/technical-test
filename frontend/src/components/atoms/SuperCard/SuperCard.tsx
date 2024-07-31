import {SuperCardProps} from "./SuperCard.type.ts";
import "./SuperCard.scss";

export const SuperCard = ({children, className, onClick}: SuperCardProps) => {
  return (
    <div className={`super-card ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
