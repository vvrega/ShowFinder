// const fetchData = async (name, dataReady) => {
//   try {
//     const response = await fetch(
//       'http://api.tvmaze.com/search/shows?q=' + name.trim()
//     );
//     const data = await response.json();
//     dataReady(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// const dataReady = function (showData) {
//   const showsContainer = document.querySelector('.tv-series-panel');

//   let allBoxesHtml = '';
//   showData.forEach((sh) => {
//     const show = sh.show;

//     const imgSrc = show.image
//       ? show.image.medium
//       : 'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png';
//     const showTitle = show.name ? show.name : '-';
//     const genres = show.genres ? show.genres.join(', ') : '-';
//     const network = show.network ? show.network.name : '-';
//     const premiered = show.premiered ? show.premiered : '-';
//     let summary = show.summary;
//     summary += `
//           <p>Show: ${showTitle} </p>
//           <p>Date: ${premiered} </p>
//           <p>Network: ${network} </p>
//           <br>
//         `;

//     allBoxesHtml += getShowBoxByTemplate(imgSrc, showTitle, genres, summary);
//   });

//   showsContainer.innerHTML = allBoxesHtml;
// };

// const getShowBoxByTemplate = function (imgSrc, title, genres, overview) {
//   return `
//         <div class="show-box">
//           <img src="${imgSrc}" alt="">
//           <div class="show-title">${title}</div>
//           <div class="show-genres">${genres}</div>
//           <div class="show-overview">${overview}</div>
//         </div>
//       `;
// };

// export { fetchData, dataReady };
