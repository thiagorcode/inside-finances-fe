export const queryStringBuilder = (obj: any) => {
  const str = [];
  for (const p in obj)
    if (Object.keys(obj).length) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};
