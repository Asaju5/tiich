import { useState, useContext, useEffect } from "react";
import { Context } from "../context";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/home");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      window.localStorage.setItem("user", JSON.stringify(data));
      router.push("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <button
          className="py-2 px-3 bg-red-700 rounded-lg text-white uppercase"
          type="submit"
          disabled={!email || !password || loading}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
