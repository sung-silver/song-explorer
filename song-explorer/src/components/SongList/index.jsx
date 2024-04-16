import Song from '../Song';

function SongList({ data }) {
  return (
    <div className='list'>
      {data.map((song) => {
        return <Song key={song.no} {...song} />;
      })}
    </div>
  );
}

export default SongList;
