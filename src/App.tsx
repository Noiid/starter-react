import { useState } from "react";
import "./App.css";
import { Text, Span, Input } from "./components";

interface Person {
  id: number;
  name: string;
  address: string;
}

const App = () => {
  const [name, setName] = useState<string>("fulan");
  const [count, setCount] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<Person[]>([]);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleAddUser = () => {
    setUsers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: "alo",
        address: "indonesia",
      },
    ]);
  };
  return (
    <>
      <div>
        <p>{name}</p>
        <p>ini angka {count}</p>
        <button
          onClick={() => {
            setName("fulana");
          }}
        >
          Change Name
        </button>
        <button onClick={handleCount}>Change Count</button>
        <button onClick={handleOpen}>
          {!open ? "Open Modal" : "Close Modal"}
        </button>
        {open && <p>Modal Terbuka</p>}
        <Text content="tambahan" child={<a href="">ini ada link</a>} />

        <button onClick={handleAddUser}>Add User</button>
        {users.map((us) => (
          <p>
            {us.id} - {us.name} - {us.address}
          </p>
        ))}
        <Span
          content="Ini Span"
          child={<Text content="ini Text" child="aku child" />}
        />
        <Input type="text" name="username" />
        <Input type="password" name="password" />
        <Input type="submit" name="" />
      </div>
    </>
  );
};

export default App;
