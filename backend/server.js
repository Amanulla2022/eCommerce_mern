import app from "./app/app.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 7000;

app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
