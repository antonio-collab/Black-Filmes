// src/server.ts
import express from "express";
import filmeRoutes from "../routes/filmesRoutes";

const app = express();
app.use(express.json());

app.use(filmeRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
