// sleep hours for each day of the week
const getSleepHours = (day) => {
  if (day === 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday')
    {return 6}
  else if (day === 'saturday' || 'sunday')
    {return 9}};

// total sleep hours for the week
const getActualSleepHours = () => {
  actualSleepWeek = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  {return actualSleepWeek}};

// ideal sleep hours for the week
const getIdealSleepHours = idealHours => idealHours*7;

// calculate sleep debt
const calculateSleepDebt = (idealHours) => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(idealHours);
  if (actualSleepHours === idealSleepHours)
    {console.log(`Perfect amount of sleep!`)}
  else if (actualSleepHours > idealSleepHours)
    {console.log(`Recommend reducing weekly sleep time by ${(actualSleepHours - idealSleepHours)} hours.`)}
  else if (actualSleepHours < idealSleepHours)
    {console.log(`Recommend increasing weekly sleep time ${(idealSleepHours - actualSleepHours)} hours a week.`)}
};

// test it out -- argument is your daily ideal hours of sleep
calculateSleepDebt(8);
