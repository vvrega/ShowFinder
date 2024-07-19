import '@/styles/shows.css';

export default function NotificationsPanel() {
  return (
    <div class="notification-content-panel">
      <div class="tv-series-panel">
        <div class="notifications-container">
          <div class="notification-box">
            <p class="notification-heading">New Content Alert:</p>
            <p class="notification-content">
              🌟 Exciting News! New arrivals just for you. Dive into the latest
              releases now on CinemaTV.
            </p>
          </div>
          <div class="notification-box">
            <p class="notification-heading">Continue Watching:</p>
            <p class="notification-content">
              🍿 Your binge awaits! Don't forget to continue watching 'Stranger
              Things.' Get back to the adventure.
            </p>
          </div>
          <div class="notification-box">
            <p class="notification-heading">Upcoming Release Reminder:</p>
            <p class="notification-content">
              📅 Mark your calendar! 'The Crown' Season 5 premieres in 3 days.
              Get ready for royal drama and intrigue.
            </p>
          </div>
          <div class="notification-box">
            <p class="notification-heading">Recommendation Notification:</p>
            <p class="notification-content">
              👀 We think you'll love this! Based on your interests, check out
              'Mindhunter.' It's a thrilling crime series just for you.
            </p>
          </div>
          <div class="notification-box">
            <p class="notification-heading">Special Event Notification:</p>
            <p class="notification-content">
              🎉 Exclusive Premiere Event! Join us for a live Q&A with the cast
              of your favorite show, 'Money Heist.' Save the date and don't miss
              the excitement!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
