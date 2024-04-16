import axios from 'axios';
import { useRef } from 'react';
import './styles.css';
function SearchBar({ setSongList }) {
  const inputRef = useRef();

  const handleSearch = () => {
    console.log('search');
    axios
      .get(`https://api.manana.kr/karaoke/song/${inputRef.current.value}.json`)
      .then((res) => {
        console.log(res.data);
        setSongList(res.data);
      });
  };

  return (
    <div className='search-box'>
      <input
        type='search'
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
            return;
          }
        }}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default SearchBar;
