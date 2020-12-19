export const classnames = (...args) => {
  let classname = '';
  args.forEach((val) => {
    if (val) classname += `${val} `;
  });
  return classname.trim();
};

export const toKebabCase = (string, delimiters) => {
  return string
    .split(delimiters)
    .map(word => word.toLowerCase())
    .join('-');
}