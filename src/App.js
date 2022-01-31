import Content from 'components/Content'
import Bottombar from 'components/Bottombar'
import Header from 'components/Header'
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className='wrapper'>

          <Switch>
            <Header />
          </Switch>
        <Content />
      </div>
      <Bottombar />
    </Router>
  );
}

export default App;
