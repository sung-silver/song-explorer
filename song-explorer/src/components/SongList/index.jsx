import Song from '../Song';

function SongList({ data }) {
  return (
    <div className='list'>
      {data.length === 0 ? (
        <div>검색된 결과가 없습니다</div>
      ) : (
        data.map((song) => {
          return <Song key={song.no} {...song} />;
        })
      )}
    </div>
  );
}

export default SongList;
