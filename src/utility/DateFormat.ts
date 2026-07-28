export const hourTransform = (date: string) => {
  const hour = new Date(date).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return hour;
};
