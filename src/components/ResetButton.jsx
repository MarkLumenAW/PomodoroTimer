import { Icon } from '@iconify/react';


export default function ResetButton(props) {
  return (
    <div className='pr-4 flex flex-row items-center'>
      <button id="reset" onClick={props.handler}>
        <Icon icon="carbon:reset" color="white" width="15" />
      </button>
    </div>
  );
};
