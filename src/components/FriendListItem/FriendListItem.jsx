import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
      <p
        className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
