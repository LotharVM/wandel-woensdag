export const getDaysUntilWednesday = () => {
  const today = new Date();
  const todayDayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  const daysUntilNextTuesday = (3 - todayDayOfWeek + 7) % 7 || 7; // 2 represents Wednesday

  return daysUntilNextTuesday;
};
