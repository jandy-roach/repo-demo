import Auth from "./Auth";
import Todo from "./Todo";
import Weather from "./Weather";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hackathon Demo Website</h1>
      <Auth />
      <Todo />
      <Weather />
    </div>
  );
}

export default App;