import axios from "axios";

const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const user = await axios.get("http://localhost:3000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export default getUser;
