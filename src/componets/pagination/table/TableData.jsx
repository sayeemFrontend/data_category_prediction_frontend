import PropTypes from 'prop-types';
import './Table.css';
export default function TableData({ data = [], headers = [] }) {
  return (
    <table>
      <caption>History</caption>
      <thead>
        <tr>
          {headers?.map((it, i) => (
            <td key={i}>{it}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, i) => (
          <tr key={i}>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableData.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array,
};
