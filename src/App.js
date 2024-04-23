import './App.css';
import { React } from 'react';
import { useState, useEffect, useRef, useMemo } from 'react';

export default function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <main style={{ width: '100%' }}>
        <ComponentUseState></ComponentUseState>
        <ComponentUseEffect></ComponentUseEffect>
        <ComponentUseRef></ComponentUseRef>
        <ComponentUseMemo></ComponentUseMemo>
      </main>
    </div>
  );
}

// useState //
const ComponentUseState = () => {
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
// useRef //
const ComponentUseRef = () => {
  const [ value, setValue ] = useState('write for the render')

  const renderCount = useRef(0)

  const prevValue = useRef('')

  const inputRef = useRef(null)


  useEffect(() => {
    renderCount.current++
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const clearRenders = () => {
    renderCount.current = 0
    setValue('')    
  }

  const focus = () => inputRef.current.focus()
  return (
    <div className="useRef" style={{ marginTop: '10px', paddingBottom: '10px', borderBottom: '2px solid yellow' }}>
      <h1>3: useRef</h1>
      <h2>the number of renderers of this block: {renderCount.current}</h2>
      <h2>previous status: {prevValue.current}</h2>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={clearRenders}>clear text and renders</button>
      <button onClick={focus}>focus on the text</button>
    </div>
  )
}
//
// useMemo //
const propX = () => {
  let i = 0
  while (i < 1000000000) i++
  return i
}  

const ComponentUseMemo = () => {
  const [ number, setNumber ] = useState(1)

  const sum = (a,b,d) => (a* (b) / d)

  useMemo(() => {
    sum(propX(), number,  1000000000)  
  }, [propX])
 

  return (    
    <div className="useMemo" style={{ marginTop: '10px', paddingBottom: '10px', borderBottom: '2px solid green' }}>
      <h1>4: useMemo </h1>
      <h2>calculated property: {number}</h2>
      <button onClick={() => setNumber((prevVal => prevVal + 1))}>+</button>
      <button onClick={() => setNumber((prevVal => prevVal - 1))}>-</button>
      <p>в зависимость передано значение содержащее ресурсозатратное вычисление, но счетчик меняется без задержек</p>
    </div>
  )
}
