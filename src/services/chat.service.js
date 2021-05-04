import axios from "axios";
import authHeader from "./auth-header";
import decode from "jwt-decode";

const URL = "http://localhost:8080/api/chat/";

class ChatService {
  async getChatList() {
    let user = decode(localStorage.getItem("user"));
    const res = await axios.get(URL + "getChatList/" + user.user_id, {
      headers: authHeader(),
    });
    return res.data;
  }

  async getChatHead(event_id) {
    const res = await axios.get(URL + "getChatHead/" + event_id, {
      headers: authHeader(),
    });
    return res.data;
  }

  async getMessages(event_id) {
    const res = await axios.get(URL + "getMessages/" + event_id, {
      headers: authHeader(),
    });
    return res.data;
  }
}

export default new ChatService();
