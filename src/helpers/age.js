
import dayjs from 'dayjs';

export const calculateAge = (birthDate ="1999-11-10" ) => {
  const today = dayjs();
  const birthday = dayjs(birthDate);
  const yearsDiff = today.diff(birthday, 'year');
  const birthdayThisYear = birthday.add(yearsDiff, 'year');

  return today.isAfter(birthdayThisYear) ? yearsDiff : yearsDiff - 1;
};
