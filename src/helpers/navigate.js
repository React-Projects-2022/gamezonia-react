/**
 * Use to navigate to selec page and params
 * Reference cheatsheet
 * https://www.samanthaming.com/tidbits/86-window-location-cheatsheet/
 * @param {*} path 
 * @param {*} params 
 */
export const navigateTo = (path, params) => {
  window.location.href = window.location.origin.concat(`/${path}/${params}`);
};
