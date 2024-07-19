const fetchData = async (name) => {
  if (name.length > 0)
    try {
      const response = await fetch(
        'http://api.tvmaze.com/search/shows?q=' + name.trim()
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
};

const dataReady = function (showData) {
  let allBoxesHtml = '';
  showData.forEach((sh) => {
    const show = sh.show;

    const imgSrc = show.image
      ? show.image.medium
      : 'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png';
    const showTitle = show.name ? show.name : '-';
    const genres = show.genres ? show.genres.join(', ') : '-';
    const network = show.network ? show.network.name : '-';
    const premiered = show.premiered ? show.premiered : '-';
    let summary = show.summary;

    summary = `
          <p><b>Show:</b> ${showTitle} </p>
          <p><b>Date:</b> ${premiered} </p>
          <p><b>Network:</b> ${network} </p>
          <br>
          ${summary}
        `;

    allBoxesHtml += getShowBoxByTemplate(imgSrc, showTitle, genres, summary);
  });

  return allBoxesHtml;
};

const getShowBoxByTemplate = function (imgSrc, title, genres, overview) {
  return `
        <div className={style.showBox}>
          <img src="${imgSrc}" alt="">
          <div className={style.showTitle}>${title}</div>
          <div className={style.showGenres}>${genres}</div>
          <div className={showOverview}>${overview}</div>
        </div>
      `;
};

export { fetchData, dataReady };
