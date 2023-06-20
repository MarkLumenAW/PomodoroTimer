export default function TimeSetter(props) {
  return (
    <div className='text-sm tracking-tight flex flex-row items-center'>
      <span className='pr-1' id={props.labelID}>{props.type}</span>
      <button id={props.incrementButtonID} onClick={props.incrementHandler}>+</button>
      <span className=' w-[18px]' id={props.valueID} >{
        // props.value < 10 ? '0' + props.value : props.value
        props.value
      }</span>
      <button id={props.decrementButtonID} onClick={props.decrementHandler}>-</button>
    </div>
  );
};
