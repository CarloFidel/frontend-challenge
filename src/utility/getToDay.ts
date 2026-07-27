export function getToDayDate() {
  const now = new Date();

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(now);

  const monthDay = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(now);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  return `${weekday}, ${monthDay} - ${time}`;
}