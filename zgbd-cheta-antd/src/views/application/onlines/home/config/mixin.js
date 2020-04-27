import {getDataItem} from '@views/application/onlines/home/config/data.js'
import indexData from '@views/application/onlines/home/config/data.json'

export default {
  components : {
    TopTopTopData: (resolve) => require(['@views/application/onlines/home/data/TopTopTopData'], resolve),
    TopTopBodyData: (resolve) => require(['@views/application/onlines/home/data/TopTopBodyData'], resolve),
    TopTopFootData: (resolve) => require(['@views/application/onlines/home/data/TopTopFootData'], resolve),


    TopBodyTopData: (resolve) => require(['@views/application/onlines/home/data/TopBodyTopData'], resolve),
    TopBodyBodyData: (resolve) => require(['@views/application/onlines/home/data/TopBodyBodyData'], resolve),
    TopBodyFootData: (resolve) => require(['@views/application/onlines/home/data/TopBodyFootData'], resolve),
    TopBodyFootSonThreeData: (resolve) => require(['@views/application/onlines/home/data/TopBodyFootSonThreeData'], resolve),

    TopFootTopData: (resolve) => require(['@views/application/onlines/home/data/TopFootTopData'], resolve),
    TopFootBodyData: (resolve) => require(['@views/application/onlines/home/data/TopFootBodyData'], resolve),
    TopFootFootData: (resolve) => require(['@views/application/onlines/home/data/TopFootFootData'], resolve),

    TopTopTop: (resolve) => require(['@views/application/onlines/home/component/modules/TopTopTop'], resolve),
    TopTopBody: (resolve) => require(['@views/application/onlines/home/component/modules/TopTopBody'], resolve),
    TopTopFoot: (resolve) => require(['@views/application/onlines/home/component/modules/TopTopFoot'], resolve),
    //TopBodyBody: (resolve) => require(['@/views/home/modules/TopBodyBody'], resolve),

    //TopBodyBody
    TopBodyTop: (resolve) => require(['@views/application/onlines/home/component/modules/TopBodyTop'], resolve),
    TopBodyBody: (resolve) => require(['@views/application/onlines/home/component/modules/TopBodyBody'], resolve),
    TopBodyFoot: (resolve) => require(['@views/application/onlines/home/component/modules/TopBodyFoot'], resolve),
    TopBodyFootSonThree: (resolve) => require(['@views/application/onlines/home/component/modules/subcomponents/TopBodyFootSonThree'], resolve),

    //TopFoot
    TopFootTop: (resolve) => require(['@views/application/onlines/home/component/modules/TopFootTop'], resolve),
    TopFootBody: (resolve) => require(['@views/application/onlines/home/component/modules/TopFootBody'], resolve),
    TopFootFoot: (resolve) => require(['@views/application/onlines/home/component/modules/TopFootFoot'], resolve)
  },
  getData: getDataItem,
  data: indexData
}