import './App.css';
import Row from './Row'
import request1 from './request'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Row title="Netflix Originals" url={request1.fetchOriginals} isMain />
      <Row title="Trending Now" url={request1.fetchTrending} />
      <Row title="Top Rated" url={request1.fetchTopRated} />
      <Row title="Action Movies" url={request1.fetchAction} />
      <Row title="Comady Movies" url={request1.fetchComedy} />
      <Row title="Horror Movies" url={request1.fetchHorror} />
      <Row title="Romance Movies" url={request1.fetchRomance} />
      <Row title="Documentary Movies" url={request1.fetchDocumentory} />
    </>
  );
}

export default App;
