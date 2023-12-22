import { useState } from "react";

const Chat = () => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<
        Array<{ text: string; user: string }>
    >([]);

    const handleMessageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMessage(event.target.value);
    };

    const handleMessageSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (message.trim() !== "") {
            setMessages([...messages, { text: message, user: "You" }]);
            setMessage("");
        }
    };

    return (
        <div>
            <div className="message-container">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={
                            msg.user === "You"
                                ? "message sent"
                                : "message received"
                        }
                    >
                        <span>{msg.user}: </span>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleMessageSubmit} className="message-form">
                <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
