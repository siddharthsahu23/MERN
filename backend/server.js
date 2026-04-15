import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
const app = express();

app.use("/api/notes", notesRoutes);
//app.use("/api/payments", notesPayments);
//app.use("/api/posts", notesPosts);
//app.use("/api/Products", notesProducts);

app.listen(5009, () => {
    console.log("server started");
});

