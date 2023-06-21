import { useSelector } from "react-redux";

export default function TimeSetter(props) {
  const runningState = useSelector(state => state.timer.runningState);
  const buttonHidden = runningState ? 'invisible' : '';
  return (
    <div className='text-sm tracking-tight flex flex-row items-center'>
      <span className='pr-1' id={props.labelID}>{props.type}</span>
      <button id={props.incrementButtonID} onClick={props.incrementHandler} className={buttonHidden}>+</button>
      <span className=' w-[18px]' id={props.valueID} >{
        // props.value < 10 ? '0' + props.value : props.value
        props.value
      }</span>
      <button id={props.decrementButtonID} onClick={props.decrementHandler} className={buttonHidden}>-</button>
    </div>
  );
};
