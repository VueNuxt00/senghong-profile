import { defineEventHandler } from 'file://D:/My%20Projects/VueProjects/senghong/node_modules/h3/dist/index.mjs';

const hello = defineEventHandler((event) => {
  console.log(event);
  return {
    api: "Hello Senghong"
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
