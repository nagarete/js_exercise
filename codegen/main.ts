const today = () => {
  const date_origin = new Date();
  const date = date_origin.getDate().toString().padStart(2, "0");
  const month = (date_origin.getMonth() + 1).toString().padStart(2, "0");
  const year = date_origin.getFullYear();
  return `${date}-${month}-${year}`;
};

const _newFile = await Deno.writeTextFile(`${today()}.ts`, "");
