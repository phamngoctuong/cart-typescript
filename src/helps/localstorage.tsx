const _ = require('lodash');
export function setItem(key: string = "carts", state: any): void {
  localStorage.setItem(key, JSON.stringify(state));
};
export function getItem(key: string = "carts"): any {
  return JSON.parse(localStorage.getItem(key) || "[]");
};
export function removeItem(key1: string = "carts", key2: string = "id"): any {
  let items = getItem(key1);
  _.remove(items, function (item: any) {
    return item?.id === key2
  });
  setItem(key1, items);
  return items;
};
export function filterItem(key: string = "carts", keyword: string): any {
  let items = getItem(key);
  var result = _.filter(items, function (item: any) {
    return item.name.toString().toLocaleLowerCase().includes(keyword.toString().toLocaleLowerCase())
  });
  return result;
};
export function filterStatusItem(key: string = "carts", filterStatus: number): any {
  let items = getItem(key);
  var result = _.filter(items, function (item: any) {
    // eslint-disable-next-line eqeqeq
    if (filterStatus == -1) {
      return items;
    }
    // eslint-disable-next-line eqeqeq
    return item.status == filterStatus;
  });
  return result;
};