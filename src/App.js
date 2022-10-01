import { useEffect, useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    //     console.log(users);
    const filteruser = users.filter((user) => {
      return user.title.includes(search);
    });

    setFilteredUser(filteruser);
  }, [search]);

  const onChangeHandler = (e) => {
    const searchField = e.target.value;
    setSearch(searchField);
  };
  console.log(filteredUser);
  return (
    <div className="App">
      <input type="search" onChange={onChangeHandler} value={search} />
      <div className="card-list">
        {filteredUser.map((item) => {
          const { title } = item;
          return <h1>{title}</h1>;
        })}
      </div>
    </div>
  );
}
