import  { useState, useEffect } from "react";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

function App() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [sensorData, setSensorData] = useState([]);

    useEffect(() => {
        socket.on("message", (data) => {
            setMessages((prev) => [...prev, data]);
        });
        socket.on("sensor-data", (data) => {
            setSensorData((prev) => [data, ...prev.slice(0, 19)]);
        });



        return () => {
            socket.off("message");
            socket.off("sensor-data");
        };
    }, []);


    const sendMessage = () => {
        if (message) {
            socket.emit("message", message);
            setMessage("");
        }
    };

    return (
        <div style={{padding: "20px", textAlign: "center"}}>
            <h2>WebSocket TWwAIR test App</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>💬 {msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Wpisz wiadomość..."
            />
            <button onClick={sendMessage}>Wyślij</button>

    <h2>Dane z czujnika:</h2>
    <ul>
        {sensorData.map((data, index) => (
            <li key={index}>
                 Temp: {data.temperature}°C | Wilg: {data.humidity}% | ️ Ciśnienie: {data.pressure} hPa
            </li>
        ))}
    </ul>
        </div>

    );
}


export default App;
