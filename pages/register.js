import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

function Register() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/home");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
            required
          />
        </div>

        <div className="">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <button
          className="py-2 px-3 bg-red-700 rounded-lg text-white uppercase"
          type="submit"
          disabled={!name || !email || !password || loading}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Register;
