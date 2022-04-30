import "./App.css";

const Header = () => {
  return <h2> Hello world!!!</h2>;
};
const Field = () => {
  const holder = "Enter here";
  return <input type="text" placeholder={holder} />;
};

const Btn = () => {
  const text = "Log in";
  // const res = () => {
  //   return 'Log in'
  // }
  const logged = true;
  return <button>{logged ? "Enter" : text}</button>;
};
function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export default App;
