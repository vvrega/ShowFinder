'use client';
import { useState, useEffect } from 'react';
import { fetchData } from '../api/api';
import '@/styles/shows.css';

export default function ContentPanel() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchData('/')
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="content-panel">
      <div className="tv-series-panel">
        {shows.map((showData, index) => {
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
            <div key={index} className="show-box">
              <img src={imgSrc} alt="" />
              <div className="show-title">{showTitle}</div>
              <div className="show-genres">{genres}</div>
              <div className="show-overview">
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
    </div>
  );
}
