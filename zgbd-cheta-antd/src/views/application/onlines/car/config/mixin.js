import {getDataItem} from '@views/application/onlines/car/config/data.js'
import indexData from '@views/application/onlines/car/config/data.json'
import Draggable from 'vuedraggable';

export default {
  components : {
    //页面展示
    // 加油管理
    OilCar: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/OilCar'], resolve),
    Navigation: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/Navigation'], resolve),
    Select: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/Select'], resolve),
    Ring: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/Ring'], resolve),
    OilPrice: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/OilPrice'], resolve),
    NewlyAdded: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/NewlyAdded'], resolve),
    Public: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/Public'], resolve),
    OilPriceBlock: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/OilPriceBlock'], resolve),
    Curve: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/Curve'], resolve),
    CurveWork: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/CurveWork'], resolve),
    DatePicker: (resolve) => require(['@/views/application/onlines/car/component/oiling/modules/DatePicker'], resolve),


    //多样化
    DiversifTabs: (resolve) => require(['@/views/application/onlines/car/component/diversification/DiversifTabs'], resolve),
    //表单
    FormElement: (resolve) => require(['@/views/application/onlines/car/component/form/FormElement'], resolve),

    //按钮
    Search: (resolve) => require(['@/views/application/onlines/car/component/list/Search'], resolve),
    ButtonOne: (resolve) => require(['@/views/application/onlines/car/component/list/ButtonOne'], resolve),
    ButtonTwo: (resolve) => require(['@/views/application/onlines/car/component/list/ButtonTwo'], resolve),
    Blank: (resolve) => require(['@/views/application/onlines/car/component/list/Blank'], resolve),


    //保险
    ViolationSonOne: (resolve) => require(['@/views/application/onlines/car/component/violation/modules/ViolationSonOne'], resolve),
    ViolationSonTwo: (resolve) => require(['@/views/application/onlines/car/component/violation/modules/ViolationSonTwo'], resolve),
    ViolationSonThree: (resolve) => require(['@/views/application/onlines/car/component/violation/modules/ViolationSonThree'], resolve),
    ViolationSonFour: (resolve) => require(['@/views/application/onlines/car/component/violation/modules/ViolationSonFour'], resolve),

    //保险
    InsuranceSonThree: (resolve) => require(['@/views/application/onlines/car/component/insurance/InsuranceSonThree'], resolve),

    //保养
    MaintenanceSonOne: (resolve) => require(['@/views/application/onlines/car/component/maintenance/modules/MaintenanceSonOne'], resolve),
    MaintenanceSonTwo: (resolve) => require(['@/views/application/onlines/car/component/maintenance/modules/MaintenanceSonTwo'], resolve),
    MaintenanceSonThree: (resolve) => require(['@/views/application/onlines/car/component/maintenance/modules/MaintenanceSonThree'], resolve),
    //MaintenanceSonFour: (resolve) => require(['@/views/application/onlines/car/component/maintenance/modules/MaintenanceSonFour'], resolve),
    MaintenanceSonFive: (resolve) => require(['@/views/application/onlines/car/component/maintenance/modules/MaintenanceSonFive'], resolve),
    MaintenanceTableThree: (resolve) => require(['@/views/application/onlines/car/component/maintenance/modules/MaintenanceTableThree'], resolve),
    MaintenanceSonSix: (resolve) => require(['@/views/application/onlines/car/component/maintenance/modules/MaintenanceSonSix'], resolve),
    MaintenanceTop: (resolve) => require(['@/views/application/onlines/car/component/maintenance/modules/MaintenanceTop'], resolve),


    //卡片
    Card: (resolve) => require(['@/views/application/onlines/car/component/Card'], resolve),
    CardOne: (resolve) => require(['@/views/application/onlines/car/component/CardOne'], resolve),

    //列表
    ListRepair: (resolve) => require(['@/views/application/onlines/car/component/list/ListRepair'], resolve),
    List: (resolve) => require(['@/views/application/onlines/car/component/list/List'], resolve),
    ListModif: (resolve) => require(['@/views/application/onlines/car/component/list/ListModif'], resolve),
    ListOne: (resolve) => require(['@/views/application/onlines/car/component/list/ListOne'], resolve),
    ListTwo: (resolve) => require(['@/views/application/onlines/car/component/list/ListTwo'], resolve),
    ListThree: (resolve) => require(['@/views/application/onlines/car/component/list/ListThree'], resolve),
    // 数据展示

    // 加油管理
    OilCarDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/OilCarDate'], resolve),
    NavigationDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/NavigationDate'], resolve),
    SelectDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/SelectDate'], resolve),
    RingDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/RingDate'], resolve),
    OilPriceDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/OilPriceDate'], resolve),
    NewlyAddedDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/NewlyAddedDate'], resolve),
    PublicDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/PublicDate'], resolve),
    OilPriceBlockDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/OilPriceBlockDate'], resolve),
    CurveDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/CurveDate'], resolve),
    CurveWorkDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/CurveWorkDate'], resolve),
    DatePickerDate: (resolve) => require(['@/views/application/onlines/car/data/OilingDate/modules/DatePickerDate'], resolve),

    //多样化
    DiversifTabsData: (resolve) => require(['@/views/application/onlines/car/data/diversification/DiversifTabsData'], resolve),

    //表单
    FormElementData: (resolve) => require(['@/views/application/onlines/car/data/form/FormElementData'], resolve),

    //按钮
    SearchData: (resolve) => require(['@/views/application/onlines/car/data/list/SearchData'], resolve),
    ButtonOneData: (resolve) => require(['@/views/application/onlines/car/data/list/ButtonOneData'], resolve),
    ButtonTwoData: (resolve) => require(['@/views/application/onlines/car/data/list/ButtonTwoData'], resolve),
    BlankDate: (resolve) => require(['@/views/application/onlines/car/data/list/BlankDate'], resolve),

    //车审
    ViolationSonOneData: (resolve) => require(['@/views/application/onlines/car/data/violation/ViolationSonOneData'], resolve),
    ViolationSonTwoData: (resolve) => require(['@/views/application/onlines/car/data/violation/ViolationSonTwoData'], resolve),
    ViolationSonThreeData: (resolve) => require(['@/views/application/onlines/car/data/violation/ViolationSonThreeData'], resolve),
    ViolationSonFourData: (resolve) => require(['@/views/application/onlines/car/data/violation/ViolationSonFourData'], resolve),

    //保险
    InsuranceSonThreeData: (resolve) => require(['@/views/application/onlines/car/data/insurance/InsuranceSonThreeData'], resolve),

    //保养数据
    MaintenanceSonOneData: (resolve) => require(['@/views/application/onlines/car/data/maintenance/MaintenanceSonOneData'], resolve),
    MaintenanceSonTwoData: (resolve) => require(['@/views/application/onlines/car/data/maintenance/MaintenanceSonTwoData'], resolve),
    MaintenanceSonThreeData: (resolve) => require(['@/views/application/onlines/car/data/maintenance/MaintenanceSonThreeData'], resolve),
    MaintenanceSonFiveData: (resolve) => require(['@/views/application/onlines/car/data/maintenance/MaintenanceSonFiveData'], resolve),
    MaintenanceTableThreeData: (resolve) => require(['@/views/application/onlines/car/data/maintenance/MaintenanceTableThreeData'], resolve),
    MaintenanceSonSixData: (resolve) => require(['@/views/application/onlines/car/data/maintenance/MaintenanceSonSixData'], resolve),
    MaintenanceTopData: (resolve) => require(['@/views/application/onlines/car/data/maintenance/MaintenanceTopData'], resolve),

    //卡片
    CardData: (resolve) => require(['@/views/application/onlines/car/data/CardData'], resolve),
    CardOneData: (resolve) => require(['@/views/application/onlines/car/data/CardOneData'], resolve),

    //列表
     ListRepairData: (resolve) => require(['@/views/application/onlines/car/data/list/ListRepairData'], resolve),
    ListData: (resolve) => require(['@/views/application/onlines/car/data/list/ListData'], resolve),
    ListModifData: (resolve) => require(['@/views/application/onlines/car/data/list/ListModifData'], resolve),
    ListOneData: (resolve) => require(['@/views/application/onlines/car/data/list/ListOneData'], resolve),
    ListTwoData: (resolve) => require(['@/views/application/onlines/car/data/list/ListTwoData'], resolve),
    ListThreeData: (resolve) => require(['@/views/application/onlines/car/data/list/ListThreeData'], resolve),
    Draggable: Draggable
  },
  getData: getDataItem,
  data: indexData
}