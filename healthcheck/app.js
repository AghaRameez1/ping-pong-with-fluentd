const express = require("express");
const app = express();
app.get("/health", (req, res) => {
    console.log('here')
    res.send({ success: true, message: "It is working" })
});
app.get("/", (req, res) => {
    // consider that this route crashes the entire application 
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
