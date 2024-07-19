import style from './favorite.module.css';

export default function Favorite() {
  return (
    <div className={style.favoritePanel}>
      <div className={style.showsContainer}>
        <div className={style.favoriteInfo}>
          <p className={style.favP}>
            Nothing here yet. Shows after being added to your favorites will
            appear here!{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
