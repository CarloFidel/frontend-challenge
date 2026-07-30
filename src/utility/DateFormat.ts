export const hourTransform = (date: string) => {
  const hour = new Date(date).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return hour;
};


export const formatForecastDate = (dateString: string) => {
  const date = new Date(dateString);

  return {
    weekday: new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date),

    month: new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(date),

    day: date.getDate(),
  };
};