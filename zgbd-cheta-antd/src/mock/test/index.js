import Mock from 'mockjs'
const data = {
  total: 624,
  rows: [
    {
      id: "32bfe40affffffc95a7e3891b95a2a37",
      terminalNO: "14532451052",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069640",
      registrationNO: "粤A780HN",
      vehicletype: "物流车"
    },
    {
      id: "d77c2bd1ffffffc976ce728629826a1f",
      terminalNO: "14532451030",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440369147821",
      registrationNO: "粤A7635R",
      vehicletype: "物流车"
    },
    {
      id: "d78172adffffffc976ce728664b50576",
      terminalNO: "14532451037",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440369147820",
      registrationNO: "粤A65708",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0007",
      terminalNO: "14532982617",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089553",
      registrationNO: "鲁B8S70H",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0008",
      terminalNO: "14532982614",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089737",
      registrationNO: "粤A594HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0013",
      terminalNO: "14532982581",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088825",
      registrationNO: "鲁B03FK2",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0014",
      terminalNO: "14532732380",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089577",
      registrationNO: "鲁B0S11X",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0015",
      terminalNO: "13500011704",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089734",
      registrationNO: "粤RBE685",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0016",
      terminalNO: "14532725372",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089576",
      registrationNO: "粤A669SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0017",
      terminalNO: "14532982569",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088832",
      registrationNO: "粤A275HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0018",
      terminalNO: "14532982559",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088804",
      registrationNO: "粤A600SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0019",
      terminalNO: "14532982577",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088829",
      registrationNO: "粤A843HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0041",
      terminalNO: "14532623496",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089702",
      registrationNO: "粤AK7152",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0064",
      terminalNO: "14532982553",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089648",
      registrationNO: "粤A5CN94",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0111",
      terminalNO: "13500011140",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089612",
      registrationNO: "粤A697HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0112",
      terminalNO: "14532623407",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088818",
      registrationNO: "粤B1J7B0",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0115",
      terminalNO: "14532982629",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089730",
      registrationNO: "粤AU0M67",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0116",
      terminalNO: "14532982625",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089559",
      registrationNO: "粤AU4M84",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0117",
      terminalNO: "14532725331",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089575",
      registrationNO: "粤A664HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0138",
      terminalNO: "14532725377",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673669",
      registrationNO: "粤ACT431",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0020",
      terminalNO: "14532725363",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089542",
      registrationNO: "粤A514TC",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0022",
      terminalNO: "13500011718",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673609",
      registrationNO: "粤A637HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0024",
      terminalNO: "13500011728",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673606",
      registrationNO: "粤AP7E84",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0025",
      terminalNO: "14532732399",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673611",
      registrationNO: "粤A686SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0026",
      terminalNO: "14532623524",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673612",
      registrationNO: "粤AM6V14",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0028",
      terminalNO: "14532732381",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673610",
      registrationNO: "粤A461JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0029",
      terminalNO: "14532725364",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673648",
      registrationNO: "粤A346HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0030",
      terminalNO: "14532725337",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673647",
      registrationNO: "粤A425JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0032",
      terminalNO: "14532732359",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673608",
      registrationNO: "粤A471JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0033",
      terminalNO: "14532725369",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673649",
      registrationNO: "粤A184HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0034",
      terminalNO: "14532732382",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089579",
      registrationNO: "粤A543JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0035",
      terminalNO: "14532623393",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089605",
      registrationNO: "粤A684HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0036",
      terminalNO: "13500011699",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089566",
      registrationNO: "粤AN6Y94",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0037",
      terminalNO: "14532623432",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089572",
      registrationNO: "鲁B25FH7",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0038",
      terminalNO: "14532982552",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089550",
      registrationNO: "粤AU4L51",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0069",
      terminalNO: "14532725339",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089617",
      registrationNO: "粤A3MP90",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0096",
      terminalNO: "14532623399",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089567",
      registrationNO: "粤A631SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az003",
      terminalNO: "14533149209",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673577",
      registrationNO: "粤A427HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0075",
      terminalNO: "13500011406",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673617",
      registrationNO: "鲁B9T32E",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0078",
      terminalNO: "14533154789",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089647",
      registrationNO: "粤AQ0E63",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0080",
      terminalNO: "14533154673",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673615",
      registrationNO: "粤A488HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0083",
      terminalNO: "14532623303",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673616",
      registrationNO: "粤AU2M43",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0084",
      terminalNO: "13500011137",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089561",
      registrationNO: "粤AU0M84",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0086",
      terminalNO: "14533154717",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089557",
      registrationNO: "粤AU4M64",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0088",
      terminalNO: "14532982643",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089562",
      registrationNO: "粤A572JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0091",
      terminalNO: "13500011313",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089551",
      registrationNO: "粤AP5S64",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az031",
      terminalNO: "14532725332",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089507",
      registrationNO: "粤AP9W46",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az032",
      terminalNO: "14532725384",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673678",
      registrationNO: "粤A472JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az033",
      terminalNO: "13500011161",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089505",
      registrationNO: "粤AN5K44",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az038",
      terminalNO: "14532725358",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089606",
      registrationNO: "粤A688SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az039",
      terminalNO: "14532725416",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088817",
      registrationNO: "粤AN6Y75",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az040",
      terminalNO: "14532725425",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089752",
      registrationNO: "粤RSM879",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az042",
      terminalNO: "13500011558",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673603",
      registrationNO: "粤AU4M19",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az043",
      terminalNO: "14532982583",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088803",
      registrationNO: "粤A520JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az044",
      terminalNO: "14532623434",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088830",
      registrationNO: "粤A533UV",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az030",
      terminalNO: "14532725427",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089639",
      registrationNO: "粤A342JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az036",
      terminalNO: "13500011129",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673679",
      registrationNO: "粤A548HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy004",
      terminalNO: "14532269213",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675053",
      registrationNO: "粤A647HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy005",
      terminalNO: "14532269266",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675055",
      registrationNO: "粤A443JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy006",
      terminalNO: "14532269206",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675092",
      registrationNO: "粤A573HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy007",
      terminalNO: "14532269270",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089736",
      registrationNO: "粤AU3M06",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy008",
      terminalNO: "14532725357",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089629",
      registrationNO: "粤A731JJ",
      vehicletype: "物流车"
    },
    {
      id: "d94ae065ffffffc93f047426da21d53a",
      terminalNO: "14533624559",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673425",
      registrationNO: "粤A939GG",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy023",
      terminalNO: "14532982613",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089578",
      registrationNO: "鲁B0S78X",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy025",
      terminalNO: "14532623367",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098081423",
      registrationNO: "鲁B05LB9",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy027",
      terminalNO: "14532982602",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673614",
      registrationNO: "粤AN6Y27",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy028",
      terminalNO: "14532982585",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673667",
      registrationNO: "鲁B25NX8",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az041",
      terminalNO: "13500011582",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089523",
      registrationNO: "粤A635HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy060",
      terminalNO: "14532725414",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673442",
      registrationNO: "粤AR2B94",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy062",
      terminalNO: "14532725389",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673427",
      registrationNO: "粤A470JJ",
      vehicletype: "物流车"
    },
    {
      id: "dg15462",
      terminalNO: "14532623421",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673658",
      registrationNO: "粤A465HN",
      vehicletype: "物流车"
    },
    {
      id: "32dc299affffffc95a7e389141d3d8ba",
      terminalNO: "14532725365",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089458",
      registrationNO: "粤BZ59X2",
      vehicletype: "物流车"
    },
    {
      id: "6e60c9b8ffffffc916136da1fed3c4c7",
      terminalNO: "14532725366",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673575",
      registrationNO: "粤AK0921",
      vehicletype: "物流车"
    },
    {
      id: "72b809a7ffffffc940bc74f11729d75f",
      terminalNO: "013500011689",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673393",
      registrationNO: "粤A634HN",
      vehicletype: ""
    },
    {
      id: "72b809a7ffffffc940bc74f13d3c2fda",
      terminalNO: "013500011312",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088811",
      registrationNO: "粤A473JJ",
      vehicletype: ""
    },
    {
      id: "72b809a7ffffffc940bc74f150341f76",
      terminalNO: "013500011412",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089569",
      registrationNO: "粤A540HN",
      vehicletype: ""
    },
    {
      id: "72b809a7ffffffc940bc74f16fcd41eb",
      terminalNO: "014532269281",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675079",
      registrationNO: "粤A475HN",
      vehicletype: ""
    },
    {
      id: "72b809a7ffffffc940bc74f1883d56c2",
      terminalNO: "013500011212",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673646",
      registrationNO: "粤A613HN",
      vehicletype: ""
    },
    {
      id: "72b809a7ffffffc940bc74f1c8ae57db",
      terminalNO: "013500011103",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675175",
      registrationNO: "粤A276HN",
      vehicletype: ""
    },
    {
      id: "72b809a7ffffffc940bc74f1d8b21bbf",
      terminalNO: "014532623506",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087367",
      registrationNO: "粤AM9V24",
      vehicletype: ""
    },
    {
      id: "72b809a7ffffffc940bc74f1e86efca5",
      terminalNO: "013500011739",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673605",
      registrationNO: "粤AP433S",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f109125d16",
      terminalNO: "013500011004",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087720",
      registrationNO: "粤A716HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f110f5a422",
      terminalNO: "014532623488",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673651",
      registrationNO: "粤A340HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1193d6609",
      terminalNO: "013500011261",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089716",
      registrationNO: "粤A490HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f11e35b2cd",
      terminalNO: "014532623392",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087694",
      registrationNO: "粤A751HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f12020049b",
      terminalNO: "014532623378",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089615",
      registrationNO: "粤A413HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1299c526a",
      terminalNO: "013500011244",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089627",
      registrationNO: "粤A551HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f143e70674",
      terminalNO: "014532269226",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675068",
      registrationNO: "粤A390HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f144d904cc",
      terminalNO: "013500011333",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089601",
      registrationNO: "粤AF9115",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f16aec4f9c",
      terminalNO: "014532623369",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087670",
      registrationNO: "粤A502HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f16cd8a7a2",
      terminalNO: "014532725402",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089700",
      registrationNO: "粤A762HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f16d208971",
      terminalNO: "014532623498",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087697",
      registrationNO: "粤A415HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1747276a6",
      terminalNO: "013500011736",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089725",
      registrationNO: "粤A542HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f178683a14",
      terminalNO: "014532623482",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087678",
      registrationNO: "粤A987GG",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f18952d3a5",
      terminalNO: "014532623511",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087357",
      registrationNO: "粤AQ2B94",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f19157e08d",
      terminalNO: "014532725409",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673444",
      registrationNO: "粤A319HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f194f0118a",
      terminalNO: "014532623407",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088818",
      registrationNO: "粤A4YV10",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f19a46137f",
      terminalNO: "013500011025",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673643",
      registrationNO: "粤A503HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1a6e94f77",
      terminalNO: "014532623441",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088791",
      registrationNO: "粤A458HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1cbc33a2e",
      terminalNO: "014532269270",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675039",
      registrationNO: "粤A486HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1ce54967c",
      terminalNO: "013500011705",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673602",
      registrationNO: "粤A205HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1cfd18824",
      terminalNO: "013500011668",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087369",
      registrationNO: "粤AN1F74",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1dac22b69",
      terminalNO: "013500011763",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087683",
      registrationNO: "粤A682SF",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1e1d91d72",
      terminalNO: "013500011734",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087370",
      registrationNO: "粤AN6K34",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1eab688d6",
      terminalNO: "014532623382",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089670",
      registrationNO: "粤A70327",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1ed29cc15",
      terminalNO: "014532288533",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823677071",
      registrationNO: "粤A202NS",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1f1f2a9c8",
      terminalNO: "014532623519",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087371",
      registrationNO: "粤AN6Y47",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1f57dbcb8",
      terminalNO: "013500011691",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673449",
      registrationNO: "粤PMT209",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1f65595dd",
      terminalNO: "013500011547",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673671",
      registrationNO: "粤A568HN",
      vehicletype: ""
    },
    {
      id: "72b809a8ffffffc940bc74f1ffab8949",
      terminalNO: "014532725342",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089723",
      registrationNO: "粤T29W82",
      vehicletype: ""
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0021",
      terminalNO: "13500011259",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089614",
      registrationNO: "粤AZ1R46",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0045",
      terminalNO: "14532732384",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089524",
      registrationNO: "粤A724TC",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0049",
      terminalNO: "13500011218",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089580",
      registrationNO: "粤A527HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0057",
      terminalNO: "14532725352",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089582",
      registrationNO: "粤AQ9F64",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0060",
      terminalNO: "14532623443",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089584",
      registrationNO: "粤A6CT94",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0061",
      terminalNO: "14532725349",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673670",
      registrationNO: "粤BP64X2",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0089",
      terminalNO: "014532623273",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01440098089515",
      registrationNO: "粤D22V93",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0114",
      terminalNO: "013500010634",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01440098089594",
      registrationNO: "粤FZE099",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0127",
      terminalNO: "014532623358",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01440098089632",
      registrationNO: "粤A431HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0129",
      terminalNO: "014532269219",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01064823675089",
      registrationNO: "粤SX3M25",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0140",
      terminalNO: "013500011201",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01440098089503",
      registrationNO: "粤A511HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0141",
      terminalNO: "014532725394",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01064823675151",
      registrationNO: "粤A467JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0145",
      terminalNO: "14532982573",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673394",
      registrationNO: "粤A699SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0146",
      terminalNO: "14532623283",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673593",
      registrationNO: "粤AF35Z0",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0147",
      terminalNO: "014532623376",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01064823673599",
      registrationNO: "粤A334HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0148",
      terminalNO: "14532732862",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673595",
      registrationNO: "粤A302MR",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0150",
      terminalNO: "14532623437",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673652",
      registrationNO: "粤A537JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0151",
      terminalNO: "14532623466",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673594",
      registrationNO: "粤A2LA57",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0153",
      terminalNO: "14532623395",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673586",
      registrationNO: "粤A429HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0154",
      terminalNO: "14532732361",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673576",
      registrationNO: "粤A714HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0162",
      terminalNO: "014532982633",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01440098089589",
      registrationNO: "粤BW55C7",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0163",
      terminalNO: "014532623446",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01064823673592",
      registrationNO: "粤A661SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0164",
      terminalNO: "14532623517",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673587",
      registrationNO: "粤A996GG",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0166",
      terminalNO: "14532623386",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673582",
      registrationNO: "粤AS8J74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0170",
      terminalNO: "14532623439",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089599",
      registrationNO: "粤AY1L74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0173",
      terminalNO: "14532623341",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673581",
      registrationNO: "粤A479JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0178",
      terminalNO: "14532732372",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673583",
      registrationNO: "粤AK1848",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0179",
      terminalNO: "14532623381",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673389",
      registrationNO: "粤AL6451",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d24",
      terminalNO: "014532725361",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01440098089640",
      registrationNO: "粤A356HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay022",
      terminalNO: "14532623363",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089532",
      registrationNO: "粤AU3M57",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay023",
      terminalNO: "14532623424",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673439",
      registrationNO: "粤A2FL72",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az002",
      terminalNO: "14532623432",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673589",
      registrationNO: "粤A0JV47",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az004",
      terminalNO: "14532623377",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089624",
      registrationNO: "粤A4CN34",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az005",
      terminalNO: "14532623520",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673392",
      registrationNO: "粤AZ9X54",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az006",
      terminalNO: "14532623420",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089513",
      registrationNO: "粤A617SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az007",
      terminalNO: "14532623372",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673657",
      registrationNO: "粤A0JV72",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az010",
      terminalNO: "014532623494",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01440098089623",
      registrationNO: "粤A630SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az011",
      terminalNO: "14532623371",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673675",
      registrationNO: "粤A626SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az012",
      terminalNO: "14532732387",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673584",
      registrationNO: "粤AF45Z6",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az016",
      terminalNO: "014532623354",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01064823673680",
      registrationNO: "粤A5JV33",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az018",
      terminalNO: "13500011299",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673382",
      registrationNO: "粤A078ST",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az019",
      terminalNO: "14532623422",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673387",
      registrationNO: "粤A7DL44",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az021",
      terminalNO: "014532623431",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01064823673585",
      registrationNO: "粤AL6441",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az025",
      terminalNO: "014532623535",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01064823673662",
      registrationNO: "粤AN0242",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az026",
      terminalNO: "14532269225",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675082",
      registrationNO: "粤A704HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy009",
      terminalNO: "14532269221",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675080",
      registrationNO: "粤A627HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy039",
      terminalNO: "14532288599",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675000",
      registrationNO: "粤SZ060Y",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd54",
      terminalNO: "13500011360",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089468",
      registrationNO: "粤A6BE20",
      vehicletype: "物流车"
    },
    {
      id: "d93eaedaffffffc93f04742612cf811d",
      terminalNO: "014532623521",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "01064823673432",
      registrationNO: "粤AL4267",
      vehicletype: "物流车"
    },
    {
      id: "dg15461",
      terminalNO: "14532623391",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673390",
      registrationNO: "粤A5CS86",
      vehicletype: "物流车"
    },
    {
      id: "31b4fb6fffffffc95a7e3891bfeffb93",
      terminalNO: "14532623527",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087657",
      registrationNO: "粤AU4L40",
      vehicletype: "物流车"
    },
    {
      id: "320a2646ffffffc95a7e38912d555a6a",
      terminalNO: "14532623509",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087665",
      registrationNO: "粤A381HN",
      vehicletype: "物流车"
    },
    {
      id: "334652e3ffffffc95a7e38912ecd0564",
      terminalNO: "14532623531",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087686",
      registrationNO: "粤A547JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay007",
      terminalNO: "14532623530",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087715",
      registrationNO: "粤A405JJ",
      vehicletype: "物流车"
    },
    {
      id: "232eb53cffffffc95a7e389110839e52",
      terminalNO: "14532982592",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089476",
      registrationNO: "粤A9T0D0",
      vehicletype: "物流车"
    },
    {
      id: "23525163ffffffc95a7e38916de4730f",
      terminalNO: "14532982594",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088779",
      registrationNO: "粤A1D3T6",
      vehicletype: "物流车"
    },
    {
      id: "23582eb8ffffffc95a7e3891508296f8",
      terminalNO: "14532982610",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089482",
      registrationNO: "粤A375HN",
      vehicletype: "物流车"
    },
    {
      id: "237351f1ffffffc95a7e38916730c178",
      terminalNO: "14532623392",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089478",
      registrationNO: "粤A475JJ",
      vehicletype: "物流车"
    },
    {
      id: "229a4b1affffffc95a7e389194266286",
      terminalNO: "13500011776",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088778",
      registrationNO: "粤A478JJ",
      vehicletype: "物流车"
    },
    {
      id: "23594122ffffffc95a7e3891418e3f54",
      terminalNO: "13500011627",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089751",
      registrationNO: "粤AU4M34",
      vehicletype: "物流车"
    },
    {
      id: "2c6723feffffffc95a7e3891d8354dd4",
      terminalNO: "14532623462",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089479",
      registrationNO: "粤AP8E64",
      vehicletype: "物流车"
    },
    {
      id: "73161ec9ffffffc916136da17edd9ed7",
      terminalNO: "14532725361",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087651",
      registrationNO: "粤A204JJ",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd11",
      terminalNO: "14532623366",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089485",
      registrationNO: "粤AN6K64",
      vehicletype: "物流车"
    },
    {
      id: "2c64fe4fffffffc95a7e38917af8d270",
      terminalNO: "14532623364",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089481",
      registrationNO: "粤A597HN",
      vehicletype: "物流车"
    },
    {
      id: "3207e437ffffffc95a7e3891ce4a570c",
      terminalNO: "14532732365",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087658",
      registrationNO: "粤AN9K06",
      vehicletype: "物流车"
    },
    {
      id: "7314f878ffffffc916136da1a94366ce",
      terminalNO: "14532623474",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089490",
      registrationNO: "粤A456JJ",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd19",
      terminalNO: "14532623495",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089756",
      registrationNO: "粤A441JJ",
      vehicletype: "物流车"
    },
    {
      id: "32a5ee16ffffffc95a7e3891ca93abc0",
      terminalNO: "14532623433",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087721",
      registrationNO: "粤A458JJ",
      vehicletype: "物流车"
    },
    {
      id: "32aff6faffffffc95a7e38919538e464",
      terminalNO: "14532623528",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087698",
      registrationNO: "粤A530JJ",
      vehicletype: "物流车"
    },
    {
      id: "66dffd33ffffffc920dbc57f2f475550",
      terminalNO: "14532623493",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087723",
      registrationNO: "粤A501JJ",
      vehicletype: "物流车"
    },
    {
      id: "731bbbf0ffffffc916136da1d709a789",
      terminalNO: "14532725390",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087350",
      registrationNO: "粤A155MS",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay006",
      terminalNO: "14532623536",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087722",
      registrationNO: "粤A7CT04",
      vehicletype: "物流车"
    },
    {
      id: "31bc0aadffffffc95a7e38915299b6f6",
      terminalNO: "14532623515",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087717",
      registrationNO: "粤A532JJ",
      vehicletype: "物流车"
    },
    {
      id: "320102c0ffffffc95a7e3891cf8cd92b",
      terminalNO: "14532623430",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087671",
      registrationNO: "粤A540JJ",
      vehicletype: "物流车"
    },
    {
      id: "32a72974ffffffc95a7e38914ee6635a",
      terminalNO: "14532623440",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087716",
      registrationNO: "粤AN2A74",
      vehicletype: "物流车"
    },
    {
      id: "284ee872ffffffc95a7e38916e988190",
      terminalNO: "14532623513",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087360",
      registrationNO: "粤A75209",
      vehicletype: "物流车"
    },
    {
      id: "2cd772feffffffc95a7e38911e345151",
      terminalNO: "14532623471",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069637",
      registrationNO: "粤A7M9K9",
      vehicletype: "物流车"
    },
    {
      id: "2d9f774fffffffc95a7e3891b89af180",
      terminalNO: "14532623454",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087668",
      registrationNO: "粤A364JE",
      vehicletype: "物流车"
    },
    {
      id: "2daf5f10ffffffc95a7e38919a56400c",
      terminalNO: "14532725350",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087361",
      registrationNO: "粤AU699C",
      vehicletype: "物流车"
    },
    {
      id: "2e19d321ffffffc95a7e3891539b5274",
      terminalNO: "14532623537",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087365",
      registrationNO: "粤AF9160",
      vehicletype: "物流车"
    },
    {
      id: "2e31e188ffffffc95a7e3891f61f3ff7",
      terminalNO: "14532623489",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087659",
      registrationNO: "粤AS7E04",
      vehicletype: "物流车"
    },
    {
      id: "31bb3d6affffffc95a7e38918333f58d",
      terminalNO: "14532623525",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087649",
      registrationNO: "粤AK5646",
      vehicletype: "物流车"
    },
    {
      id: "31bccc18ffffffc95a7e389121750a81",
      terminalNO: "14532623526",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087362",
      registrationNO: "粤A502JE",
      vehicletype: "物流车"
    },
    {
      id: "31bd812fffffffc95a7e3891b83de0ef",
      terminalNO: "14532623518",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087359",
      registrationNO: "粤AU2L30",
      vehicletype: "物流车"
    },
    {
      id: "320c36a7ffffffc95a7e38913f68a260",
      terminalNO: "14532623444",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087666",
      registrationNO: "粤AU066B",
      vehicletype: "物流车"
    },
    {
      id: "326a6eebffffffc95a7e3891fa037deb",
      terminalNO: "14532732868",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087653",
      registrationNO: "粤A704RM",
      vehicletype: "物流车"
    },
    {
      id: "326f776dffffffc95a7e3891e87ec4e6",
      terminalNO: "14532623491",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087672",
      registrationNO: "粤AR9C14",
      vehicletype: "物流车"
    },
    {
      id: "32998067ffffffc95a7e389133e45ccc",
      terminalNO: "14532623463",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087692",
      registrationNO: "粤A505JE",
      vehicletype: "物流车"
    },
    {
      id: "3299bd41ffffffc95a7e38913032bbd5",
      terminalNO: "14532623480",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087661",
      registrationNO: "粤A485JE",
      vehicletype: "物流车"
    },
    {
      id: "32ab700cffffffc95a7e3891df162440",
      terminalNO: "14532623469",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087660",
      registrationNO: "粤A7CT47",
      vehicletype: "物流车"
    },
    {
      id: "32ac22c2ffffffc95a7e38917f21a4b5",
      terminalNO: "14532623481",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087650",
      registrationNO: "粤AF36Z2",
      vehicletype: "物流车"
    },
    {
      id: "32c1bc63ffffffc95a7e3891e56bc2ea",
      terminalNO: "14532732861",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087662",
      registrationNO: "粤AS2J11",
      vehicletype: "物流车"
    },
    {
      id: "32c310b7ffffffc95a7e3891902310e9",
      terminalNO: "14532732874",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087696",
      registrationNO: "粤AF38Z6",
      vehicletype: "物流车"
    },
    {
      id: "32d2491dffffffc95a7e3891a9bf7fca",
      terminalNO: "14532623486",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087663",
      registrationNO: "粤A704TC",
      vehicletype: "物流车"
    },
    {
      id: "32d29d38ffffffc95a7e3891e62ea78e",
      terminalNO: "14532623483",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087675",
      registrationNO: "粤A503JE",
      vehicletype: "物流车"
    },
    {
      id: "32e64fabffffffc95a7e389129f583d3",
      terminalNO: "14532732872",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087664",
      registrationNO: "粤AK0961",
      vehicletype: "物流车"
    },
    {
      id: "33548997ffffffc95a7e3891e73cc07a",
      terminalNO: "14532623413",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069641",
      registrationNO: "粤A8V2B9",
      vehicletype: "物流车"
    },
    {
      id: "6646d289ffffffc920dbc57fade2bd97",
      terminalNO: "14532623459",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069658",
      registrationNO: "粤A1S7M8",
      vehicletype: "物流车"
    },
    {
      id: "7316a493ffffffc916136da19bea1747",
      terminalNO: "14532623328",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087374",
      registrationNO: "粤AK0960",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0158",
      terminalNO: "14532623398",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673388",
      registrationNO: "粤A621HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0175",
      terminalNO: "14532623418",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673656",
      registrationNO: "粤AM7V46",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay003",
      terminalNO: "14532732351",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087373",
      registrationNO: "粤AK0968",
      vehicletype: "物流车"
    },
    {
      id: "284d2d93ffffffc95a7e389153f055e7",
      terminalNO: "14532623498",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088847",
      registrationNO: "粤A439JJ",
      vehicletype: "物流车"
    },
    {
      id: "320d9b09ffffffc95a7e38919f3bde8f",
      terminalNO: "14532623426",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087667",
      registrationNO: "粤AN2A54",
      vehicletype: "物流车"
    },
    {
      id: "55979af8ffffffc935305d0e4d1a07b9",
      terminalNO: "13500011185",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089610",
      registrationNO: "粤A342HN",
      vehicletype: "物流车"
    },
    {
      id: "8b11a70bffffffc9487f5cd3c71ca2a5",
      terminalNO: "14532623415",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087669",
      registrationNO: "粤A493JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay010",
      terminalNO: "13500011083",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089488",
      registrationNO: "粤AN8K42",
      vehicletype: "物流车"
    },
    {
      id: "d514b97fffffffc97e9ceb1f2d832d2b",
      terminalNO: "14532623416",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673630",
      registrationNO: "粤A479HN",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd17",
      terminalNO: "14532982598",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088794",
      registrationNO: "粤A527JJ",
      vehicletype: "物流车"
    },
    {
      id: "2395d469ffffffc95a7e38917fc7bf07",
      terminalNO: "14532623284",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087656",
      registrationNO: "粤A452JJ",
      vehicletype: "物流车"
    },
    {
      id: "2396a303ffffffc95a7e3891f89e4c9a",
      terminalNO: "13500011219",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087655",
      registrationNO: "粤A497JJ",
      vehicletype: "物流车"
    },
    {
      id: "d54fc635ffffffc97e9ceb1f0c9eb071",
      terminalNO: "14532623427",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089649",
      registrationNO: "粤A404HN",
      vehicletype: "物流车"
    },
    {
      id: "28ec3aa7ffffffc95a7e3891744a2009",
      terminalNO: "14532725417",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089486",
      registrationNO: "粤A436JJ",
      vehicletype: "物流车"
    },
    {
      id: "2c9d3c23ffffffc95a7e389193acd854",
      terminalNO: "14532623419",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089483",
      registrationNO: "粤AK1W74",
      vehicletype: "物流车"
    },
    {
      id: "32c28ffeffffffc95a7e3891a7522b59",
      terminalNO: "14532623374",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087693",
      registrationNO: "粤A047JJ",
      vehicletype: "物流车"
    },
    {
      id: "32d2daafffffffc95a7e38910ce9573c",
      terminalNO: "13500011194",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087695",
      registrationNO: "粤A451JJ",
      vehicletype: "物流车"
    },
    {
      id: "183f9cbeffffffc95a7e38914e22707a",
      terminalNO: "14532725344",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088780",
      registrationNO: "粤A301HN",
      vehicletype: "物流车"
    },
    {
      id: "232b72d4ffffffc95a7e3891ba46dea1",
      terminalNO: "14532725393",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089750",
      registrationNO: "粤AQ5F14",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd18",
      terminalNO: "14532725371",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088798",
      registrationNO: "粤A625JJ",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd32",
      terminalNO: "13500011149",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089755",
      registrationNO: "粤A680SF",
      vehicletype: "物流车"
    },
    {
      id: "dg15588",
      terminalNO: "14532725380",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673604",
      registrationNO: "粤A307HN",
      vehicletype: "物流车"
    },
    {
      id: "2355bdc9ffffffc95a7e389163e451d0",
      terminalNO: "14532982606",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087654",
      registrationNO: "粤AN4A62",
      vehicletype: "物流车"
    },
    {
      id: "d54f61a0ffffffc97e9ceb1fc47ccc51",
      terminalNO: "14532725354",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089643",
      registrationNO: "粤A350HN",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd10",
      terminalNO: "14532725378",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089484",
      registrationNO: "粤AM9V41",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd12",
      terminalNO: "14532623425",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088777",
      registrationNO: "粤A367HN",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd14",
      terminalNO: "14532725391",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089726",
      registrationNO: "粤AU4L41",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd15",
      terminalNO: "14532725348",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088795",
      registrationNO: "粤A910GG",
      vehicletype: "物流车"
    },
    {
      id: "23740776ffffffc95a7e3891330d251e",
      terminalNO: "14532725347",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089477",
      registrationNO: "粤A476JB",
      vehicletype: "物流车"
    },
    {
      id: "2c5326beffffffc95a7e3891d9329835",
      terminalNO: "13500011160",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089480",
      registrationNO: "粤A522JJ",
      vehicletype: "物流车"
    },
    {
      id: "31bb01f7ffffffc95a7e3891a1fe0460",
      terminalNO: "14532982616",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087699",
      registrationNO: "粤AR2T49",
      vehicletype: "物流车"
    },
    {
      id: "32ae2e31ffffffc95a7e389123e39ac3",
      terminalNO: "14532725385",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087691",
      registrationNO: "粤A379HN",
      vehicletype: "物流车"
    },
    {
      id: "2daaceebffffffc95a7e389127107598",
      terminalNO: "14532732362",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087363",
      registrationNO: "粤A8CT29",
      vehicletype: "物流车"
    },
    {
      id: "2dcad559ffffffc95a7e3891de0e7c14",
      terminalNO: "14532623406",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087356",
      registrationNO: "粤AP466H",
      vehicletype: "物流车"
    },
    {
      id: "2e3639abffffffc95a7e389117263823",
      terminalNO: "14532725359",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087368",
      registrationNO: "粤A541SB",
      vehicletype: "物流车"
    },
    {
      id: "31be4d39ffffffc95a7e389130ce4644",
      terminalNO: "14532623397",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087366",
      registrationNO: "粤A472JE",
      vehicletype: "物流车"
    },
    {
      id: "73178feeffffffc916136da1b8360875",
      terminalNO: "14532732394",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087358",
      registrationNO: "粤AK7177",
      vehicletype: "物流车"
    },
    {
      id: "869e2cf6ffffffc9703be4edc276003",
      terminalNO: "14532623488",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673654",
      registrationNO: "粤AS1J57",
      vehicletype: "物流车"
    },
    {
      id: "869e2cf6ffffffc9703be4edc276010",
      terminalNO: "14532982639",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673428",
      registrationNO: "粤AS2J36",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0097",
      terminalNO: "14532623449",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673655",
      registrationNO: "粤A9EM87",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0131",
      terminalNO: "14532623362",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673440",
      registrationNO: "粤AS2J27",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d01",
      terminalNO: "14532623340",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089528",
      registrationNO: "粤AS5J41",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d03",
      terminalNO: "14532982565",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087690",
      registrationNO: "粤AC7046",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay005",
      terminalNO: "14532623429",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087648",
      registrationNO: "粤A498JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az013",
      terminalNO: "14532623411",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089595",
      registrationNO: "粤A642HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy014",
      terminalNO: "14532732354",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089555",
      registrationNO: "粤A499JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy016",
      terminalNO: "14532982566",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089568",
      registrationNO: "粤A489JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy019",
      terminalNO: "14532269230",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675097",
      registrationNO: "粤AS9J49",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy048",
      terminalNO: "14532623508",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089699",
      registrationNO: "粤A449JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy050",
      terminalNO: "14532982619",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673601",
      registrationNO: "粤AS1J55",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy053",
      terminalNO: "14532725367",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673600",
      registrationNO: "粤AU3L93",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy059",
      terminalNO: "14532732363",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089592",
      registrationNO: "粤AS9J94",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0066",
      terminalNO: "14532623365",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089581",
      registrationNO: "粤AQ4B24",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0068",
      terminalNO: "14532623360",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089500",
      registrationNO: "粤A612HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0070",
      terminalNO: "14532623450",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089634",
      registrationNO: "粤A542JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0071",
      terminalNO: "14532623347",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088831",
      registrationNO: "粤AL3Q64",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0073",
      terminalNO: "14532623348",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089741",
      registrationNO: "粤A267HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0074",
      terminalNO: "13500011551",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089520",
      registrationNO: "粤AN8Y71",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0076",
      terminalNO: "13500011240",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089635",
      registrationNO: "粤AJ7Z64",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0079",
      terminalNO: "14532623423",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089518",
      registrationNO: "粤A423HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0082",
      terminalNO: "14532623385",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089698",
      registrationNO: "粤A353HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0087",
      terminalNO: "14532623417",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089586",
      registrationNO: "粤AU4M27",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0093",
      terminalNO: "13500011628",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089637",
      registrationNO: "粤A1JV05",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0108",
      terminalNO: "14532623355",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673590",
      registrationNO: "粤A943GG",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0120",
      terminalNO: "14532623368",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673588",
      registrationNO: "粤A628SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0121",
      terminalNO: "14532725419",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673385",
      registrationNO: "粤A434HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0122",
      terminalNO: "14532623361",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673384",
      registrationNO: "粤AU4M42",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0123",
      terminalNO: "14532623516",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673596",
      registrationNO: "粤AN5Y14",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0124",
      terminalNO: "14532725415",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675168",
      registrationNO: "粤AN7K24",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0125",
      terminalNO: "14532982557",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089574",
      registrationNO: "粤AN7K84",
      vehicletype: "物流车"
    },
    {
      id: "2ded3e31ffffffc95a7e389120caf312",
      terminalNO: "13500011051",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087364",
      registrationNO: "粤AM5F74",
      vehicletype: "物流车"
    },
    {
      id: "2df80c68ffffffc95a7e38913bb57728",
      terminalNO: "14532623388",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087372",
      registrationNO: "粤AN6Y04",
      vehicletype: "物流车"
    },
    {
      id: "329a0602ffffffc95a7e3891683e1bf5",
      terminalNO: "14532623346",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087688",
      registrationNO: "粤AM5F64",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy037",
      terminalNO: "14532732864",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673618",
      registrationNO: "粤AN4A54",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy038",
      terminalNO: "14532623405",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089583",
      registrationNO: "粤AN4A59",
      vehicletype: "物流车"
    },
    {
      id: "4f4be97fffffffc935305d0eec20af97",
      terminalNO: "14532623351",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089616",
      registrationNO: "粤A561JJ",
      vehicletype: "物流车"
    },
    {
      id: "d916e858ffffffc93f047426a1d17292",
      terminalNO: "13500011752",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673434",
      registrationNO: "粤A605JJ",
      vehicletype: "物流车"
    },
    {
      id: "da2546edffffffc97e9ceb1f2cf16db6",
      terminalNO: "14532725392",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673435",
      registrationNO: "粤AU1M59",
      vehicletype: "物流车"
    },
    {
      id: "19a2d519ffffffc95a7e389152967d90",
      terminalNO: "14532623457",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088790",
      registrationNO: "粤AF9159",
      vehicletype: "物流车"
    },
    {
      id: "19a72102ffffffc95a7e3891b333ad03",
      terminalNO: "13500011088",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088783",
      registrationNO: "粤AP1465",
      vehicletype: "物流车"
    },
    {
      id: "1d71fd85ffffffc95a7e3891c40d0a2e",
      terminalNO: "14532623447",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088789",
      registrationNO: "粤AF4965",
      vehicletype: "物流车"
    },
    {
      id: "1d86d55dffffffc95a7e38912465a651",
      terminalNO: "14532623485",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089754",
      registrationNO: "粤AF39Z6",
      vehicletype: "物流车"
    },
    {
      id: "1da61179ffffffc95a7e38917df3b1a2",
      terminalNO: "14532732370",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089753",
      registrationNO: "粤AF9180",
      vehicletype: "物流车"
    },
    {
      id: "220fd095ffffffc95a7e3891e4a827c8",
      terminalNO: "14532623445",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088784",
      registrationNO: "粤AK7931",
      vehicletype: "物流车"
    },
    {
      id: "229fdda0ffffffc95a7e389169151934",
      terminalNO: "14532623472",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089757",
      registrationNO: "粤A2FL95",
      vehicletype: "物流车"
    },
    {
      id: "22a22fccffffffc95a7e38914d5fa308",
      terminalNO: "14532732386",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088782",
      registrationNO: "粤A940SB",
      vehicletype: "物流车"
    },
    {
      id: "232ef8fbffffffc95a7e3891a40658ae",
      terminalNO: "14532623523",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088841",
      registrationNO: "粤A2FL76",
      vehicletype: "物流车"
    },
    {
      id: "23371d52ffffffc95a7e38914e2bb643",
      terminalNO: "14532623456",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088781",
      registrationNO: "粤AE6947",
      vehicletype: "物流车"
    },
    {
      id: "233ee8f9ffffffc95a7e3891ad24094c",
      terminalNO: "14532623532",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088786",
      registrationNO: "粤AS8J24",
      vehicletype: "物流车"
    },
    {
      id: "2740c03fffffffc95a7e38910bf3feaa",
      terminalNO: "14532623458",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088785",
      registrationNO: "粤AF9178",
      vehicletype: "物流车"
    },
    {
      id: "275453f0ffffffc95a7e3891c9405055",
      terminalNO: "14532623503",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088799",
      registrationNO: "粤A611SF",
      vehicletype: "物流车"
    },
    {
      id: "66ded23fffffffc920dbc57f19b2e0ae",
      terminalNO: "14532623492",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069638",
      registrationNO: "粤A5Y5V2",
      vehicletype: "物流车"
    },
    {
      id: "6a3941d8ffffffc920dbc57f6de154ca",
      terminalNO: "14532623500",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069642",
      registrationNO: "粤ADT685",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0144",
      terminalNO: "13500011141",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673598",
      registrationNO: "粤AU733F",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay002",
      terminalNO: "14532623514",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098081422",
      registrationNO: "粤A5F0G7",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az009",
      terminalNO: "13500011694",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089593",
      registrationNO: "粤AU366P",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd68",
      terminalNO: "14532623412",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089689",
      registrationNO: "粤AH7967 ",
      vehicletype: "物流车"
    },
    {
      id: "dg15367",
      terminalNO: "14532623497",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675163",
      registrationNO: "粤A5FB72",
      vehicletype: "物流车"
    },
    {
      id: "1da53968ffffffc95a7e3891bd20eb3e",
      terminalNO: "13500010927",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088797",
      registrationNO: "粤A2M6E7",
      vehicletype: "物流车"
    },
    {
      id: "27b2bb82ffffffc95a7e3891e143a092",
      terminalNO: "14532623451",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088788",
      registrationNO: "粤A402JJ",
      vehicletype: "物流车"
    },
    {
      id: "2833acf3ffffffc95a7e389185c594af",
      terminalNO: "14533154781",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088845",
      registrationNO: "粤A462JJ",
      vehicletype: "物流车"
    },
    {
      id: "283532f6ffffffc95a7e3891b744a09c",
      terminalNO: "13500011285",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088821",
      registrationNO: "粤A5UN31",
      vehicletype: "物流车"
    },
    {
      id: "2839e4deffffffc95a7e3891a0f0042f",
      terminalNO: "13500011297",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088843",
      registrationNO: "粤A482JJ",
      vehicletype: "物流车"
    },
    {
      id: "2844aa6fffffffc95a7e389120527ae7",
      terminalNO: "13500011326",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088839",
      registrationNO: "粤A460JJ",
      vehicletype: "物流车"
    },
    {
      id: "284b203effffffc95a7e3891fedc2f89",
      terminalNO: "14532732875",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088824",
      registrationNO: "粤A7F5V3",
      vehicletype: "物流车"
    },
    {
      id: "731c6167ffffffc916136da18bab5d11",
      terminalNO: "14532623452",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088823",
      registrationNO: "粤A7BZ05",
      vehicletype: "物流车"
    },
    {
      id: "2ceea09cffffffc95a7e389114d306bf",
      terminalNO: "13500011198",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088833",
      registrationNO: "粤A549JJ",
      vehicletype: "物流车"
    },
    {
      id: "2cf59973ffffffc95a7e3891f9afc8f4",
      terminalNO: "14532982576",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088808",
      registrationNO: "粤AU2M46",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay008",
      terminalNO: "14532982584",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089466",
      registrationNO: "粤AU2M67",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay009",
      terminalNO: "13500010708",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089467",
      registrationNO: "粤A0CL49",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az027",
      terminalNO: "14532982571",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673433",
      registrationNO: "粤A442JJ",
      vehicletype: "物流车"
    },
    {
      id: "2226bc08ffffffc95a7e38919c515a33",
      terminalNO: "14533154591",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675167",
      registrationNO: "粤A1JK34",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay018",
      terminalNO: "14533154646",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089683",
      registrationNO: "粤A548JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay019",
      terminalNO: "14533154671",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089687",
      registrationNO: "粤A673JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay020",
      terminalNO: "14532732873",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089690",
      registrationNO: "粤AS1J70",
      vehicletype: "物流车"
    },
    {
      id: "e3d9e3edffffffc94e94143ea953d8a2",
      terminalNO: "14532226979",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089745",
      registrationNO: "粤A2JK41",
      vehicletype: "物流车"
    },
    {
      id: "e3e27bfeffffffc94e94143e35395ac9",
      terminalNO: "14532226969",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089742",
      registrationNO: "粤A1JK54",
      vehicletype: "物流车"
    },
    {
      id: "22413e9cffffffc95a7e3891cddc9762",
      terminalNO: "13500011744",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088815",
      registrationNO: "粤A671JJ",
      vehicletype: "物流车"
    },
    {
      id: "2db061caffffffc95a7e3891b246ea5f",
      terminalNO: "14532725376",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088810",
      registrationNO: "粤A440JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay013",
      terminalNO: "14532623387",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089680",
      registrationNO: "粤A445JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay014",
      terminalNO: "14532623349",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089679",
      registrationNO: "粤A545JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay015",
      terminalNO: "13500011408",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089693",
      registrationNO: "粤AM2L74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay016",
      terminalNO: "14532725387",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089688",
      registrationNO: "粤A041JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay017",
      terminalNO: "13500011613",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089676",
      registrationNO: "粤A449JJ",
      vehicletype: "物流车"
    },
    {
      id: "ce15cadaffffffc90c295f88029b06dc",
      terminalNO: "13500010724",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089694",
      registrationNO: "粤A431JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az015",
      terminalNO: "13500011213",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673578",
      registrationNO: "粤A324HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az020",
      terminalNO: "14532982574",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673613",
      registrationNO: "粤A436HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az022",
      terminalNO: "14532623389",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673607",
      registrationNO: "粤A317HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az023",
      terminalNO: "14532982580",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673443",
      registrationNO: "粤A2MF02",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd16",
      terminalNO: "14532982587",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088838",
      registrationNO: "粤A529JJ",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd20",
      terminalNO: "13500011121",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088846",
      registrationNO: "粤A088ST",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd21",
      terminalNO: "14532623482",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088842",
      registrationNO: "粤A2MF21",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd22",
      terminalNO: "13500011236",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088837",
      registrationNO: "粤AU4M29",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd28",
      terminalNO: "13500011411",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088822",
      registrationNO: "粤A327HN",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd33",
      terminalNO: "13500011589",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088844",
      registrationNO: "粤A662SF",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd40",
      terminalNO: "14532982599",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089651",
      registrationNO: "粤A539JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay011",
      terminalNO: "14533154718",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089696",
      registrationNO: "粤A546JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay012",
      terminalNO: "14532226981",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089744",
      registrationNO: "粤A7TQ61",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd25",
      terminalNO: "14532226958",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089748",
      registrationNO: "粤A2M6W0",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd29",
      terminalNO: "14532226957",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089743",
      registrationNO: "粤A6G9E2",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd65",
      terminalNO: "14532732870",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089682",
      registrationNO: "粤AU1L20 ",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd67",
      terminalNO: "14532732371",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089695",
      registrationNO: "粤A70308",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd69",
      terminalNO: "14532732377",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089675",
      registrationNO: "粤AR499H",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az035",
      terminalNO: "14532732879",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089611",
      registrationNO: "粤A629HN",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd23",
      terminalNO: "14533154613",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089498",
      registrationNO: "粤A480HN",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd26",
      terminalNO: "14533154773",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088776",
      registrationNO: "粤A691SF",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd35",
      terminalNO: "14532982570",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088775",
      registrationNO: "粤A571JJ",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd36",
      terminalNO: "14533154699",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089487",
      registrationNO: "鲁B57FF3",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd38",
      terminalNO: "14532732396",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089489",
      registrationNO: "粤AN6Y43",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd41",
      terminalNO: "14533154672",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089491",
      registrationNO: "粤AQ0E64",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd42",
      terminalNO: "13500011680",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089667",
      registrationNO: "粤A9EM25",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd44",
      terminalNO: "14532732863",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089661",
      registrationNO: "粤A641JJ",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd45",
      terminalNO: "14532732869",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089671",
      registrationNO: "粤AU1M43",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd50",
      terminalNO: "14532732353",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089465",
      registrationNO: "粤AQ3G08",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd51",
      terminalNO: "14532982586",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089650",
      registrationNO: "鲁B2S00X",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd52",
      terminalNO: "14532982631",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089652",
      registrationNO: "粤A491HN",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd56",
      terminalNO: "13500011550",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089660",
      registrationNO: "粤BF72B0",
      vehicletype: "物流车"
    },
    {
      id: "16ca36a9ffffffc97b5630fa99c0170e",
      terminalNO: "14532269214",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675061",
      registrationNO: "粤A3MF38",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd27",
      terminalNO: "14532623404",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088820",
      registrationNO: "粤AN5K34",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd31",
      terminalNO: "14532623448",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089495",
      registrationNO: "鲁B97FP3",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd34",
      terminalNO: "14532725383",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089475",
      registrationNO: "粤A1JJ94",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd37",
      terminalNO: "14532725362",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089686",
      registrationNO: "粤A4MP13",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd39",
      terminalNO: "13500011557",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089668",
      registrationNO: "粤A616SF",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd46",
      terminalNO: "14532732375",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089470",
      registrationNO: "粤AU0M71",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd47",
      terminalNO: "13500011214",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089664",
      registrationNO: "粤A693SF",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd48",
      terminalNO: "13500011583",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089669",
      registrationNO: "粤A668SF",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd49",
      terminalNO: "14532725403",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089492",
      registrationNO: "鲁B03FR0",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd55",
      terminalNO: "13500011793",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089474",
      registrationNO: "粤A509HN",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd59",
      terminalNO: "14532725411",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089666",
      registrationNO: "粤A8MP77",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd53",
      terminalNO: "14532623435",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089656",
      registrationNO: "粤AU033T",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd58",
      terminalNO: "14532982601",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089654",
      registrationNO: "粤AU4L94",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd60",
      terminalNO: "14532623380",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089653",
      registrationNO: "粤AU4M32",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd61",
      terminalNO: "14532732385",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089672",
      registrationNO: "粤A9EM45",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd70",
      terminalNO: "14532623369",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089663",
      registrationNO: "粤A796RP",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd71",
      terminalNO: "14532725422",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089659",
      registrationNO: "粤AU4M49",
      vehicletype: "物流车"
    },
    {
      id: "dg15488",
      terminalNO: "14532623478",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089554",
      registrationNO: "粤AF33Z7",
      vehicletype: "物流车"
    },
    {
      id: "276ca7e2ffffffc95a7e38918893a43e",
      terminalNO: "14532725404",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675173",
      registrationNO: "粤A7YC68",
      vehicletype: "物流车"
    },
    {
      id: "32d3170cffffffc95a7e38919a03b7f0",
      terminalNO: "14532732860",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675152",
      registrationNO: "粤A4CL74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0159",
      terminalNO: "14532623477",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673579",
      registrationNO: "粤AU4M12",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d04",
      terminalNO: "14532725329",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089540",
      registrationNO: "粤AK5431",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d06",
      terminalNO: "14532982596",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089459",
      registrationNO: "粤AS6J04",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d08",
      terminalNO: "14532623339",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089499",
      registrationNO: "粤AK7966",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e27",
      terminalNO: "14532725412",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089655",
      registrationNO: "粤A351HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e28",
      terminalNO: "14532725407",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673441",
      registrationNO: "粤A376HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e29",
      terminalNO: "14532623396",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673665",
      registrationNO: "粤A444HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az014",
      terminalNO: "14532623338",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673386",
      registrationNO: "粤A565HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az017",
      terminalNO: "14532269211",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675083",
      registrationNO: "粤A014HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d07",
      terminalNO: "14532732356",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089541",
      registrationNO: "粤A5JV50",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d12",
      terminalNO: "14532269281",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089494",
      registrationNO: "粤A2HX74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d15",
      terminalNO: "13500011193",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089463",
      registrationNO: "粤AZ766B",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d16",
      terminalNO: "14532725382",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089658",
      registrationNO: "鲁B1T87E",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d17",
      terminalNO: "13500011327",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088819",
      registrationNO: "鲁B8T97E",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d19",
      terminalNO: "13500011560",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089473",
      registrationNO: "粤A636SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d21",
      terminalNO: "14532725338",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089472",
      registrationNO: "粤A5JV52",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d22",
      terminalNO: "13500011022",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089460",
      registrationNO: "粤A0HX74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d23",
      terminalNO: "13500011740",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089740",
      registrationNO: "粤A2JK37",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d09",
      terminalNO: "14532725351",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089530",
      registrationNO: "粤A247JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d13",
      terminalNO: "14532623409",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089548",
      registrationNO: "粤A514ST",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d28",
      terminalNO: "14532725400",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089727",
      registrationNO: "粤AP7S34",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d29",
      terminalNO: "14532732867",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088793",
      registrationNO: "粤AU2M34",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d30",
      terminalNO: "13500011362",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089729",
      registrationNO: "粤RM5002",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d31",
      terminalNO: "14532725408",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089618",
      registrationNO: "粤AR0J54",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d32",
      terminalNO: "14532623502",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089613",
      registrationNO: "粤A698SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy044",
      terminalNO: "14532732374",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089665",
      registrationNO: "粤A261HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy045",
      terminalNO: "14532982563",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673446",
      registrationNO: "粤AU4M63",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy046",
      terminalNO: "14532623356",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673623",
      registrationNO: "粤AU2M57",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy047",
      terminalNO: "14532623441",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673620",
      registrationNO: "粤A685SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d10",
      terminalNO: "13500011059",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089471",
      registrationNO: "粤AU0M72",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d18",
      terminalNO: "14532982611",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089722",
      registrationNO: "粤AN5K42",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d20",
      terminalNO: "14532725381",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088802",
      registrationNO: "粤A672SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d25",
      terminalNO: "14532725409",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089733",
      registrationNO: "粤T15K96",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d26",
      terminalNO: "14532725402",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089536",
      registrationNO: "粤AJ4Z74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d27",
      terminalNO: "14532623519",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089600",
      registrationNO: "湘MD4052",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy041",
      terminalNO: "14532288588",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675003",
      registrationNO: "粤R40U72",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy043",
      terminalNO: "14532725336",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673660",
      registrationNO: "粤A459JJ",
      vehicletype: "物流车"
    },
    {
      id: "2c56e31bffffffc95a7e38912a2ff163",
      terminalNO: "14532725413",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089622",
      registrationNO: "粤A0Y3P6",
      vehicletype: "物流车"
    },
    {
      id: "33551f4fffffffc95a7e3891961687e9",
      terminalNO: "14532269226",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069643",
      registrationNO: "粤A7V8Y6",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0040",
      terminalNO: "14532623501",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673629",
      registrationNO: "粤AP1598",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0043",
      terminalNO: "14532623442",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673631",
      registrationNO: "粤AL8441",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0044",
      terminalNO: "13500011301",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673636",
      registrationNO: "粤A501JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0046",
      terminalNO: "14532623473",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673626",
      registrationNO: "粤AE6742",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0047",
      terminalNO: "14532623529",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673632",
      registrationNO: "粤A490JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0048",
      terminalNO: "14532725396",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673635",
      registrationNO: "粤A594SZ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0050",
      terminalNO: "14532623510",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673640",
      registrationNO: "粤AF7733",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0051",
      terminalNO: "14532623453",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673641",
      registrationNO: "粤AS6J40",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0052",
      terminalNO: "14532623475",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673634",
      registrationNO: "粤A1JK64",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0053",
      terminalNO: "14532623467",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673637",
      registrationNO: "粤A9EM52",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0054",
      terminalNO: "14532623511",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673638",
      registrationNO: "粤AZ166Q",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0056",
      terminalNO: "14532623353",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673644",
      registrationNO: "粤AK7105",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0058",
      terminalNO: "14532623504",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673633",
      registrationNO: "粤AH2019",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0059",
      terminalNO: "14532623455",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673639",
      registrationNO: "粤AP1477",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0177",
      terminalNO: "14532623461",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673650",
      registrationNO: "粤AU3M13",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e13",
      terminalNO: "14532725342",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089526",
      registrationNO: "粤A561HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e33",
      terminalNO: "14532623506",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089538",
      registrationNO: "粤AF27K5",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az029",
      terminalNO: "14532623468",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673659",
      registrationNO: "粤AF5709",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az034",
      terminalNO: "14532725334",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673645",
      registrationNO: "粤AK7165",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az037",
      terminalNO: "14532623378",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673642",
      registrationNO: "粤A5FB71",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy018",
      terminalNO: "14532623438",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089621",
      registrationNO: "粤AF9183",
      vehicletype: "物流车"
    },
    {
      id: "19a1ca22ffffffc95a7e38918cb03abb",
      terminalNO: "13500011351",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088807",
      registrationNO: "粤AP9E94",
      vehicletype: "物流车"
    },
    {
      id: "2cebfca6ffffffc95a7e38919b3d8883",
      terminalNO: "14532623522",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088809",
      registrationNO: "粤A560HN",
      vehicletype: "物流车"
    },
    {
      id: "2cecfadcffffffc95a7e3891970a7c16",
      terminalNO: "13500011169",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088828",
      registrationNO: "粤A485JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy010",
      terminalNO: "14532269277",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675091",
      registrationNO: "粤A453JJ",
      vehicletype: "物流车"
    },
    {
      id: "db906af3ffffffc97e9ceb1fa863194b",
      terminalNO: "13500011265",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088826",
      registrationNO: "粤A694HN",
      vehicletype: "物流车"
    },
    {
      id: "dd8b1a2bffffffc94e94143e43766fcf",
      terminalNO: "14532226956",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089714",
      registrationNO: "鲁B70FN9",
      vehicletype: "物流车"
    },
    {
      id: "dd99b69dffffffc94e94143e649189e7",
      terminalNO: "14532226977",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089711",
      registrationNO: "鲁B1S39X",
      vehicletype: "物流车"
    },
    {
      id: "dd9d64e7ffffffc94e94143e66e18fd4",
      terminalNO: "14532226952",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089713",
      registrationNO: "鲁B3T26E",
      vehicletype: "物流车"
    },
    {
      id: "55083069ffffffc935305d0e0b5ee135",
      terminalNO: "14532732358",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089608",
      registrationNO: "粤AR466Q",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0027",
      terminalNO: "14532226948",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089708",
      registrationNO: "鲁B2T61E",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0031",
      terminalNO: "14532226965",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089709",
      registrationNO: "鲁B1S91H",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0039",
      terminalNO: "13500011397",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089642",
      registrationNO: "粤A457JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy030",
      terminalNO: "14532732393",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089609",
      registrationNO: "粤A627SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy032",
      terminalNO: "14532623400",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089604",
      registrationNO: "粤A776RP",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy033",
      terminalNO: "14532226973",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089710",
      registrationNO: "鲁B7S78X",
      vehicletype: "物流车"
    },
    {
      id: "32ec2e87ffffffc95a7e3891b858d50f",
      terminalNO: "13500011707",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089497",
      registrationNO: "粤A496JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy035",
      terminalNO: "14532288569",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823677070",
      registrationNO: "鲁B81MT3",
      vehicletype: "物流车"
    },
    {
      id: "de0003c9ffffffc94e94143e31da2965",
      terminalNO: "14532226972",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089705",
      registrationNO: "鲁B37FC7",
      vehicletype: "物流车"
    },
    {
      id: "de0587beffffffc94e94143e3f98ff76",
      terminalNO: "14532226938",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089706",
      registrationNO: "鲁B3T23F",
      vehicletype: "物流车"
    },
    {
      id: "2cea076fffffffc95a7e389122ffc638",
      terminalNO: "14532623484",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069636",
      registrationNO: "粤ABW328",
      vehicletype: "物流车"
    },
    {
      id: "66282fe0ffffffc920dbc57fbdcddf07",
      terminalNO: "14532732383",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069647",
      registrationNO: "粤ABW311",
      vehicletype: "物流车"
    },
    {
      id: "66dd183affffffc920dbc57f2b117176",
      terminalNO: "14407364254",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440407364254",
      registrationNO: "粤ADJ220",
      vehicletype: "物流车"
    },
    {
      id: "6a32cd7effffffc920dbc57f11b01e53",
      terminalNO: "14532725375",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069648",
      registrationNO: "粤ACF317",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0001",
      terminalNO: "13500011609",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089543",
      registrationNO: "粤AS9J47",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0002",
      terminalNO: "14532732376",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089619",
      registrationNO: "粤A8CT83",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0003",
      terminalNO: "14532725335",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089570",
      registrationNO: "粤AU0L95",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0004",
      terminalNO: "14532732392",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089563",
      registrationNO: "粤AK0958",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0005",
      terminalNO: "14532732395",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089560",
      registrationNO: "粤AF9186",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0009",
      terminalNO: "14532732364",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089573",
      registrationNO: "粤AL8457",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0010",
      terminalNO: "14407086773",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440407086773",
      registrationNO: "粤AJ7441",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0011",
      terminalNO: "14532623379",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089558",
      registrationNO: "粤AK0925",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0062",
      terminalNO: "14532725328",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673625",
      registrationNO: "粤AS8J94",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0063",
      terminalNO: "14532623410",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089644",
      registrationNO: "粤AH2160",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8d11",
      terminalNO: "14532732366",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089496",
      registrationNO: "粤AK0927",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az001",
      terminalNO: "14532623465",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089508",
      registrationNO: "粤A250HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az008",
      terminalNO: "14532982603",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673391",
      registrationNO: "粤AN6Y46",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717az028",
      terminalNO: "14532623436",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089620",
      registrationNO: "粤A9EM31",
      vehicletype: "物流车"
    },
    {
      id: "dg15460",
      terminalNO: "14532725356",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673668",
      registrationNO: "粤AE8479",
      vehicletype: "物流车"
    },
    {
      id: "dg15490",
      terminalNO: "14407364255",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440407364255",
      registrationNO: "粤AN4889",
      vehicletype: "物流车"
    },
    {
      id: "32d216e2ffffffc95a7e3891605fc743",
      terminalNO: "14532732876",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087685",
      registrationNO: "粤A483JJ",
      vehicletype: "物流车"
    },
    {
      id: "6648adb1ffffffc920dbc57f9d897e10",
      terminalNO: "14532982632",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087679",
      registrationNO: "粤AY8L24",
      vehicletype: "物流车"
    },
    {
      id: "73181664ffffffc916136da1198ea1ea",
      terminalNO: "14532982590",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087718",
      registrationNO: "粤A663SF",
      vehicletype: "物流车"
    },
    {
      id: "8abe9d08ffffffc9487f5cd328bc043c",
      terminalNO: "14532982609",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087652",
      registrationNO: "粤A620SF",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd43",
      terminalNO: "14532982635",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089728",
      registrationNO: "粤AS4J64",
      vehicletype: "物流车"
    },
    {
      id: "d838c728ffffffc972917c4509abdd57",
      terminalNO: "14532982646",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088792",
      registrationNO: "粤AU4M39",
      vehicletype: "物流车"
    },
    {
      id: "32994090ffffffc95a7e3891152e428e",
      terminalNO: "14532732352",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087673",
      registrationNO: "粤A2JV45",
      vehicletype: "物流车"
    },
    {
      id: "32a53ca8ffffffc95a7e3891fc4b2274",
      terminalNO: "14532725418",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087674",
      registrationNO: "粤AF9162",
      vehicletype: "物流车"
    },
    {
      id: "3351c77cffffffc95a7e3891d8e031b5",
      terminalNO: "14532725405",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087724",
      registrationNO: "粤AF9170",
      vehicletype: "物流车"
    },
    {
      id: "3354db9fffffffc95a7e38919884d247",
      terminalNO: "14532982556",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087689",
      registrationNO: "粤A064HN",
      vehicletype: "物流车"
    },
    {
      id: "335570e9ffffffc95a7e3891bd78d263",
      terminalNO: "14532732398",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087687",
      registrationNO: "粤A5MP23",
      vehicletype: "物流车"
    },
    {
      id: "663bb43effffffc920dbc57fd14a6c54",
      terminalNO: "14532623292",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087684",
      registrationNO: "粤A403JE",
      vehicletype: "物流车"
    },
    {
      id: "663d8a74ffffffc920dbc57f00ed4ca3",
      terminalNO: "14532982591",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087682",
      registrationNO: "粤A1JV27",
      vehicletype: "物流车"
    },
    {
      id: "66406e41ffffffc920dbc57f9d03cdb4",
      terminalNO: "14532982647",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087681",
      registrationNO: "粤A312HN",
      vehicletype: "物流车"
    },
    {
      id: "66416c39ffffffc920dbc57f3a61b8f7",
      terminalNO: "14532982628",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087676",
      registrationNO: "粤AG309Z",
      vehicletype: "物流车"
    },
    {
      id: "6643e46bffffffc920dbc57f12320ad9",
      terminalNO: "14532982607",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087680",
      registrationNO: "粤A557JJ",
      vehicletype: "物流车"
    },
    {
      id: "664571a2ffffffc920dbc57fb1d26de4",
      terminalNO: "14532725343",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087677",
      registrationNO: "粤AP1487",
      vehicletype: "物流车"
    },
    {
      id: "664b6926ffffffc920dbc57f5880bfe3",
      terminalNO: "14532982549",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069655",
      registrationNO: "粤A3L8H5",
      vehicletype: "物流车"
    },
    {
      id: "66cd628effffffc920dbc57f7634616a",
      terminalNO: "14532732368",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087647",
      registrationNO: "粤AU3M53",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717ay004",
      terminalNO: "14532732397",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098087719",
      registrationNO: "粤A4FB45",
      vehicletype: "物流车"
    },
    {
      id: "33517d63ffffffc95a7e3891267ca5ce",
      terminalNO: "14532732877",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069659",
      registrationNO: "粤A9J8P6",
      vehicletype: "物流车"
    },
    {
      id: "6a31c3edffffffc920dbc57f90fc533c",
      terminalNO: "14532732369",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069656",
      registrationNO: "粤ADS857",
      vehicletype: "物流车"
    },
    {
      id: "6e646be6ffffffc916136da1d8ddd636",
      terminalNO: "14532732357",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673664",
      registrationNO: "粤A384HN",
      vehicletype: "物流车"
    },
    {
      id: "869e2cf6ffffffc9703be4edc276006",
      terminalNO: "14532623344",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089715",
      registrationNO: "粤A92900",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0042",
      terminalNO: "14532623534",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089587",
      registrationNO: "粤A419HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0055",
      terminalNO: "14532732378",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089522",
      registrationNO: "粤A483HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e48",
      terminalNO: "14532725340",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673431",
      registrationNO: "粤AS6J45",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e49",
      terminalNO: "14532725426",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673619",
      registrationNO: "粤AU233J",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e50",
      terminalNO: "14532732389",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089673",
      registrationNO: "粤AU3L63",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e51",
      terminalNO: "14532732360",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673622",
      registrationNO: "粤A574SZ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e52",
      terminalNO: "14532732866",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673672",
      registrationNO: "粤AL8467",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e53",
      terminalNO: "14532623507",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673436",
      registrationNO: "粤AS0J93",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy001",
      terminalNO: "13500010929",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673426",
      registrationNO: "粤A410HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy021",
      terminalNO: "14532269243",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673591",
      registrationNO: "粤AP1585",
      vehicletype: "物流车"
    },
    {
      id: "4547d9f2ffffffc965ebfdfad3bb7910",
      terminalNO: "14532725374",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524055",
      registrationNO: "粤AL7897",
      vehicletype: "物流车"
    },
    {
      id: "4560b21effffffc965ebfdfaf0fb0815",
      terminalNO: "14532982561",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524310",
      registrationNO: "粤AK0972",
      vehicletype: "物流车"
    },
    {
      id: "6623d532ffffffc920dbc57f0e51226e",
      terminalNO: "14532982630",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098069657",
      registrationNO: "粤ADT608",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0098",
      terminalNO: "14532623390",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673661",
      registrationNO: "粤A5EM44",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e01",
      terminalNO: "14532623464",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524065",
      registrationNO: "粤AL7889",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e02",
      terminalNO: "14532725395",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524060",
      registrationNO: "粤A904SB",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e03",
      terminalNO: "14532623460",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524064",
      registrationNO: "粤AF59S7",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e05",
      terminalNO: "14532725386",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524073",
      registrationNO: "粤AS2J41",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e06",
      terminalNO: "14532623470",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524063",
      registrationNO: "粤A506JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e17",
      terminalNO: "14532623253",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524072",
      registrationNO: "粤AU299E",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e24",
      terminalNO: "14532623499",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524059",
      registrationNO: "粤AU299K",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e25",
      terminalNO: "14532623428",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524062",
      registrationNO: "粤AF1449",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e35",
      terminalNO: "14532623505",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524058",
      registrationNO: "粤AM433Q",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e36",
      terminalNO: "14532725421",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524071",
      registrationNO: "粤A5CS94",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e37",
      terminalNO: "14532623490",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524069",
      registrationNO: "粤A1Q8D9",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e38",
      terminalNO: "14532725379",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524061",
      registrationNO: "粤AQ0A74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e44",
      terminalNO: "14532623383",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524057",
      registrationNO: "粤AU3L92",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy051",
      terminalNO: "14532623476",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524070",
      registrationNO: "粤AC7045",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy052",
      terminalNO: "14532623330",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524066",
      registrationNO: "粤A645HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy054",
      terminalNO: "14532725401",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524074",
      registrationNO: "粤A6CT47",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy057",
      terminalNO: "14532725330",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524056",
      registrationNO: "粤A496JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy058",
      terminalNO: "14532623533",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440105524068",
      registrationNO: "粤AF9176",
      vehicletype: "物流车"
    },
    {
      id: "d94263eaffffffc93f047426d79c3492",
      terminalNO: "14532623342",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673430",
      registrationNO: "粤A715HN",
      vehicletype: "物流车"
    },
    {
      id: "dg15455",
      terminalNO: "13500011780",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673580",
      registrationNO: "粤A492HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e04",
      terminalNO: "14532226951",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089707",
      registrationNO: "粤A2TB05",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e30",
      terminalNO: "14532732871",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088816",
      registrationNO: "粤A1D5Q9",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e07",
      terminalNO: "14532982634",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089739",
      registrationNO: "粤A0ZR57",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e21",
      terminalNO: "13500011292",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089721",
      registrationNO: "粤A0E3U1",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e10",
      terminalNO: "14532982582",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089462",
      registrationNO: "粤A8N1S4",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e11",
      terminalNO: "14532623375",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089724",
      registrationNO: "粤A3M0G7",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e16",
      terminalNO: "14532623358",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088805",
      registrationNO: "粤AV1J12",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e08",
      terminalNO: "14532982555",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089549",
      registrationNO: "粤A486JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e09",
      terminalNO: "14532982600",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089546",
      registrationNO: "粤A4JJ49",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e12",
      terminalNO: "14532982562",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089533",
      registrationNO: "粤A4JK26",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e14",
      terminalNO: "13500011182",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089641",
      registrationNO: "粤AP9W48",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e15",
      terminalNO: "14532982564",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089525",
      registrationNO: "粤A450JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e32",
      terminalNO: "14532982627",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089529",
      registrationNO: "粤A028ST",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e34",
      terminalNO: "13500011562",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089545",
      registrationNO: "粤AU0M24",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e39",
      terminalNO: "14532732878",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089703",
      registrationNO: "粤A9EM24",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e45",
      terminalNO: "14532982615",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089539",
      registrationNO: "粤AN9K64",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0023",
      terminalNO: "13500011379",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088812",
      registrationNO: "粤A674HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e18",
      terminalNO: "14532982588",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089531",
      registrationNO: "粤AN5Y24",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e19",
      terminalNO: "14532982605",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089534",
      registrationNO: "粤A3JK44",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e20",
      terminalNO: "13500010736",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098088800",
      registrationNO: "粤AU4M56",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e22",
      terminalNO: "14532982558",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089544",
      registrationNO: "粤A2JK94",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e23",
      terminalNO: "13500011621",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089704",
      registrationNO: "粤AZ9X14",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e26",
      terminalNO: "14532982551",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089527",
      registrationNO: "粤A4HX24",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e40",
      terminalNO: "14532725368",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089547",
      registrationNO: "粤A610HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e41",
      terminalNO: "14532623382",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089701",
      registrationNO: "粤A347JJ",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e42",
      terminalNO: "14532982608",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089535",
      registrationNO: "粤A554HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e43",
      terminalNO: "13500011702",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089537",
      registrationNO: "粤A2JK14",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy026",
      terminalNO: "14532623345",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089602",
      registrationNO: "粤A945GG",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy031",
      terminalNO: "14532732390",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089646",
      registrationNO: "粤A917GG",
      vehicletype: "物流车"
    },
    {
      id: "d4e68594ffffffc97e9ceb1f35fbb984",
      terminalNO: "14532269254",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673381",
      registrationNO: "粤A1JK74",
      vehicletype: "物流车"
    },
    {
      id: "ad129505ffffffc91a867bb5c11a81ed",
      terminalNO: "14532982633",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089589",
      registrationNO: "粤R47616",
      vehicletype: ""
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0126",
      terminalNO: "14532725410",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089588",
      registrationNO: "鲁B9R51Q",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0128",
      terminalNO: "14532725333",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089633",
      registrationNO: "鲁B2T32F",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0130",
      terminalNO: "14532623350",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089718",
      registrationNO: "鲁B1S56H",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0132",
      terminalNO: "14532732379",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089638",
      registrationNO: "粤TF291Q",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0133",
      terminalNO: "14532623512",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089631",
      registrationNO: "鲁B6T69E",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0134",
      terminalNO: "14532982621",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089636",
      registrationNO: "粤AP9G14",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0136",
      terminalNO: "14532269286",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675081",
      registrationNO: "粤A457HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0137",
      terminalNO: "14532982644",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089509",
      registrationNO: "粤S9B3C7",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0143",
      terminalNO: "14532269241",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675075",
      registrationNO: "粤L52F60",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0152",
      terminalNO: "14532725398",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089516",
      registrationNO: "粤AN8K47",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0156",
      terminalNO: "14532269229",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675076",
      registrationNO: "粤LD733A",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0165",
      terminalNO: "14532623343",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089590",
      registrationNO: "粤AN7K04",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e55",
      terminalNO: "14532982567",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089681",
      registrationNO: "粤AS5K14",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e56",
      terminalNO: "14532982575",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089691",
      registrationNO: "粤AQ5N14",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e57",
      terminalNO: "14532732391",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089684",
      registrationNO: "粤A606SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e58",
      terminalNO: "14532725353",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089685",
      registrationNO: "粤A697SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e59",
      terminalNO: "14532725355",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089692",
      registrationNO: "粤AQ0E48",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e60",
      terminalNO: "14532982623",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089678",
      registrationNO: "粤AS2A41",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy013",
      terminalNO: "14532732388",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089720",
      registrationNO: "粤BM60M6",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy017",
      terminalNO: "14532982637",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089719",
      registrationNO: "粤PZ2211",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy020",
      terminalNO: "14532725345",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089732",
      registrationNO: "粤AF39Z3",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy029",
      terminalNO: "14532982612",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089628",
      registrationNO: "粤A623SF",
      vehicletype: "物流车"
    },
    {
      id: "b23cb9b5ffffffc91a867bb5ce2426d1",
      terminalNO: "14532623273",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089515",
      registrationNO: "粤G2T707",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0101",
      terminalNO: "14532732350",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673677",
      registrationNO: "粤A3MF28",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0102",
      terminalNO: "14532732865",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673597",
      registrationNO: "粤A4JK04",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0103",
      terminalNO: "14532269287",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675085",
      registrationNO: "粤LCM155",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0104",
      terminalNO: "13500011115",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675158",
      registrationNO: "粤ST188H",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0105",
      terminalNO: "14532725388",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089510",
      registrationNO: "粤A591HN",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0106",
      terminalNO: "14532623394",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673383",
      registrationNO: "粤AH7912",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0107",
      terminalNO: "14532269279",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675077",
      registrationNO: "粤SZ616M",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0109",
      terminalNO: "13500011192",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089596",
      registrationNO: "粤SB701B",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0110",
      terminalNO: "14532623403",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823673676",
      registrationNO: "粤S9F9J2",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0113",
      terminalNO: "13500011163",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089506",
      registrationNO: "粤MCX538",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e47",
      terminalNO: "14532623401",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089674",
      registrationNO: "粤A778RP",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy011",
      terminalNO: "13500011041",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089662",
      registrationNO: "粤S441MY",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717gy012",
      terminalNO: "14532269224",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675078",
      registrationNO: "粤AU1M49",
      vehicletype: "物流车"
    },
    {
      id: "b23abc6effffffc91a867bb5cdddf060",
      terminalNO: "14532269219",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675089",
      registrationNO: "桂RZ7610",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0067",
      terminalNO: "14532623402",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089597",
      registrationNO: "粤A477JE",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0072",
      terminalNO: "14532269282",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675084",
      registrationNO: "粤L71B38",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0077",
      terminalNO: "14532269223",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675087",
      registrationNO: "桂AE891N",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0081",
      terminalNO: "14532623479",
      stateType: "2",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089598",
      registrationNO: "粤AN4A17",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0085",
      terminalNO: "13500011310",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089591",
      registrationNO: "鲁B3S03X",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0090",
      terminalNO: "14532269269",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675086",
      registrationNO: "粤AC77K1",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0092",
      terminalNO: "14532725394",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1064823675151",
      registrationNO: "粤A670SF",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0094",
      terminalNO: "13500011148",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089504",
      registrationNO: "粤AU0L74",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0095",
      terminalNO: "13500011191",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089512",
      registrationNO: "粤BS09C8",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0099",
      terminalNO: "14532732373",
      stateType: "0",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089511",
      registrationNO: "粤AJ8J58",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a0100",
      terminalNO: "13500011252",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089517",
      registrationNO: "鲁B5T08E",
      vehicletype: "物流车"
    },
    {
      id: "bf5285d2ffffffc9000cc0bf717a8e46",
      terminalNO: "13500011755",
      stateType: "1",
      statusname: "",
      videoterminalNO: "",
      simNO: "1440098089677",
      registrationNO: "粤A609SF",
      vehicletype: "物流车"
    }
  ]
}


Mock.mock(/\/test\/data/, 'get', data)