import './App.css';
import { React } from 'react';
import { useState, useEffect } from 'react';

export default function App() {
  return (
    <div className="App">
      <ComponentUseState></ComponentUseState>
      <ComponentUseEffect></ComponentUseEffect>
    </div>
  );
}

// useState //
function ComponentUseState() {
  const [visible, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility((currentValue) => !currentValue);
  };

  return (
    <div className="useState" style={{ borderBottom: '2px solid red', paddingBottom: '10px' }}>
      <h1>1: What is React? (useState Hook)</h1>
      <button onClick={handleClick}>Show (toggler)</button>
      {visible && (
        <div>
          <p>A JS library</p>
        </div>
      )}
    </div>
  );
}
//
// useEffect //
function ComponentUseEffect() {
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
    <div className="useEffect" style={{ marginTop: '10px', paddingBottom: '10px', borderBottom: '2px solid orange' }}>
      <h1>2: useEffect</h1>
      <h2>Page: {page}</h2>
      <button onClick={delayAddPage}>swipe posts</button>
      <hr />
      <Post page={page}></Post>
    </div>
  );
}
//
