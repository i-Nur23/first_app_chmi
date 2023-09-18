import {useContext} from "react";
import {UserContext} from "../Root";
import {Styles} from "../utils/Styles";

export const FinalResults = () => {

  const { info } = useContext(UserContext)

  // italic
  const italicCount = () => info.firstExperiment.filter(e => e === Styles.ITALIC).length
  const wrongItalicCount = () => info.firstExperimentMistakes.filter(e => e.right === Styles.ITALIC).length
  const rightItalicCount = () =>  italicCount() - wrongItalicCount()

  // dashed
  const dashedCount = () => info.firstExperiment.filter(e => e === Styles.DASHED).length
  const wrongDashedCount = () => info.firstExperimentMistakes.filter(e => e.right === Styles.DASHED).length
  const rightDashedCount = () => dashedCount() - wrongDashedCount()

  // solid
  const solidCount = () => info.secondExperiment.filter(e => e.isShown && e.isSolid).length
  const wrongSolidCount = () => info.secondExperimentMistakes.filter(e => e.right && e.isSolid).length
  const rightSolidCount = () => solidCount() - wrongSolidCount()

  // outline
  const outlineCount = () => info.secondExperiment.filter(e => e.isShown && !e.isSolid).length
  const wrongOutlineCount = () => info.secondExperimentMistakes.filter(e => e.right && !e.isSolid).length
  const rightOutlineCount = () => outlineCount() - wrongOutlineCount()


  const ResultRow = ({appliedStyle, allCount, rightCount, wrongCount}) => (
    <div className="flex gap-1">
      <p className="font-semibold">{appliedStyle}</p>
      <p> : </p>
      <p>{allCount}</p>
      <p>/</p>
      <p className="text-green-500 font-semibold">{rightCount}</p>
      <p>/</p>
      <p className="text-red-500 font-semibold">{wrongCount}</p>
    </div>
  )

  return(
    <div>
      <h1 className="mb-4">{info.name}, Вы звершили тестирование!</h1>
      <h2 className="mb-3">Первый тест</h2>
      <div className="flex flex-col gap-3">
        <ResultRow
          appliedStyle="Курсив"
          allCount={italicCount()}
          wrongCount={wrongItalicCount()}
          rightCount={rightItalicCount()}
        />
        <ResultRow
          appliedStyle="Пунктир"
          allCount={dashedCount()}
          wrongCount={wrongDashedCount()}
          rightCount={rightDashedCount()}
        />
      </div>
      <h2 className="mb-3 mt-4">Второй тест</h2>
      <div className="flex flex-col gap-3">
        <ResultRow
          appliedStyle="Жирный"
          allCount={solidCount()}
          wrongCount={wrongSolidCount()}
          rightCount={rightSolidCount()}
        />
        <ResultRow
          appliedStyle="Обычный"
          allCount={outlineCount()}
          wrongCount={wrongOutlineCount()}
          rightCount={rightOutlineCount()}
        />
      </div>
    </div>
  )
}