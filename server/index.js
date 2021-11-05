const express = require("express");
const { Server } = require("http");
const socketIO = require("socket.io");
const portfinder = require("portfinder");
const chalk = require("chalk");
const action = require("./action");

const HOST = "0.0.0.0";
const DIST = "dist";

const app = express();
const http = new Server(app);
const io = socketIO(http);

(async () => {
    const port = await portfinder.getPortPromise();
    const url = `http://localhost:${port}`;

    app.use(express.static(DIST));
    http.listen(port, HOST);

    console.log("Start server !!!");
    console.log("");
    console.log(
        chalk.magenta(
            [
                "    z z                     z z z              ",
                "    zx               z   z               zx         ",
                "     x                zzz                z          ",
                "      z               zxx               z           ",
                "        z          zxxxxxxxx                        ",
                "          zz      zxxxxxxxxxxz                      ",
                "          zzz   zxz         zxz   zzz               ",
                "        z      xxx           xxz     zz             ",
                "       x    zxxzzzzzxzzzzzzzzzzzxxz    z            ",
                "      zxxxxx         zxxxz         xxxzx            ",
                "    xz  zxz           zxz           xx   zz         ",
                "   x    zx            xxx           zx     x        ",
                "  zx    zxx         zxxxxxz         xxz    x        ",
                "   xz  zxxxxxzzzzzzz        zxzzzzxxxxxz  x         ",
                "     xxz    zxxxxz           zxxxz     zxx          ",
                "      x       zxx             xz        x           ",
                "      zz        xxz          xz        zz           ",
                "        zz      zxxxxzzzzzzxxxz       z             ",
                "            zzzxxxzz       zzxxxzzz                 ",
                "                zz           zz                     ",
                "                    zzzzzzz                         ",
            ].join("\n")
        )
    );
    console.log("");
    console.log(`URL: ${chalk.green.underline(url)}`);
    console.log("");

    action(io);
})();
