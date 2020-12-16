import Song from "./song.js"

const Top20Details = ({top20}) => {
    if (!top20) return null;
    const top20List = top20.feed.entry;

    const songDetails = top20List.map((song) => {
        return(
            {
                artist: song["im:artist"].label,
                title: song["im:name"].label,
                key: song["id"].label
            }
        );
    });

    const songsToDisplay = songDetails.map((song) => {
      return (
      <li>
          <h3>{song.artist}</h3>
          <h4>{song.title}</h4>
      </li>)
  });
  return (
      <>
          <h2>Top 20 songs</h2>
          <ol>
              {songsToDisplay}
          </ol>
      </>
  );
};
export default Top20Details;