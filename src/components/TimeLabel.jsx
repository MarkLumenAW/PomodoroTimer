import { useSelector } from "react-redux"

export default function TimeLabel(props) {
const timeLabel = useSelector(state => state.timer.timerLabel)

  return(
    <div className="pt-5">
      <span className="text-xl" id="timer-label">{timeLabel}</span>
    </div>
  )
};
