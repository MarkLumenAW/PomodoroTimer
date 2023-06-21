import { useSelector } from "react-redux"

export default function StartButton(props) {
const runningState = useSelector(state => state.timer.runningState);

  return(
    <div className="p-4 mt-2">
      <button className='rounded-full py-2 px-9 text-3xl border-solid border-2 border-white min-w-[160px] hover:bg-white/40' id="start_stop" onClick={props.handler}>
        {runningState? 'STOP' : 'START'}
      </button>
    </div>
  )
};
