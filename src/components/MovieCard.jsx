export default function ({
  title,
  overview,
  release,
  img,
  department,
  works,
  languageOrPopularity,
}) {
  return (
    <div className="movie-card">
      <h4>{title}</h4>
      <div className="description">
        <p className="langPop">
          {typeof languageOrPopularity === "string"
            ? languageOrPopularity.toUpperCase()
            : languageOrPopularity.toFixed(1)}
        </p>
        <p>{release ? release : department}</p>
      </div>
      <figure>
        <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
      </figure>
      {works ? (
        <ul className="overview">
          {works.map((work) => (
            <li key={work.id}>{work.title ? work.title : work.name}</li>
          ))}
        </ul>
      ) : (
        <p className="overview">{overview}</p>
      )}
    </div>
  );
}
