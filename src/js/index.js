import { io } from "socket.io-client";

const $distance = document.querySelector(".distance");
const socket = io();

socket.on("SAMPLE", ({ distance }) => {
    $distance.innerHTML = distance;
});
