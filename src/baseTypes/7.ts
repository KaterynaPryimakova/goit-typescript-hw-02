/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
    mnday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
}

function isWeekend(day: Week): boolean {
    if (day === Week.sunday || day === Week.saturday) {
        return true;
    } else {
        return false;
    }
}
