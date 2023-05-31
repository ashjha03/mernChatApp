import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("/api/chat");
    setChats(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats.map((singleChat) => {
        return <div key={singleChat._id}>{singleChat.chatName}</div>;
      })}
    </div>
  );
};

export default ChatPage;
