import './LoginView.scss';
import {SuperCard} from "../../components/atoms/SuperCard/SuperCard.tsx";
import {SuperButton} from "../../components/atoms/SuperButton/SuperButton.tsx";
import {SuperInput} from "../../components/atoms/SuperInput/SuperInput.tsx";
import {useNavigate} from "react-router-dom";

export const LoginView = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/home');
  }

  return (
    <div className="login__container">
      <SuperCard className={"login__card"}>
        <div className="login__container--left">
          <label className="login__label">Get Everything you want</label>
        </div>
        <div className="login__container--right">
          <div className="login__form">
            <div className="login__container-text">
              <label className="login__container-text--title">Welcome back</label>
            </div>
            <div className="login__container-text">
              <label className="login__container-text--description">Enter your email</label>
            </div>
            <SuperInput
              label={"Email"}
              className={"login__input"}
              type={"email"}
              placeholder={"Enter your email"}
              value={""}
              onChange={() => {
              }}
            />
            <SuperInput
              label={"Password"}
              className={"login__input"}
              type={"email"}
              placeholder={"Enter your password"}
              value={""}
              onChange={() => {
              }}
            />
            <div className="login__container--actions">
              <label className="login__container-text--forgot">Remember me?</label>
              <label className="login__container-text--forgot">Forgot your password?</label>
            </div>
            <SuperButton text={"Login"} onClick={() => {
            }}/>
            <div className="login__container-text">
              <label onClick={goToDashboard} className="login__container-text--guess">Ingresar como invitado</label>
            </div>
          </div>
        </div>
      </SuperCard>
    </div>
  );
}
