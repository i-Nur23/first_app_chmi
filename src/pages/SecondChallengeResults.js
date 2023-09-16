import {useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Root";

export const SecondChallengeResults = () => {

  const { info, setInfo } = useContext(UserContext)

  const location = useLocation()

  const answers = location.state.answers

  let mistakes = []

  function addMistake (number, right, wrong, isSolid) {

    var mistake = {number : number, right: right, wrong: wrong, isSolid: isSolid}

    mistakes.push(mistake)
  }

  function save() {
    //TODO
  }

  useEffect(() => {
      return(() => {
        setInfo(
        {
          ...info,
          secondExperimentMistakes : [...info.secondExperimentMistakes, mistakes]
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

              if (answer === info.secondExperiment[index].isShown) return null

              addMistake(index, info.firstExperiment[index].isShown, answer, info.firstExperiment[index].isSolid)

              return (
                <tr>
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
                  <td className="p-3 text-xl text-green-600 font-semibold">{info.secondExperiment[index].isShown ? "был" : "не был"}</td>
                  <td className="p-3 text-xl text-red-600 font-semibold">{answer ? "был" : "не был"}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
      <button type="button" onClick={e => save()}>
        Завершить тестирование
      </button>
    </div>
  )
}