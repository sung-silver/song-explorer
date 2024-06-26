import './styles.css';

function Song({ title, no, singer }) {
  return (
    <div className='box'>
      <div>
        <div className='title'>{title}</div>
        <div className='singer'>{singer}</div>
      </div>
      <div className='number'>{no}</div>
    </div>
  );
}

export default Song;
