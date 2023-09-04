interface GetDateFormatedResponse {
  day: string | null;
  month: string | null;
  year: string | null;
}

export const getDateFormated = (date?: string): GetDateFormatedResponse => {
  if (!date) {
    return { day: null, month: null, year: null };
  }

  const dateFormated = new Date(date);
  const day = String(dateFormated.getDate() + 1).padStart(2, '0');
  const month = String(dateFormated.getMonth() + 1).padStart(2, '0');
  const year = String(dateFormated.getFullYear());

  return { day, month, year };
};
