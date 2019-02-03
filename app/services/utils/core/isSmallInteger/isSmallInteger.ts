export const isSmallInteger = (subject: string, smallLimit: number = 200): boolean => {
  const num = Number(subject);
  return Number.isInteger(num) && num < smallLimit;
};
