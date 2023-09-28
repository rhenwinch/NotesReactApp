// Enum class for time of day
export const TimeOfDay = {
  MORNING: 'Good Morning',
  AFTERNOON: 'Good Afternoon',
  EVENING: 'Good Evening',
};

export default function getTimeOfDay() {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return TimeOfDay.MORNING;
  } else if (currentHour >= 12 && currentHour < 17) {
    return TimeOfDay.AFTERNOON;
  } else {
    return TimeOfDay.EVENING;
  }
}
