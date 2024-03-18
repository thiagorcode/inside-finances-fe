export const queryStringBuilder = (obj: any) => {
  const str = [];
  for (const p in obj)
    if (obj[p] != undefined) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};
