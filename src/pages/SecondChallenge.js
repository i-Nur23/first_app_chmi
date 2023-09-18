import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Root";
import {useNavigate} from "react-router-dom";
import {Styles} from "../utils/Styles";

export const SecondChallenge = () => {

  const [show, setShow] = useState(false)

  const { info } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {

    const timeId = setTimeout(() => {
      setShow(true)
    }, 5000)

    setTimeout(() => {
        navigate("choice")
      }, 10000
    )

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  const beforeShow = (
    <div className="mx-auto">
      <div className="w-full text-2xl flex flex-col gap-3 text-center">
        <p>Сейчас вы увидите перед собой набор из {info.secondExperiment.filter(e => e.isShown).length} пиктограмм</p>
        <p>Вам необходимо будет запомнить их</p>
        <div className="flex gap-1 justify-center">
          <p>Пиктограммы будут видны в течении</p>
          <strong>5 секунд</strong>
        </div>
      </div>
    </div>
  )

  const showNumbers = (
    <div className="flex justify-between gap-8">
      {
        info.secondExperiment
          .map((exp, index) => {

            if (!exp.isShown) return null

            return (
              <img
                src={require(`../assets/picktograms/${exp.isSolid ? "solid" : "outline"}/icon_${index}.svg`)}
                className="h-24"
              />
            )
          })
      }
    </div>
  )

  return show ? showNumbers : beforeShow
}