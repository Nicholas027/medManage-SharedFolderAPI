const fs = require("fs");

class DateTime {
  static Time(now) {
    return Intl.DateTimeFormat("es", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(now);
  }

  static Now() {
    const _now = new Date();
    const time = DateTime.Time(_now);

    const _Date = _now.toLocaleDateString("es-Es", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "America/Argentina/Tucuman",
    });

    return `${_Date} ${time}`;
  }

  static Format(date) {
    const _now = new Date(date);

    const _Date = _now.toLocaleDateString("es-Es", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "America/Argentina/Tucuman",
    });

    return _Date;
  }

  // Format the last time a file was edited/created
  static lastUpdatedDate(file) {
    const { ctime } = fs.statSync(file);
    return DateTime.Format(ctime);
  }
}

module.exports = DateTime;
