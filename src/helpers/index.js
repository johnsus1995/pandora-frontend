export const isDev = () => {
  return process.env.NODE_ENV === "development";
};

export const sysPhone = phone => {
    const cleaned = ("" + phone).replace(/\D/g, "");
    // 576-456-7890
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phone;
  };