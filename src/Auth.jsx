import { useState } from "react";

function Auth() {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim() !== "") {
      setUser(input);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {user ? (
        <h2>Welcome, {user} 🎉</h2>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Auth;
