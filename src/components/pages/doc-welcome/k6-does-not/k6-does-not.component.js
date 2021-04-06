import { Heading } from 'components/shared/heading';
import { useI18n } from 'contexts/i18n-provider';
import { Link } from 'gatsby';
import React from 'react';

import styles from './k6-does-not.module.scss';

export const K6DoesNot = () => {
  const { t } = useI18n();

  return (
    <section className={`container ${styles.container}`}>
      <Heading tag={'h2'} size={'lg'} className={styles.title}>
        {t('welcome.k6-does-not.title')}
      </Heading>
      <p>{t('welcome.k6-does-not.description')}</p>
      <ul>
        <li>
          <Heading tag={'h3'} size={'md'} className={styles.title}>
            {t('welcome.k6-does-not.browser.title')}
          </Heading>
          <p>{t('welcome.k6-does-not.browser.description')}</p>
          <p>
            {t('welcome.k6-does-not.browser.testing.text')}{' '}
            <Link
              className={'link'}
              to="/testing-guides/load-testing-websites/"
            >
              {t('welcome.k6-does-not.browser.testing.link')}
            </Link>
            . {t('welcome.k6-does-not.browser.recorded-session.text')}{' '}
            <Link
              className={'link'}
              to="/using-k6/session-recording-har-support/"
            >
              {t('welcome.k6-does-not.browser.recorded-session.link')}
            </Link>
            .
          </p>
        </li>
        <li>
          <Heading tag={'h3'} size={'md'} className={styles.title}>
            {t('welcome.k6-does-not.nodejs.title')}
          </Heading>
          <p>{t('welcome.k6-does-not.nodejs.description')}</p>
          <p>
            {t('welcome.k6-does-not.nodejs.import.text1')}{' '}
            <Link
              className={'link'}
              to="/using-k6/modules/#bundling-node-modules"
            >
              {t('welcome.k6-does-not.nodejs.import.link')}
            </Link>{' '}
            {t('welcome.k6-does-not.nodejs.import.text2')}
          </p>
        </li>
      </ul>
    </section>
  );
};
