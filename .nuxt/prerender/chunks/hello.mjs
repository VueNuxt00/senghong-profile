import { defineEventHandler } from 'file://D:/My%20Projects/VueProjects/senghong/node_modules/h3/dist/index.mjs';

const hello = defineEventHandler((event) => {
  console.log(event);
  return {
    api: [
      { name: "Hang Senghong", age: 22 },
      { name: "Hang Senghong1", age: 22 },
      { name: "Hang Senghong2", age: 22 }
    ]
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
