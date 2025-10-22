export const formatCLP = (num) => {
  try {
    return Number(num).toLocaleString('es-CL');
  } catch {
    return num;
  }
};
