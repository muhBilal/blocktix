export function formatPrice(number: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

export function formatDate(date: string | Date | null): string | undefined {
  if (!date) return undefined;

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (!(parsedDate instanceof Date) || isNaN(parsedDate.getTime())) {
    return undefined;
  }

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  } as const;
  return new Intl.DateTimeFormat("en-US", options).format(parsedDate);
}
