import Content from 'components/Content'
import Bottombar from 'components/Bottombar'
import Header from 'components/Header'

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <Content />
      </div>
      <Bottombar />
    </>
  );
}

export default App;
