export function secondsFormat(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

export function millisecondsFormat(sec) {
  const minutes = Math.floor(sec / 60000);
  const seconds = Math.floor(sec % 60000 /1000);
  return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}