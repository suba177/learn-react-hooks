import { useState, useEffect } from "react";

const ComponentUseEffect = () => {
  const [page, setPage] = useState(1);

  const addPage = () => {
    setPage(page + 1);
  };

  const delayAddPage = () => {
    setTimeout(() => addPage(), 1);
  };

  const Post = () => {
    const [postData, setPostData] = useState([{}]);

    useEffect(() => {
      page <= 10
        ? fetch(`https://jsonplaceholder.typicode.com/users/${page}`)
            .then((response) => response.json())
            .then((json) => setPostData(json))
        : setPage(1);
    });

    return (
      <div>
        <p>name: {postData.name}</p>
        <p>@mail: {postData.email}</p>
        <p>phone: {postData.phone}</p>
      </div>
    );
  };

  return (
    <div
      className="useEffect"
      style={{
        marginTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2px solid red",
      }}
    >
      <h1>2: useEffect</h1>
      <h2>Page: {page}</h2>
      <button onClick={delayAddPage}>swipe posts</button>
      <hr />
      <Post page={page}></Post>
    </div>
  );
};

export { ComponentUseEffect };
