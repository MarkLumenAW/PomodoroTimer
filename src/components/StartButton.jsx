import { useSelector } from "react-redux"

export default function StartButton(props) {
const runningState = useSelector(state => state.timer.runningState);

  return(
    <div className="p-4 mt-2">
      <button className='rounded-full py-3 px-9 text-3xl border-solid border-2 border-white min-w-[180px]' id="start_stop" onClick={props.handler}>
        {runningState? 'STOP' : 'START'}
      </button>
    </div>
  )
};
