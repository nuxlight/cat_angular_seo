const axios = require("axios");
var faker = require("faker");

async function getImg() {
  return await axios
    .get("https://cataas.com/cat", { responseType: "arraybuffer" })
    .then((resp) => Buffer.from(resp.data).toString("base64"));
}

const ITERATION = 10;
console.log("Generate fake data on database");
let RESULT = [];
for (let i = 0; i < ITERATION; i++) {
  const img = getImg();
  RESULT.push({
    nom: faker.animal.cat(),
    age: faker.datatype.number(10),
    description: faker.lorem.paragraph(5),
    postalcode: faker.datatype.number(50),
    image: img,
  });
}
console.log(RESULT);
