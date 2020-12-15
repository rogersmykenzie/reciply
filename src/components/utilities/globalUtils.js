export const classnames = (...args) => {
  let classname = '';
  args.forEach((val) => {
    if (val) classname += `${val} `;
  });
  console.log(classname);
  return classname.trim();
};
