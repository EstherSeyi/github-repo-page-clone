export function calculateRelativeDate(date) {
  const repoDate = new Date(date);
  const today = new Date();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;

  const timeDifference = today.getTime() - repoDate.getTime();

  const seconds = Math.floor(repoDate.getTime() / 1000);
  const currentSeconds = Math.floor(today.getTime() / 1000);
  const dateMonth = repoDate.getMonth();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();
  const dateDay = repoDate.getDate();
  const dayDifference = currentDay - dateDay;

  const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
  const secondsDifference = currentSeconds - seconds;

  const isThisMonth = today.getMonth() === dateMonth;
  const isThisYear = today.getFullYear() === repoDate.getFullYear();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  //Return day and year updated if date not in current year
  if (isThisYear) {
    if (!isThisMonth) {
      return `Updated on ${repoDate.getDate()} ${monthNames[dateMonth]}`;
    }

    if (currentDay < daysInCurrentMonth && dayDifference > 0) {
      return `Updated ${dayDifference} ${
        dayDifference > 1 ? "days" : "day"
      } ago`;
    }

    switch (true) {
      case Math.floor(timeDifference / month) > 1:
        return `Updated ${Math.floor(timeDifference / month)} minutes ago`;

      case Math.floor(timeDifference / minute) > 1:
        if (Math.floor(timeDifference / minute) > 60) {
          return `Updated ${Math.floor(
            timeDifference / minute / 60
          )} hours ago`;
        }

        return `Updated ${Math.floor(timeDifference / minute)} minutes ago`;

      default:
        return `Updated ${secondsDifference} seconds ago`;
    }
  } else {
    return `Updated on ${repoDate.getDate()} ${
      monthNames[dateMonth]
    } ${repoDate.getFullYear()}`;
  }
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
