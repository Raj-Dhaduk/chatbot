const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/raj", async (req, res) => {
  const { username } = req.body;

  try {
    const responce = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": " d93f9189-8b95-4995-adac-534a073452e5  " } }
    );
    return res.status(responce.status).json(responce.data);
  } catch (e) {
      
    return res.status(e.responce.status).json(e.responce.data);
    }
    
});
app.listen(3001);
