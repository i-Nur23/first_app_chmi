import {useContext} from "react";
import {UserContext} from "../Root";
import {useNavigate} from "react-router-dom";

export const WelcomePage = () => {
  const { info, setInfo } = useContext(UserContext)

  const navigate = useNavigate()

  return(
    <>
      <p className="text-2xl text-center mb-4 font-semibold">Добро пожаловать</p>
      <form onSubmit={e => {
        e.preventDefault()
        navigate("first_step")
      }}>
        <div className="mb-5">
          <p className="text-xl mb-2">Пожалуйста, введите имя и фамилию</p>
          <input
            type="text"
            value={info.name}
            onInput={e =>
              setInfo({
                ...info,
                name: e.target.value
              })
          }/>
        </div>
        <button
          type="submit"
        >
          Продолжить
        </button>
      </form>
    </>
  )
}