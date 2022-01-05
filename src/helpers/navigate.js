export const navigateTo = (path, params) => {
  window.location.href = window.location.href.concat(`${path}/${params}`);
};
