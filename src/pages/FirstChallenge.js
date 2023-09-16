import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Root";
import {useNavigate} from "react-router-dom";
import {Styles} from "../utils/Styles";

export const FirstChallenge = () => {

  const [show, setShow] = useState(false)

  const { info } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {

    const timeId = setTimeout(() => {
      setShow(true)
    }, 5000)

    setTimeout(() => {
        navigate("choice")
      }, 5500
    )

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  const beforeShow = (
    <div className="mx-auto">
      <div className="w-full text-2xl flex flex-col gap-3 text-center">
        <p>Сейчас вы увидите перед собой набор из {info.firstExperiment.filter(e => e !== Styles.NONE).length} цифр</p>
        <p>Запомните какие из них написаны пунктиром, а какие курсивом</p>
        <div className="flex gap-1 justify-center">
          <p>Цифры будут видны в течении</p>
          <strong>полсекунды</strong>
        </div>
      </div>
    </div>
  )

  const showNumbers = (
    <div className="flex justify-between gap-8">
      {
        info.firstExperiment
          .filter(exp => exp !== Styles.NONE)
          .map((exp, index) => {
            return (
              <img
                src={require(`../assets/${exp === Styles.DASHED ? "dashed" : "italic"}_${index}.png`)}
                className="h-24"
              />
            )
          })
      }
    </div>
  )

  return show ? showNumbers : beforeShow
}