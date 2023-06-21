import { useState, useEffect, useRef } from 'react';
import TimeLabel from './components/TimeLabel';
import Timer from './components/Timer';
import StartButton from './components/StartButton';
import ResetButton from './components/ResetButton';
import TimeSetter from './components/TimeSetter';
import Footer from './components/Footer';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateTimerDisplay, updateTimerLabel, updateSessionLength, updateBreakLength, updateRunningState } from './reducers/timerSlice';
import { defaultBreakLength, defaultSessionLength } from './reducers/timerSlice';

function App() {

  const dispatch = useDispatch();
  const audioRef = useRef();

  const breakLength = useSelector(state => state.timer.breakLength);
  const sessionLength = useSelector(state => state.timer.sessionLength);
  const timerLabel = useSelector(state => state.timer.timerLabel);
  const runningState = useSelector(state => state.timer.runningState);
  const timeRemaining = useSelector(state => state.timer.timerDisplay);

  useEffect(() => {
    let intervalID;
    if (runningState) {
      const startTime = Date.now();
      intervalID = setInterval(() => {
        const newTimeRemaining = Math.floor(timeRemaining / 1000) - Math.floor(Date.now() / 1000) + Math.floor(startTime / 1000);

        if (newTimeRemaining <= -1) {
          if (timerLabel === 'Break') {
            dispatch(updateTimerLabel({ value: 'Session' }));
            dispatch(updateTimerDisplay({ value: sessionLength * 60 * 1000 }));
          } else{
            dispatch(updateTimerLabel({ value: 'Break' }));
            dispatch(updateTimerDisplay({ value: breakLength * 60 * 1000 }));
          }
        } else if (newTimeRemaining <= 0) {
          audioRef.current.play()
          dispatch(updateTimerDisplay({ value: 0 }));
        } else {
          dispatch(updateTimerDisplay({ value: newTimeRemaining * 1000 }));
        }

      }, 100);
    }
    return () => { clearInterval(intervalID); };
  }, [runningState, timerLabel]);

  const timerStop = () => {
    clearInterval(IntervalID);
  };

  const handleStartButtonClick = () => {
    if (!runningState) {
      dispatch(updateRunningState({ value: true }));
      console.log(`running:` + runningState);
      return;
    }
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    dispatch(updateRunningState({ value: false }));
    console.log(`running:` + runningState);
  };

  const handleSessionIncrement = () => {
    if (sessionLength >= 60) return;
    dispatch(updateSessionLength({ value: sessionLength + 1 }));
    dispatch(updateTimerDisplay({ value: (sessionLength + 1) * 60 * 1000 }));
  };
  const handleSessionDecrement = () => {
    if (sessionLength <= 1) return;
    dispatch(updateSessionLength({ value: sessionLength - 1 }));
    dispatch(updateTimerDisplay({ value: (sessionLength - 1) * 60 * 1000 }));
  };
  const handleBreakIncrement = () => {
    if (breakLength >= 60) return;
    dispatch(updateBreakLength({ value: breakLength + 1 }));
  };
  const handleBreakDecrement = () => {
    if (breakLength <= 1) return;
    dispatch(updateBreakLength({ value: breakLength - 1 }));
  };

  const handleResetButtonClick = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    dispatch(updateTimerDisplay({ value: defaultSessionLength * 60 * 1000 }));
    dispatch(updateTimerLabel({ value: 'Session' }));
    dispatch(updateSessionLength({ value: defaultSessionLength }));
    dispatch(updateBreakLength({ value: defaultBreakLength }));
    dispatch(updateRunningState({ value: false }));
  };

  return (
    <section>
      <div className='bg-white/50 flex flex-col rounded-xl'>
        <TimeLabel></TimeLabel>
        <Timer></Timer>
      </div>
      <div className='flex flex-row justify-between py-2'>
        <div className='flex flex-row gap-6 pl-4'>
          <TimeSetter type='Session:' value={sessionLength} labelID='session-label' incrementButtonID='session-increment' valueID='session-length' decrementButtonID='session-decrement' incrementHandler={handleSessionIncrement} decrementHandler={handleSessionDecrement} />
          <TimeSetter type='Break:' value={breakLength} labelID='break-label' incrementButtonID='break-increment' valueID='break-length' decrementButtonID='break-decrement' incrementHandler={handleBreakIncrement} decrementHandler={handleBreakDecrement} />
        </div>
        <ResetButton handler={handleResetButtonClick}></ResetButton>
      </div>
      <div>
        <StartButton handler={handleStartButtonClick}></StartButton>
      </div>
      <Footer/>
      <audio src="audio/alarm-clock-short-6402.mp3" ref={audioRef} id='beep'></audio>
    </section>
  );
}

export default App;
