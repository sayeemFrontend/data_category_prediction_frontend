import { useState } from 'react';
import './App.css';
import LinkForm from './componets/LinkForm';
import { getData, postData } from './apis/api';
import { PaginatedItems } from './componets/pagination/Paginate';

function App() {
  const [urlResponse, setUrlResponse] = useState('heolooo');
  const [historyData, setHistoryData] = useState(null);
  const [query] = useState({ page: 0, per_page: 10 });

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
        <table>
          <caption>History</caption>
          <thead>
            <tr>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {historyData?.length ? (
              <tr>
                <td></td>
              </tr>
            ) : (
              <h4>No Data</h4>
            )}
          </tbody>
        </table>

        <div className='pagination'>
          <PaginatedItems totalItems={400} onClick={(page) => getHistoryData({ ...query, page: page })} itemsPerPage={10} />
        </div>
      </div>
    </>
  );
}

export default App;
