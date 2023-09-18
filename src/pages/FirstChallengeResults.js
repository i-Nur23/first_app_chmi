import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Root";

export const FirstChallengeResults = () => {

  const { info, setInfo } = useContext(UserContext)

  const location = useLocation()

  const answers = location.state.answers

  let mistakes = []

  function addMistake (number, right, wrong) {

    var mistake = {number : number, right: right, wrong: wrong}

    mistakes.push(mistake)
  }

  useEffect(() => {
      return(() => {
        setInfo(
        {
          ...info,
          firstExperimentMistakes : mistakes
        }
        )
      })
  },[])

  return (
    <div className="flex flex-col gap-3 w-96">
      <p className="text-2xl text-center">Ошибки</p>
      <div>
        <table className="mx-auto text-center">
          <thead>
          <tr>
            <th className="p-3"></th>
            <th className="p-3">Верный ответ</th>
            <th className="p-3">Ваш ответ</th>
          </tr>
          </thead>
          <tbody>
          {
            answers.map((answer, index) => {

              if (answer === info.firstExperiment[index]) return null

              addMistake(index, info.firstExperiment[index], answer)

              return (
                <tr>
                  <td className="p-3 pr-5 text-xl font-semibold">{index}</td>
                  <td className="p-3 text-xl text-green-600 font-semibold">{info.firstExperiment[index]}</td>
                  <td className="p-3 text-xl text-red-600 font-semibold">{answer}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
      <Link to="/second_step">
        <button type="button">
          Следующий тест
        </button>
      </Link>
    </div>
  )
}