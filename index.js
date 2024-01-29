const algoliasearch = require("algoliasearch");
const { result } = require("lodash");
const client = algoliasearch("FW2J93JKNT", "b46512872d12ed8f55c3052c6cca08ad");
const index = client.initIndex("T02_push");

// const lodash = require("lodash");
// const actors = require("./dummy.json");
// const chunks = lodash.chunk(actors, 1);
// chunks.forEach((chunk) => {
//   index
//     .saveObjects(chunk, {
//       autoGenerateObjectIDIfNotExist: true,
//     })
//     .then(({ objectIDs }) => {
//       console.log(objectIDs);
//     });
// });

// index.getSettings().then((result) => console.log(result));
// index.setSettings({
//   searchableAttributes: [
//     "unordered(company)",
//     "name",
//     "title",
//     "previous_titles",
//   ],
// });

// index.setSettings({
//   customRanking: ["desc(isFeatured)", "desc(endorsements)"],
// });

index.search("").then((result) => {
  console.log(result.nbHits);

  for (const hit of result.hits) {
    console.log(hit);
  }
});
