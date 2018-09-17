import React from 'react';
import styles from './DemoMap.less';
import { VtxMap } from 'vtx-ui/lib';

function DemoMap(props) {
  const {
    mapPoints,
    mapLines,
    mapPolygons,
    mapCircles,
    setVisiblePoints, mapVisiblePoints,
    setCenter, mapCenter,
    setZoomLevel, mapZoomLevel,
    isOpenTrafficInfo, boundaryName, heatmap,
    setCluster, mapCluster,
    isRangingTool,
    mapDraw, isDraw, isCloseDraw,
    mapRemove, isRemove,
    editGraphicId, isDoEdit, isEndEdit,
    isClearAll,
    isSetAreaRestriction, areaRestriction, isClearAreaRestriction,
    inputVal
  } = props;
  const clickMap = () => {
    console.log('点击地图')
  }
  function clickGraphic(obj) {
    console.log('点击:', obj);
  }
  function dragMapStart(obj) {
    console.log('拖拽开始:', obj);
  }
  function dragMapEnd(obj) {
    console.log('拖拽结束:', obj);
  }
  function moveStart(obj) {
    console.log('移动开始:', obj);
  }
  function moveEnd(obj) {
    console.log('移动结束:', obj);
  }
  function zoomStart(obj) {
    console.log('zoom开始:', obj);
  }
  function zoomEnd(obj) {
    console.log('zoom结束:', obj);
  }
  function mapRangingTool(obj) {
    console.log('测距回调', obj);
  }
  function mouseOverGraphic(obj) {
    console.log('移入事件', obj);
  }
  function mouseOutGraphic(obj) {
    console.log('移出事件', obj);
  }
  function drawEnd(obj) {
    console.log('绘制结束', obj);
  }
  function clickMap(obj) {
    console.log('点击地图', obj);
  }
  function editGraphicChange(obj) {
    console.log('编辑返回', obj);
    switch (obj.geometry.type) {
      case 'point':
        dispatch({
          type: 'example/editPoint',
          payload: {
            id: obj.id,
            longitude: obj.geometry.x,
            latitude: obj.geometry.y,
          }
        });
        break;
      case 'polyline':
        dispatch({
          type: 'example/editLine',
          payload: {
            id: obj.id,
            paths: obj.geometry.paths[0]
          }
        });
        break;
      case 'polygon':
        dispatch({
          type: 'example/editPolygon',
          payload: {
            id: obj.id,
            rings: obj.geometry.rings[0]
          }
        });
        break;
      case 'circle':
        dispatch({
          type: 'example/editCircle',
          payload: {
            id: obj.id,
            longitude: obj.geometry.x,
            latitude: obj.geometry.y,
            radius: obj.geometry.radius
          }
        });
        break;
    }
  }
  return (
    <div className={styles.normal}>
      <VtxMap
        style={{ height: '300px', height: '500px' }}
        mapId='test1'
        mapLines={mapLines}
        mapPoints={mapPoints}
        mapPolygons={mapPolygons}
        mapCircles={mapCircles}
        heatMapData={heatmap}
        setVisiblePoints={setVisiblePoints}
        mapVisiblePoints={mapVisiblePoints}
        setCenter={setCenter}
        mapCenter={mapCenter}
        isOpenTrafficInfo={isOpenTrafficInfo}
        mapZoomLevel={mapZoomLevel}
        setZoomLevel={setZoomLevel}
        setCluster={setCluster}
        mapCluster={mapCluster}
        showControl={{ type: 'all', location: 'tl' }}
        boundaryName={boundaryName}
        clickGraphic={clickGraphic}
        dragMapStart={dragMapStart}
        dragMapEnd={dragMapEnd}
        moveStart={moveStart}
        moveEnd={moveEnd}
        zoomStart={zoomStart}
        zoomEnd={zoomEnd}
        maxZoom={15}
        minZoom={4}
        isRangingTool={isRangingTool}
        mapRangingTool={mapRangingTool}
        mouseOverGraphic={mouseOverGraphic}
        mouseOutGraphic={mouseOutGraphic}
        mapDraw={mapDraw}
        isDraw={isDraw}
        isCloseDraw={isCloseDraw}
        isClearAll={isClearAll}
        drawEnd={drawEnd}
        mapRemove={mapRemove}
        isRemove={isRemove}
        editGraphicId={editGraphicId}
        isDoEdit={isDoEdit}
        isEndEdit={isEndEdit}
        editGraphicChange={editGraphicChange}
        clickMap={clickMap}
        //areaRestriction={areaRestriction}
        isSetAreaRestriction={isSetAreaRestriction}
        isClearAreaRestriction={isClearAreaRestriction}
      ></VtxMap>
    </div >
  );
}

export default DemoMap;
