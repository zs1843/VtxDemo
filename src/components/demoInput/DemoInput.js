import React from 'react';
import styles from './DemoInput.less';
import {
  VtxDatePicker,
  VtxMonthPicker,
  VtxYearPicker,
  VtxRangePicker,
  VtxTimePicker,
  VtxExport,
  VtxExport2,
  VtxUpload,
  VtxUpload2,
  VtxGrid,
  VtxModeGrid,
  VtxCombogrid,
  VtxDate,
  VtxTree,
  VtxTreeSelect
} from 'vtx-ui/lib';

function DemoInput() {
  return (
    <div className={styles.normal}>
      <div className={styles.searchGroup}>
        <VtxTimePicker />

        <VtxDatePicker />

        <VtxMonthPicker />

        <VtxYearPicker />

        <VtxRangePicker />

        <VtxExport />

      </div>

      <VtxGrid
        titles={[
          '日期选择', '日期时间选择', '时间选择', '时间', '数字输入框',
          '下拉选择', '输入框', '级联选择', '时间范围选择', '多选', '单选'
        ]}
        gridweight={[1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4]}
      // showAll={true}
      // showMore={true}
      // hiddenMoreButtion={true}
      >
        <VtxTimePicker />

        <VtxDatePicker />

        <VtxMonthPicker />

        <VtxYearPicker />

        <VtxRangePicker />
        <VtxTimePicker />

        <VtxDatePicker />

        <VtxMonthPicker />

        <VtxYearPicker />

        <VtxRangePicker />

        <VtxExport />
      </VtxGrid>

    </div>
  );
}

export default DemoInput;
