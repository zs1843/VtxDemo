import React from 'react';
import styles from './VtxDemoModal.css';
import { VtxModal, VtxInput, VtxSelect } from 'vtx-ui';

function VtxDemoModal() {
  const children = () => (
    <form>
      <VtxInput />
      <VtxInput />
      <VtxSelect />
    </form>
  )
  return (
    <div className={styles.normal}>
      <VtxModal
        title="Vtx Demo Modal"
        children={children}
      />
    </div>
  );
}

export default VtxDemoModal;
