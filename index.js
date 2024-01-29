const algoliasearch = require("algoliasearch");
const client = algoliasearch("FW2J93JKNT", "b46512872d12ed8f55c3052c6cca08ad");
const index = client.initIndex("T02_push");
const lodash = require("lodash");

const actors = require("./dummy.json");

const chunks = lodash.chunk(actors, 1);

chunks.forEach((chunk) => {
  index
    .saveObjects(chunk, {
      autoGenerateObjectIDIfNotExist: true,
    })
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    });
});
