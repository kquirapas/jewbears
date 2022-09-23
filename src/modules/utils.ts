const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HR_IN_DAY = 60;

const secondsToMinutes = (seconds: number) => {
  if (seconds < 0) {
    return 0;
  }

  return Math.floor(seconds / SEC_IN_MIN);
};

const secondsToHours = (seconds: number) => {
  if (seconds < 0) {
    return 0;
  }

  return Math.floor(seconds / (SEC_IN_MIN * MIN_IN_HOUR));
};

// const hoursToDays = (hours: number) => {
//   if (hours < 0) {
//     return 0;
//   }
//
//   return Math.floor(hours / HR_IN_DAY);
// };

const secondsToDays = (seconds: number) => {
  if (seconds < 0) {
    return 0;
  }

  return Math.floor(seconds / (SEC_IN_MIN * MIN_IN_HOUR * HR_IN_DAY));
};

const getTimePassed = (timestamp: number) => {
  // Date.now() is in milliseconds
  const secondsPassed = Date.now() / 1000 - timestamp;

  const days = secondsToDays(secondsPassed);
  if (days > 0) {
    return `${days} days ago`;
  }

  const hours = secondsToHours(secondsPassed);
  if (hours > 0) {
    return `${hours} hours ago`;
  }

  const minutes = secondsToMinutes(secondsPassed);
  if (minutes > 0) {
    return `${minutes} minutes ago`;
  }
};

export { getTimePassed };
