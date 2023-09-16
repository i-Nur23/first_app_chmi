import {useContext, useState} from "react";
import {Styles} from "../utils/Styles";
import {Link} from "react-router-dom";
import {UserContext} from "../Root";


export const SecondChallengeChoice = () => {

  const { info } = useContext(UserContext)

  const [checks, setChecks] = useState(new Array(10).fill(false))

  const changeCheckState = (index) => {
    var arr = [...checks]
    arr[index] = !checks[index]
    setChecks(arr)
  }

  return(
    <div className="flex flex-col gap-3">
      <p className="text-2xl">Выберите, какие пиктограммы вы видели</p>

      <table className="w-1/4 mx-auto">
        {
          checks.map((check, index) =>
            <tr key={index}>

                <td className="flex gap-2 py-2">
                  <img
                    src={require(`../assets/picktograms/solid/icon_${index}.svg`)}
                    className="h-6"
                  />
                  <div>/</div>
                  <img
                    src={require(`../assets/picktograms/outline/icon_${index}.svg`)}
                    className="h-6"
                  />
                </td>
                <td className="relative">
                  <input
                    type="radio"
                    checked={check}
                    onClick={() => changeCheckState(index)}
                    className="h-10 w-full border-2 border-white accent-red-500"
                  />
                </td>
            </tr>
          )
        }
      </table>

      <Link
        to="/second_step/result"
        state={{answers : checks}}
        className="w-1/2 mx-auto"
      >
        <button type="button">Получить результат</button>
      </Link>
    </div>
  )
}
