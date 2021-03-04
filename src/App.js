import Insert from './components/Insert';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 mx-auto">
          <Insert/>
          <Todolist/>
        </div>
      </div>
    </div>
  );
}

export default App;
