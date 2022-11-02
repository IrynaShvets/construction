import styles from './SocialNetworks.module.scss';

function SocialNetworks() {
  return (
    <ul className={styles.listSocials}>
      <li className={styles.itemTelegram}>
        <a href="/">
          <img
            src={require('../../../images/telegram.svg').default}
            alt="telegram"
          />
        </a>
      </li>
      <li className={styles.itemWhatsapp}>
        <a href="/">
          <img
            src={require('../../../images/whatsapp.svg').default}
            alt="whatsapp"
          />
        </a>
      </li>
      <li className={styles.itemViber}>
        <a href="/">
          <img src={require('../../../images/viber.svg').default} alt="viber" />
        </a>
      </li>
    </ul>
  );
}

export default SocialNetworks;
