const dayOfWeek = () => {
  const day = (new Date()).getDay();

  if (day === 0) {
    return 'niedziela';
  } else if (day === 1) {
    return 'poniedziałek';
  } else if (day === 2) {
    return 'wtorek';
  } else if (day === 3) {
    return 'środa';
  } else if (day === 4) {
    return 'czwartek';
  } else if (day === 5) {
    return 'piątek';
  }
  return 'sobota';
}