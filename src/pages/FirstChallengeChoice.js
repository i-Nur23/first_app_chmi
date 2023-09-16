import {useState} from "react";
import {Styles} from "../utils/Styles";
import {Link} from "react-router-dom";


export const FirstChallengeChoice = () => {

  const [checks, setChecks] = useState(new Array(10).fill(Styles.NONE))

  const changeCheckState = (number, newState) => {
    var arr = [...checks]
    arr[number] = newState
    setChecks(arr)
  }

  return(
    <div className="flex flex-col gap-3">
      <p className="text-2xl">Выберите какие цифры были записаны курсивом, какие пунктиром, а каких не было в выборке</p>
      <table className="table-auto border-collapse border mx-auto">
        <thead>
          <tr>
            <th className="border p-3"></th>
            <th className="border p-3">Пунктир</th>
            <th className="border p-3">Курсив</th>
            <th className="border p-3">Не было</th>
          </tr>
        </thead>
        <tbody>
        {
          checks.map((check, upper_index) => (
            <tr>
              <td className="border p-3 text-xl font-semibold">{upper_index}</td>
              {
                Object.values(Styles).map(style =>
                  (
                    <td
                      className="border p-3"
                      onClick={e => changeCheckState(upper_index, style)}
                    >
                      {
                        checks[upper_index] === style
                          ?
                          <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="black" className="w-6 h-6 mx-auto"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          : null
                      }
                    </td>
                  )
                )
              }
            </tr>
          ))
        }
        </tbody>
      </table>

      <Link
        to="/first_step/result"
        state={{answers : checks}}
        className="w-1/4 mx-auto"
      >
        <button type="button">Получить результат</button>
      </Link>
    </div>
  )
}
