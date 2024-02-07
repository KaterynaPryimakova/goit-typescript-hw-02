/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
    monday = "Monday",
    tuesday = "Tuesday",
    wednesday = "Wednesday",
    thursday = "Thusday",
    friday = "friday",
    saturday = "Saturday",
    sunday = "Sunday",
}

function isWeekend(day: Week): boolean {
    if (day === Week.sunday || day === Week.saturday) {
        return true;
    } else {
        return false;
    }
}
