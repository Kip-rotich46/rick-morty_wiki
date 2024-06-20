import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import './App.css';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState('');
  

  const {info, results} = fetchedData;


  const api =`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(()=>{
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className='text-center ubuntu my-4 fw-bold '>
        Rick & Morty <span className='text-primary'>Wiki</span>
      </h1>
      <Search  setSearch={setSearch} setPageNumber={setPageNumber}/>
      
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filters />
          </div>
          <div className='col-8'>
            <div className='row'>
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
