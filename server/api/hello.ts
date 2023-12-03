export default defineEventHandler((event) => {
  console.log(event);
  return {
    api: [
      { name: "Hang Senghong", age: 22 },
      { name: "Hang Senghong1", age: 22 },
      { name: "Hang Senghong2", age: 22 },
    ],
  };
});
