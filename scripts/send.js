const { exec } = require("child_process");
const dotenv = require("dotenv");

const {
    NODE_PI_IP_ADDRESS,
    NODE_PI_USER_NAME,
    NODE_SEND_DIRECTORY,
    NODE_RECEIVE_DIRECTORY,
} = dotenv.config().parsed || {};
const SEND_DIRECTORY = NODE_SEND_DIRECTORY || process.cwd();
const RECEIVE_DIRECTORY = NODE_RECEIVE_DIRECTORY || `/home/pi`;

const IGNORES = [
    ".DS_Store",
    ".env",
    ".cache",
    ".vscode",
    "node_modules",
    "dist",
];
const EXCLUDE = IGNORES.map((v) => `--exclude='${v}'`).join(" ");

const command = `rsync -av -e ssh ${EXCLUDE} ${SEND_DIRECTORY} ${NODE_PI_USER_NAME}@${NODE_PI_IP_ADDRESS}:${RECEIVE_DIRECTORY}`;

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.log(stderr);
        return;
    }

    console.log(stdout);
});
