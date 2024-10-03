function getTime(time) {
  let hour = parseInt(time / 3600);
  let remainingsec = time % 3600;
  //   console.log(remainingsec);
  let min = parseInt(remainingsec / 60);
  remainingsec = remainingsec % 60;
  return `${hour}hour ${min} min ${remainingsec} sec ago`;
}

const time = getTime(16278);

console.log(time);
