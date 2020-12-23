import { app } from "./app";

import "./config/envdev";

const port = process.env.SERVER_PORT || 4444;

console.log(`Server running at port ${port}`);
app.listen(port);