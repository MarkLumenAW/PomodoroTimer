import { useSelector } from "react-redux";
import { millisecondsFormat } from "../utils/timerUtils";

export default function Timer(props) {
  const timerDisplay = useSelector(state => state.timer.timerDisplay);

  return (
    <div className="p-9 pt-2 ">
      <span className="text-9xl" id="time-left">{millisecondsFormat(timerDisplay)}</span>
    </div>
  );
};
