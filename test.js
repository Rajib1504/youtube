function getTime(time) {
  let year = parseInt(time / 3104000);
  let remainingsec = time % 3104000;
  console.log(remainingsec);
  let month = parseInt(remainingsec / 2592000);
  remainingsec = remainingsec % 2592000;
  let day = parseInt(remainingsec / 86400);
  remainingsec = remainingsec % 86400;
  let hour = parseInt(remainingsec / 3600);
  remainingsec = remainingsec % 3600;
  //   console.log(remainingsec);
  let min = parseInt(remainingsec / 60);
  remainingsec = remainingsec % 60;
  return `${year}year${month}month${day}day${hour}hour ${min} min ${remainingsec} sec ago`;
}

// const time = getTime(16278);
const time = getTime(1672656000);
console.log(time);
