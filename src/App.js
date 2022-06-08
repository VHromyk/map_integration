import Container from './components/Container/Container'
import MapSection from './components/MapSection/MapSection';

function App() {

  const locations = [
      {
          address: 'Father and son',
          lat: 46.56196801400655,
          lng: 30.829295322470607,
      },
      {
          address: 'My home',
          lat: 46.59,
          lng: 30.405,
      },
  ];


  return (
    <Container>
      <MapSection locations={locations} zoomLevel={13} />
    </Container>
  );
}

export default App;
