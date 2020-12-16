const Song = ({song}) => {
    if (!song) return null;
    return (
        <>
            <li>
                <h4>{song.artist}</h4>
                <p>{song.title}</p>
            </li>
        </>
    );
};

export default Song;