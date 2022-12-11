import './App.css';

function App() {
  return (
    <div>helloworld!</div>
  );
}

function Navbar() {
  return(
    <div className = {'navbar'}>
      <div>home</div>
      <div>HaEun's blog</div>
    </div>
  )

}

function Main() {
  return(
    <div>
      <div className={'1column'}></div>
      <div className={'2column'}></div>
      <div className={'3column'}></div>
    </div>
  )

}

export default App;
