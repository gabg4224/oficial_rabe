import { connect, connection } from "mongoose";

let isConnected = false; // Variable de bandera para controlar el estado de la conexión

export async function connectDB() {
  try {
    if (!isConnected) {
      // Verificar si la conexión ya está establecida
      const db = await connect("mongodb+srv://gabg4224:Zg2I5zna9kjS31w0@rabe.imea5lo.mongodb.net/Nuevo?retryWrites=true&w=majority");
      isConnected = true; // Establecer la variable de bandera a true
      console.log(db.connections[0].readyState);
    }
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
}

connection.on("connected", () => {
  isConnected = true; // Actualizar la variable de bandera cuando se establece la conexión
  console.log("MongoDB is connected");
});
