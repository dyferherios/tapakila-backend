import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
export default app;
