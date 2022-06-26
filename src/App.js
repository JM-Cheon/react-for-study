import { useState, useEffect } from "react";

// useEffect()
// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (e) => setKeyword(e.target.value);
//   useEffect(() => {
//     console.log("I run only once.");
//   }, []);
//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 5) {
//       console.log("I run when 'keyword' changes", keyword);
//     }
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes", counter);
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when 'keyword' & 'counter' changes", counter, keyword);
//   }, [counter, keyword]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search Hear..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// Cleanup()
function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
