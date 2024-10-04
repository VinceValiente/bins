const { getConnectedClient } = require("../database");

const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("todosdb").collection("todos");
  return collection;

  const app = express();
app.use(express.json());
};

module.exports = { getCollection };