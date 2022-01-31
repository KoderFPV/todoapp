import localforage from "localforage";

const db = localforage.createInstance({
  driver      : localforage.WEBSQL,
  name        : 'todoapp',
  version     : 1.0,
  storeName   : 'todos',
  description : 'store for todos'
});

export { db };