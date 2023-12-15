export default function ({ title, overview, release, img, originalLanguage }) {
  return (
    <div className="movie-card">
      <h4>{title}</h4>
      <div className="description">
        <p className="original-lang">{originalLanguage.toUpperCase()}</p>
        <p>{release}</p>
      </div>
      <figure>
        <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
      </figure>
      <p className="overview">{overview}</p>
    </div>
  );
}
