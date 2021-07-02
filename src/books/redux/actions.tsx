import types from "./types";

const add = (item: any) => ({
  type: types.ADD,
  Name: item.Name,
  Author: item.Author,
  Publisher: item.Publisher,
});

const remove = (item: any) => ({
  type: types.REMOVE,
  Id: item.Id,
});

const startEditing = (item: any) => ({
  type: types.START_EDITING,
  Id: item.Id,
  isEditing: true,
});

const stopEditing = (item: any) => ({
  type: types.STOP_EDITING,
  Name: item.Name,
  Author: item.Author,
  Publisher: item.Publisher,
  Id: item.Id,
  isEditing: false,
});

const complete = (item: any) => ({
  type: types.COMPLETE,
  Id: item.Id,
});
const show = () => ({
  type: types.SHOW,
});
const hide = () => ({
  type: types.HIDE,
});
const info = (item: any) => ({
  type: types.INFO,
  Id: item.Id,
});

// eslint-disable-next-line
export default {
  add,
  remove,
  startEditing,
  stopEditing,
  complete,
  hide,
  info,
  show,
};
