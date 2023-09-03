import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
  params: {
    key: "7684a8f5322d402c89f9157ef5838f63",
  },
});
