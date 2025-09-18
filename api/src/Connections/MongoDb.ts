import { MongoClient } from "mongodb";

var client = null;

async function connectDB() {
    try {
        const userName = process.env.DBUSERNAME;
        const password = process.env.DBPASSWORD;
        const uri = `mongodb+srv://${userName}:${password}@clustercasamento.xz0omki.mongodb.net/?retryWrites=true&w=majority`;
        // const uri = `mongodb+srv://joaomachado1331_db_user:<db_password>@clustercasamento.xz0omki.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCasamento`

        client = new MongoClient(uri);
        await client.connect();

        console.log("db connected")

        return client.db("casamentoDb");
    } catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err);
        throw err;
    }
}

function closeConnection() {
    if (client != null) {
        client.close()
        client = null
    }
}

export {
    connectDB,
    closeConnection
}