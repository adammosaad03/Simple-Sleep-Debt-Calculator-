const getSleepHours = (day) => {
 switch(day.toLowerCase()){
  case 'monday':
  return 8;
  break;
  case 'tuesday':
  return 7 ;
  break;
  case 'wednesday':
  return 5 ;
  break;
  case 'thursday':
  return 3 ;
  break;
  case 'friday':
  return 4 ;
  break;
  case 'saturday':
  return 5 ;
  break;
  case 'sunday':
  return 5;
  break;
 }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');



const getIdealSleepHours = () => {
  const totalSleepHours = 37;
  hoursPerNight = totalSleepHours / 7
idealHours = hoursPerNight * 7
return idealHours
}
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours()
  const sleepDebt = idealSleepHours - actualSleepHours;
  const sleepGain = actualSleepHours - idealSleepHours
  if(actualSleepHours === idealSleepHours){
    console.log(`You got the perfect amount of sleep: ${actualSleepHours} hours! You have ${sleepDebt} hours of sleep debt! :)`)
  }if(actualSleepHours > idealSleepHours){
    console.log(`You got more hours of sleep than needed: ${actualSleepHours} hours! You have ${sleepGain} hours of sleep gain! :)`)
  }else if (actualSleepHours < idealSleepHours){
    console.log(`You got less than needed hours of sleep! ${actualSleepHours}, And ${sleepDebt} hours of sleep debt! Go rest! :(`)
  
  }
  
}
calculateSleepDebt()
