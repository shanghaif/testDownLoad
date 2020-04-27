import {getDataItem} from '@views/application/onlines/element/config/data.js'
import indexData from '@views/application/onlines/element/config/data.json'

export default {
  components : {
    // 数据展示
    TableA: (resolve) => require(['@views/application/onlines/element/component/TableA'], resolve),

    ComponentA: (resolve) => require(['@views/application/onlines/element/component/AnalysisTop'], resolve),

    ComponentC: (resolve) => require(['@views/application/onlines/element/component/WorkplaceMiddle'], resolve),

    Bar: (resolve) => require(['@views/application/onlines/element/component/modules/Bar'], resolve),
    Pie: (resolve) => require(['@views/application/onlines/element/component/modules/Pie'], resolve),

    Bar2: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (2)'], resolve),
    Bar3: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (3)'], resolve),
    Bar4: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (4)'], resolve),
    Bar5: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (5)'], resolve),
    Bar6: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (6)'], resolve),
    Bar7: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (7)'], resolve),
    Bar8: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (8)'], resolve),
    Bar9: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (9)'], resolve),
    Bar10: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (10)'], resolve),
    Bar11: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (11)'], resolve),
    Bar12: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (12)'], resolve),
    Bar13: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (13)'], resolve),
    Bar14: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (14)'], resolve),
    Bar15: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (15)'], resolve),
    Bar16: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (16)'], resolve),
    Bar17: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (17)'], resolve),
    Bar18: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (18)'], resolve),
    Bar19: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (19)'], resolve),
    Bar20: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (20)'], resolve),
    Bar21: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (21)'], resolve),
    Bar22: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (22)'], resolve),
    Bar23: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (23)'], resolve),
    Bar24: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (24)'], resolve),
    Bar25: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (25)'], resolve),
    Bar26: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (26)'], resolve),
    Bar27: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (27)'], resolve),
    Bar28: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (28)'], resolve),
    Bar29: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (29)'], resolve),
    Bar30: (resolve) => require(['@views/application/onlines/element/component/modules/bar/Bar (30)'], resolve),
    Table: (resolve) => require(['@views/application/onlines/element/component/Table'], resolve),

    Dictionary: (resolve) => require(['@views/application/system/setting/dictionary/Dictionary'], resolve),

    // table
    TableData: (resolve) => require(['@views/application/onlines/element/data/TableData'], resolve),

    AnalysisTopData: (resolve) => require(['@views/application/onlines/element/data/AnalysisTopData'], resolve)
  },
  getData: getDataItem,
  data: indexData
}