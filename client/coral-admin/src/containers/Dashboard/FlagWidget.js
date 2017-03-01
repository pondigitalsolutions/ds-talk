import React from 'react';
import {Link} from 'react-router';
import styles from './Widget.css';
import I18n from 'coral-framework/modules/i18n/i18n';
import translations from 'coral-admin/src/translations';

const lang = new I18n(translations);

const FlagWidget = (props) => {
  const {assets} = props;

  return (
    <div className={styles.widget}>
      <h2 className={styles.heading}>Articles with the most flags</h2>
      <table className={styles.widgetTable}>
        <thead className={styles.widgetHead}>
          <tr>
            <th>{lang.t('streams.article')}</th>
            <th>{lang.t('dashboard.flags')}</th>
          </tr>
        </thead>
        <tbody>
          {
            assets.length
            ? assets.map(asset => {
              const flagSummary = asset.action_summaries.find(s => s.type === 'FlagAssetActionSummary');
              return (
                <tr className={styles.rowLinkify} key={asset.id}>
                  <td>
                    <Link className={styles.linkToAsset} to={`/admin/moderate/flagged/${asset.id}`}>
                      <p className={styles.assetTitle}>{asset.title}</p>
                      <p className={styles.lede}>{asset.author} — Published: {new Date(asset.created_at).toLocaleDateString()}</p>
                    </Link>
                  </td>
                  <td>
                    <Link className={styles.linkToAsset} to={`/admin/moderate/flagged/${asset.id}`}>
                      <p className={styles.widgetCount}>{flagSummary ? flagSummary.actionCount : 0}</p>
                    </Link>
                  </td>
                </tr>
              );
            })
            : <tr><td colSpan="2">{lang.t('dashboard.no_flags')}</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default FlagWidget;
