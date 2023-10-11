import { useState } from 'react';
import './App.css';
import LinkForm from './componets/LinkForm';
import { getData, postData } from './apis/api';
import { PaginatedItems } from './componets/pagination/Paginate';
import TableData from './componets/table/TableData';

function App() {
  const [urlResponse, setUrlResponse] = useState('');
  const [historyData, setHistoryData] = useState({});
  const { dataList = [] } = historyData;
  const [query, updateQuery] = useState({ page: 0, per_page: 10 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputUrl = e.target.elements.url.value || '';
    const result = await postData({ endpoint: '', formData: { url: inputUrl } });
    console.log(result);
    if (result) {
      setUrlResponse(result);
    }
  };

  const getHistoryData = async (params = {}) => {
    const result = await getData({ endpoint: '', options: { ...params } });
    if (result) {
      setHistoryData(result);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    getHistoryData({ ...query });
  };

  return (
    <>
      <h2>How To use</h2>
      <ul className='list-wrapper'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <LinkForm handleSubmit={handleSubmit} />
      <div className='result-category'>
        {urlResponse && (
          <h2>
            Category: <span>{urlResponse}</span>
          </h2>
        )}
      </div>

      <div style={{ margin: '36px auto', width: 'fit-content' }}>
        <button onClick={handleClick} className='btn-normal'>
          Get History Data
        </button>
      </div>
      <div className='history-table'>
        {dataList.length ? (
          <TableData data={dataList} headers={[]} />
        ) : (
          <center>
            <h2>No Data</h2>
          </center>
        )}
        {!!dataList.length && (
          <div className='pagination'>
            <PaginatedItems totalItems={400} onClick={(page) => updateQuery({ ...query, page: page })} itemsPerPage={10} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
