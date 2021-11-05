module.exports = (io) => {
    let distance = 0;
    let socket = null;

    const loop = () => {
        socket?.emit("SAMPLE", { distance });

        distance += 100;

        setTimeout(loop, 1000);
    };

    io.on("connection", (v) => {
        socket = v;
        distance = 0;

        console.log("CONNECTED");
    });

    loop();
};
