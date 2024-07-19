'use client';
import { useSearch } from '../../context/SearchProvider';
import style from './contentPanel.module.css';

export default function ContentPanel() {
  const { searchResults } = useSearch();

  return (
    <div className={style.contentPanel}>
      {searchResults.length > 0 ? (
        <div className={style.showsPanel}>
          {searchResults.map((showData, index) => {
            const show = showData.show;
            const imgSrc = show.image
              ? show.image.medium
              : 'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png';
            const showTitle = show.name ? show.name : '-';
            const genres = show.genres ? show.genres.join(', ') : '-';
            const network = show.network ? show.network.name : '-';
            const premiered = show.premiered ? show.premiered : '-';
            const summary = show.summary;

            return (
              <div key={index} className={style.showBox}>
                <img src={imgSrc} alt="" />
                <div className={style.showTitle}>{showTitle}</div>
                <div className={style.showGenres}>{genres}</div>
                <div className={style.showOverview}>
                  <p>
                    <b>Show:</b> {showTitle}
                  </p>
                  <p>
                    <b>Date:</b> {premiered}
                  </p>
                  <p>
                    <b>Network:</b> {network}
                  </p>
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className={style.noDataMessage}>
          Looks like we couldn’t find any shows matching your search.
          <br /> Try exploring different keywords or check back later!
        </p>
      )}
    </div>
  );
}
