'use client';

import style from './notifications.module.css';
import { Notification } from '../notification/Notification';

import { useContext } from 'react';
import { CollapseContext } from '@/context/CollapseProvider';

export default function Notifications() {
  const { collapse } = useContext(CollapseContext);

  return (
    <div
      className={`${style.notificationsPanel} ${
        collapse ? style.collapsed : ''
      }`}
    >
      <div className={style.notificationsContainer}>
        <Notification
          heading={'New Content Alert:'}
          content={
            '🌟 Exciting News! New arrivals just for you. Dive into the latest releases now on showFINDER.'
          }
        />
        <Notification
          heading={'Continue Watching:'}
          content={
            "🍿 Your binge awaits! Don't forget to continue watching 'Stranger Things.' Get back to the adventure."
          }
        />
        <Notification
          heading={'Upcoming Release Reminder:'}
          content={
            "📅 Mark your calendar! 'The Crown' Season 5 premieres in 3 days. Get ready for royal drama and intrigue."
          }
        />
        <Notification
          heading={'Recommendation Notification:'}
          content={
            "👀 We think you'll love this! Based on your interests, check out 'Mindhunter.' It's a thrilling crime series just for you."
          }
        />
        <Notification
          heading={'Special Event Notification:'}
          content={
            "🎉 Exclusive Premiere Event! Join us for a live Q&A with the cast of your favorite show, 'Money Heist.' Save the date and don't miss the excitement!"
          }
        />
      </div>
    </div>
  );
}
