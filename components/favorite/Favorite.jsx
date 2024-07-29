'use client';

import style from './favorite.module.css';

import { useContext } from 'react';
import { CollapseContext } from '@/context/CollapseProvider';

export default function Favorite() {
  const { collapse } = useContext(CollapseContext);

  return (
    <div
      className={`${style.favoritePanel} ${collapse ? style.collapsed : ''}`}
    >
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
