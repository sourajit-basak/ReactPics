import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID j62PbTcGyct2cyO4RA_ffzCkegLZUK_dO0q0rSelQo8",
  },
});
