import {createContext, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Styles} from "./utils/Styles";

export const UserContext = createContext(null);

const Root = () => {
  const [info, setInfo] = useState(
    {
      name: "",
      firstExperiment: [],
      firstExperimentMistakes: [],
      secondExperiment: [],
      secondExperimentMistakes: [],
    }
  )

  useEffect(() => {
    var arr1 = [];
    var arr2 = [];

    for (let i = 0; i < 10; i++){

      if (Math.random() <= 0.6) {
        if (Math.random() <= 0.5) {
          arr1.push(Styles.DASHED)
        } else {
          arr1.push(Styles.ITALIC)
        }
      } else {
        arr1.push(Styles.NONE)
      }
    }

    for (let i = 0; i < 10; i++){
      var obj = {
        isShown : false
      }

      if (Math.random() <= 0.6) {
        obj.isShown = true
        obj.isSolid = Math.random() <= 0.5
      }

      arr2.push(obj)
    }

    setInfo(
      {
        ...info,
        firstExperiment: arr1,
        secondExperiment: arr2
      }
    )

  },[])

  return(
    <UserContext.Provider value={{info : info, setInfo : setInfo}}>
      <div className="p-[60px] min-h-screen h-screen">
        <div className="h-full rounded-xl bg-white flex justify-center">
          <div className="flex flex-col justify-center">
            <Outlet info={info} setInfo={setInfo}/>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default Root;
