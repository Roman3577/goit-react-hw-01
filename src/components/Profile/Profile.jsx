import styles from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles["profile-card"]}>
      <div>
        <img src={image} alt="User avatar" />
        <p className={styles.username}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles["stats-list"]}>
        <li>
          <span>Followers</span>
          <span className={styles.number}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={styles.number}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={styles.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
