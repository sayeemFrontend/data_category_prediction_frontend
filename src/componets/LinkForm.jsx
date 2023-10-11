import './style.css';
import PropTypes from 'prop-types';

export default function LinkForm({ handleSubmit = () => {} }) {
  return (
    <div className='insert-form'>
      <form onSubmit={handleSubmit}>
        <input required name='url' type='text' placeholder='Insert news link' />
        <button className='btn-normal' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

LinkForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
