import './App.css';
import background from "./images/bgImage.jpg"

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div 
        className="App"
      >
        <h1>
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

export default App;
