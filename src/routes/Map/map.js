import React from 'react';
import { connect } from 'dva';
import styles from './map.less';
import DemoMap from '../../components/demoMap/DemoMap';

function Map() {
  return (
    <div className={styles.normal}>
      <DemoMap />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Map);
