//this function is used to trancate overlong texts
export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    text = text.substr(0, maxLength) + "...";
    return text;
  }
  return text;
};
