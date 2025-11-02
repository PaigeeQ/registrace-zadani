import { useState, useEffect } from "react";
import "./Registraton.css";

type User = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };

export const Registration = () => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    if (user.username === "" && user.email.includes("@")) {
      const namePart = user.email.split("@")[0]; //rozděleni textu - split!
      setUser((prevUser) => ({ ...prevUser, username: namePart }));
    }
  }, [user.email, user.username]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // nerefreshne se mi!!!
    console.log(user); 
  };

  return (
    <div>
      <h2 className="registration" >REGISTRATION</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <label>User Name</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) =>
            setUser({ ...user, username: e.target.value })
          }
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={(e) =>
            setUser({ ...user, passwordConfirm: e.target.value })
          }
        />

        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};