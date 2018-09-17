
export default {

  namespace: 'VtxDemo',

  state: {
    mapLines: [{
      id: 'line0',
      paths: [[75.757904, 38.118117], [117.375719, 24.598057], [115.375719, 28.598057]],
    }, {
      id: 'line1',
      paths: [[76.757904, 38.118117], [119.375719, 24.598057], [114.375719, 28.598057]],
    }],
    mapPoints: [{
      id: 'p00',
      longitude: 116.468021,
      latitude: 39.890092,
      markerContent: '<div style="background:#fff;">1111<div>',
      config: {
        markerContentX: -16,
        markerContentY: -9,
        isAnimation: false,
        animationDelay: 10,
        // BAnimationType: 0
      },
      other: 'xxxx'
    }, {
      id: 'p01',
      longitude: 117.468021,
      latitude: 39.890092,
      canShowLabel: true,
      config: {
        labelContent: 'asdfasdfasdfasfdasf',
        markerContentX: -13,
        markerContentY: -42,
        isAnimation: true,
        animationDelay: 30,
        // BAnimationType: 1
      }
    }, {
      id: 'p02',
      longitude: 117.468021,
      latitude: 39.890092,
      config: {
        markerContentX: -13,
        markerContentY: -42,
        isAnimation: true,
        animationDelay: 30,
        autoRotation: true
        // BAnimationType: 1
      }
    }],
    mapPolygons: [{
      id: 'g00',
      rings: [[118.757904, 38.118117], [112.375719, 24.598057], [115.375719, 28.598057]]
    }, {
      id: 'g01',
      rings: [[116.757904, 36.118117], [115.375719, 25.598057], [114.375719, 38.598057]]
    }],
    mapCircles: [{
      id: 'c00',
      longitude: 111.98098,
      latitude: 38.0873234,
      radius: 30000
    }, {
      id: 'c01',
      longitude: 119.98098,
      latitude: 32.0873234,
      radius: 100000
    }],
    heatmap: {
      data: [
        { "lng": 121.173004, "lat": 30.280188, "count": 80 },
        { "lng": 120.473004, "lat": 31.480188, "count": 34 },
        { "lng": 122.373004, "lat": 28.280188, "count": 19 },
        { "lng": 123.173004, "lat": 30.255088, "count": 42 },
        { "lng": 119.173004, "lat": 28.280188, "count": 32 },
        { "lng": 117.173004, "lat": 29.280188, "count": 98 },
        { "lng": 120.223004, "lat": 31.280188, "count": 53 },
        { "lng": 120.453004, "lat": 29.280188, "count": 25 },
        { "lng": 118.173004, "lat": 32.280188, "count": 10 }
      ],
      //lng 经度
      //lat 纬度
      //count 权重值
      config: {
        radius: 50,
        //热力图半径,默认20
        visible: true,
        //控制热力图显隐,默认true 
        max: 100,
        //最大权重值 默认100
        gradient: {
          0: 'rgb(102,255, 0)',
          .5: 'rgb(255,170,0)',
          1: ' #FF33FF'
        },
        //渐变区间 (ui没有定就不要设置该字段)
        opacity: 0.5,
        //透明度
      }
    },
    isOpenTrafficInfo: false,
    setVisiblePoints: false,
    mapVisiblePoints: '',
    setCenter: false,
    mapCenter: '',
    setZoomLevel: false,
    mapZoomLevel: '',
    mapCluster: '',
    setCluster: false,
    boundaryName: ['苏州'],
    isRangingTool: false,
    mapDraw: '',
    isDraw: false,
    isCloseDraw: false,
    isClearAll: false,
    mapRemove: [],
    isRemove: false,
    editGraphicId: '',
    isDoEdit: false,
    isEndEdit: false,
    isSetAreaRestriction: false,
    areaRestriction: [[115.345746, 39.488275], [117.455121, 40.322595]],
    isClearAreaRestriction: false,
    inputVal: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {

  },

  reducers: {
  }

}