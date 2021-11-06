// import ComponentsButton from './functionalComponents/componentsButton';
// import Users from './ClassComponents/Users';
// import Loader from './loader/Loader';
import {Cell, Row, Table} from './tabel'
import './App.css';


function App() {
  return (
    <div className='block'>
      {/* <h1>This is main window</h1> */}
      {/* <ComponentsButton /> */}
      {/* <Users/> */}
      {/* <Loader/> */}
      <Table>
        <Row head="true">
          <Cell background="red">#</Cell>
          <Cell type="date">2</Cell>
          <Cell type="number">3</Cell>
          <Cell type="money" currency="$">4</Cell>
        </Row>
        <Row>
          <Cell type="" background="red">1</Cell>
          <Cell type="date">2</Cell>
          <Cell type="number">3</Cell>
          <Cell type="money" currency="$">4</Cell>
        </Row>
      </Table>
    </div>
  );
}

export default App;
