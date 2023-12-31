const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://recipes:bakingisfun@cluster0.tlzcb9k.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
//const client = null;

async function main(){
    // const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
   // const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await listDatabases(client);
        await getAllRecipes(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function getAllRecipes(client) {
    const database = client.db("Recipes");
    const recipesCollection = database.collection("Recipes");
    const recipes = await recipesCollection.find();

    console.log(recipes);
    var result = [];

    for await (const recipe of recipes) {
        console.dir(recipe);
        result.push(recipe);
    }
    return result;
}

main().catch(console.error);

//export { client, getAllRecipes, listDatabases};