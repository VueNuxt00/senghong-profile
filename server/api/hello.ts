export default defineEventHandler((event) => {
  console.log(event);
  return {
    api: "Hello Senghong",
  };
});
