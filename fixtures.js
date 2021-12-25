const axios = require("axios");
var faker = require("faker");

function getImg() {
  return axios
    .get("https://cataas.com/cat", {
      responseType: "arraybuffer",
    })
    .then((resp) => Buffer.from(resp.data).toString("base64"));
}

function createDB() {
  return axios
    .put("http://cat:cat@127.0.0.1:5984/cat")
    .then((_) => console.log("database created"))
    .catch((_) => {
      axios.delete("http://cat:cat@127.0.0.1:5984/cat").then((_) => createDB());
    });
}

async function getArray() {
  let RESULT = [];
  for (let i = 0; i < 10; i++) {
    RESULT.push({
      nom: faker.animal.cat(),
      age: faker.datatype.number(10),
      description: faker.lorem.paragraph(5),
      postalcode: faker.datatype.number(50),
      image: await getImg(),
    });
  }
  return RESULT;
}

console.log("Generate fake data on database");
createDB();
getArray().then((resp) => {
  axios
    .post(
      "http://cat:cat@127.0.0.1:5984/cat/_bulk_docs",
      JSON.stringify({
        docs: resp,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => console.log("done"));
});
