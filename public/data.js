const districtData = [
  {
    id: "1",
    division_id: "1",
    location: "Comilla",
    bn_location: "কুমিল্লা",
    latitude: "23.4682747",
    longitude: "91.1788135",
    url: "www.comilla.gov.bd",
  },

  {
    id: "2",
    division_id: "1",
    location: "Feni",
    bn_location: "ফেনী",
    latitude: "23.023231",
    longitude: "91.3840844",
    url: "www.feni.gov.bd",
  },
  {
    id: "3",
    division_id: "1",
    location: "Brahmanbaria",
    bn_location: "ব্রাহ্মণবাড়িয়া",
    latitude: "23.9570904",
    longitude: "91.1119286",
    url: "www.brahmanbaria.gov.bd",
  },
  {
    id: "4",
    division_id: "1",
    location: "Rangamati",
    bn_location: "রাঙ্গামাটি",
    latitude: "22.65561018",
    longitude: "92.17541121",
    url: "www.rangamati.gov.bd",
  },
  {
    id: "5",
    division_id: "1",
    location: "Noakhali",
    bn_location: "নোয়াখালী",
    latitude: "22.869563",
    longitude: "91.099398",
    url: "www.noakhali.gov.bd",
  },
  {
    id: "6",
    division_id: "1",
    location: "Chandpur",
    bn_location: "চাঁদপুর",
    latitude: "23.2332585",
    longitude: "90.6712912",
    url: "www.chandpur.gov.bd",
  },
  {
    id: "7",
    division_id: "1",
    location: "Lakshmipur",
    bn_location: "লক্ষ্মীপুর",
    latitude: "22.942477",
    longitude: "90.841184",
    url: "www.lakshmipur.gov.bd",
  },
  {
    id: "8",
    division_id: "1",
    location: "Chattogram",
    bn_location: "চট্টগ্রাম",
    latitude: "22.335109",
    longitude: "91.834073",
    url: "www.chittagong.gov.bd",
  },
  {
    id: "9",
    division_id: "1",
    location: "Coxsbazar",
    bn_location: "কক্সবাজার",
    latitude: "21.44315751",
    longitude: "91.97381741",
    url: "www.coxsbazar.gov.bd",
  },
  {
    id: "10",
    division_id: "1",
    location: "Khagrachhari",
    bn_location: "খাগড়াছড়ি",
    latitude: "23.119285",
    longitude: "91.984663",
    url: "www.khagrachhari.gov.bd",
  },
  {
    id: "11",
    division_id: "1",
    location: "Bandarban",
    bn_location: "বান্দরবান",
    latitude: "22.1953275",
    longitude: "92.2183773",
    url: "www.bandarban.gov.bd",
  },
  {
    id: "12",
    division_id: "2",
    location: "Sirajganj",
    bn_location: "সিরাজগঞ্জ",
    latitude: "24.4533978",
    longitude: "89.7006815",
    url: "www.sirajganj.gov.bd",
  },
  {
    id: "13",
    division_id: "2",
    location: "Pabna",
    bn_location: "পাবনা",
    latitude: "23.998524",
    longitude: "89.233645",
    url: "www.pabna.gov.bd",
  },
  {
    id: "14",
    division_id: "2",
    location: "Bogura",
    bn_location: "বগুড়া",
    latitude: "24.8465228",
    longitude: "89.377755",
    url: "www.bogra.gov.bd",
  },
  {
    id: "15",
    division_id: "2",
    location: "Rajshahi",
    bn_location: "রাজশাহী",
    latitude: "24.37230298",
    longitude: "88.56307623",
    url: "www.rajshahi.gov.bd",
  },
  {
    id: "16",
    division_id: "2",
    location: "Natore",
    bn_location: "নাটোর",
    latitude: "24.420556",
    longitude: "89.000282",
    url: "www.natore.gov.bd",
  },
  {
    id: "17",
    division_id: "2",
    location: "Joypurhat",
    bn_location: "জয়পুরহাট",
    latitude: "25.09636876",
    longitude: "89.04004280",
    url: "www.joypurhat.gov.bd",
  },
  {
    id: "18",
    division_id: "2",
    location: "Chapainawabganj",
    bn_location: "চাঁপাইনবাবগঞ্জ",
    latitude: "24.5965034",
    longitude: "88.2775122",
    url: "www.chapainawabganj.gov.bd",
  },
  {
    id: "19",
    division_id: "2",
    location: "Naogaon",
    bn_location: "নওগাঁ",
    latitude: "24.83256191",
    longitude: "88.92485205",
    url: "www.naogaon.gov.bd",
  },
  {
    id: "20",
    division_id: "3",
    location: "Jashore",
    bn_location: "যশোর",
    latitude: "23.16643",
    longitude: "89.2081126",
    url: "www.jessore.gov.bd",
  },
  {
    id: "21",
    division_id: "3",
    location: "Satkhira",
    bn_location: "সাতক্ষীরা",
    latitude: "22.7180905",
    longitude: "89.0687033",
    url: "www.satkhira.gov.bd",
  },
  {
    id: "22",
    division_id: "3",
    location: "Meherpur",
    bn_location: "মেহেরপুর",
    latitude: "23.762213",
    longitude: "88.631821",
    url: "www.meherpur.gov.bd",
  },
  {
    id: "23",
    division_id: "3",
    location: "Narail",
    bn_location: "নড়াইল",
    latitude: "23.172534",
    longitude: "89.512672",
    url: "www.narail.gov.bd",
  },
  {
    id: "24",
    division_id: "3",
    location: "Chuadanga",
    bn_location: "চুয়াডাঙ্গা",
    latitude: "23.6401961",
    longitude: "88.841841",
    url: "www.chuadanga.gov.bd",
  },
  {
    id: "25",
    division_id: "3",
    location: "Kushtia",
    bn_location: "কুষ্টিয়া",
    latitude: "23.901258",
    longitude: "89.120482",
    url: "www.kushtia.gov.bd",
  },
  {
    id: "26",
    division_id: "3",
    location: "Magura",
    bn_location: "মাগুরা",
    latitude: "23.487337",
    longitude: "89.419956",
    url: "www.magura.gov.bd",
  },
  {
    id: "27",
    division_id: "3",
    location: "Khulna",
    bn_location: "খুলনা",
    latitude: "22.815774",
    longitude: "89.568679",
    url: "www.khulna.gov.bd",
  },
  {
    id: "28",
    division_id: "3",
    location: "Bagerhat",
    bn_location: "বাগেরহাট",
    latitude: "22.651568",
    longitude: "89.785938",
    url: "www.bagerhat.gov.bd",
  },
  {
    id: "29",
    division_id: "3",
    location: "Jhenaidah",
    bn_location: "ঝিনাইদহ",
    latitude: "23.5448176",
    longitude: "89.1539213",
    url: "www.jhenaidah.gov.bd",
  },
  {
    id: "30",
    division_id: "4",
    location: "Jhalakathi",
    bn_location: "ঝালকাঠি",
    latitude: "22.6422689",
    longitude: "90.2003932",
    url: "www.jhalakathi.gov.bd",
  },
  {
    id: "31",
    division_id: "4",
    location: "Patuakhali",
    bn_location: "পটুয়াখালী",
    latitude: "22.3596316",
    longitude: "90.3298712",
    url: "www.patuakhali.gov.bd",
  },
  {
    id: "32",
    division_id: "4",
    location: "Pirojpur",
    bn_location: "পিরোজপুর",
    latitude: "22.5781398",
    longitude: "89.9983909",
    url: "www.pirojpur.gov.bd",
  },
  {
    id: "33",
    division_id: "4",
    location: "Barisal",
    bn_location: "বরিশাল",
    latitude: "22.7004179",
    longitude: "90.3731568",
    url: "www.barisal.gov.bd",
  },
  {
    id: "34",
    division_id: "4",
    location: "Bhola",
    bn_location: "ভোলা",
    latitude: "22.685923",
    longitude: "90.648179",
    url: "www.bhola.gov.bd",
  },
  {
    id: "35",
    division_id: "4",
    location: "Barguna",
    bn_location: "বরগুনা",
    latitude: "22.159182",
    longitude: "90.125581",
    url: "www.barguna.gov.bd",
  },
  {
    id: "36",
    division_id: "5",
    location: "Sylhet",
    bn_location: "সিলেট",
    latitude: "24.8897956",
    longitude: "91.8697894",
    url: "www.sylhet.gov.bd",
  },
  {
    id: "37",
    division_id: "5",
    location: "Moulvibazar",
    bn_location: "মৌলভীবাজার",
    latitude: "24.482934",
    longitude: "91.777417",
    url: "www.moulvibazar.gov.bd",
  },
  {
    id: "38",
    division_id: "5",
    location: "Habiganj",
    bn_location: "হবিগঞ্জ",
    latitude: "24.374945",
    longitude: "91.41553",
    url: "www.habiganj.gov.bd",
  },
  {
    id: "39",
    division_id: "5",
    location: "Sunamganj",
    bn_location: "সুনামগঞ্জ",
    latitude: "25.0658042",
    longitude: "91.3950115",
    url: "www.sunamganj.gov.bd",
  },
  {
    id: "40",
    division_id: "6",
    location: "Narsingdi",
    bn_location: "নরসিংদী",
    latitude: "23.932233",
    longitude: "90.71541",
    url: "www.narsingdi.gov.bd",
  },
  {
    id: "41",
    division_id: "6",
    location: "Gazipur",
    bn_location: "গাজীপুর",
    latitude: "24.0022858",
    longitude: "90.4264283",
    url: "www.gazipur.gov.bd",
  },
  {
    id: "42",
    division_id: "6",
    location: "Shariatpur",
    bn_location: "শরীয়তপুর",
    latitude: "23.2060195",
    longitude: "90.3477725",
    url: "www.shariatpur.gov.bd",
  },
  {
    id: "43",
    division_id: "6",
    location: "Narayanganj",
    bn_location: "নারায়ণগঞ্জ",
    latitude: "23.63366",
    longitude: "90.496482",
    url: "www.narayanganj.gov.bd",
  },
  {
    id: "44",
    division_id: "6",
    location: "Tangail",
    bn_location: "টাঙ্গাইল",
    latitude: "24.264145",
    longitude: "89.918029",
    url: "www.tangail.gov.bd",
  },
  {
    id: "45",
    division_id: "6",
    location: "Kishoreganj",
    bn_location: "কিশোরগঞ্জ",
    latitude: "24.444937",
    longitude: "90.776575",
    url: "www.kishoreganj.gov.bd",
  },
  {
    id: "46",
    division_id: "6",
    location: "Manikganj",
    bn_location: "মানিকগঞ্জ",
    latitude: "23.8602262",
    longitude: "90.0018293",
    url: "www.manikganj.gov.bd",
  },
  {
    id: "47",
    division_id: "6",
    location: "Dhaka",
    bn_location: "ঢাকা",
    latitude: "23.7115253",
    longitude: "90.4111451",
    url: "www.dhaka.gov.bd",
  },
  {
    id: "48",
    division_id: "6",
    location: "Munshiganj",
    bn_location: "মুন্সিগঞ্জ",
    latitude: "23.5435742",
    longitude: "90.5354327",
    url: "www.munshiganj.gov.bd",
  },
  {
    id: "49",
    division_id: "6",
    location: "Rajbari",
    bn_location: "রাজবাড়ী",
    latitude: "23.7574305",
    longitude: "89.6444665",
    url: "www.rajbari.gov.bd",
  },
  {
    id: "50",
    division_id: "6",
    location: "Madaripur",
    bn_location: "মাদারীপুর",
    latitude: "23.164102",
    longitude: "90.1896805",
    url: "www.madaripur.gov.bd",
  },
  {
    id: "51",
    division_id: "6",
    location: "Gopalganj",
    bn_location: "গোপালগঞ্জ",
    latitude: "23.0050857",
    longitude: "89.8266059",
    url: "www.gopalganj.gov.bd",
  },
  {
    id: "52",
    division_id: "6",
    location: "Faridpur",
    bn_location: "ফরিদপুর",
    latitude: "23.6070822",
    longitude: "89.8429406",
    url: "www.faridpur.gov.bd",
  },
  {
    id: "53",
    division_id: "7",
    location: "Panchagarh",
    bn_location: "পঞ্চগড়",
    latitude: "26.3411",
    longitude: "88.5541606",
    url: "www.panchagarh.gov.bd",
  },
  {
    id: "54",
    division_id: "7",
    location: "Dinajpur",
    bn_location: "দিনাজপুর",
    latitude: "25.6217061",
    longitude: "88.6354504",
    url: "www.dinajpur.gov.bd",
  },
  {
    id: "55",
    division_id: "7",
    location: "Lalmonirhat",
    bn_location: "লালমনিরহাট",
    latitude: "25.9165451",
    longitude: "89.4532409",
    url: "www.lalmonirhat.gov.bd",
  },
  {
    id: "56",
    division_id: "7",
    location: "Nilphamari",
    bn_location: "নীলফামারী",
    latitude: "25.931794",
    longitude: "88.856006",
    url: "www.nilphamari.gov.bd",
  },
  {
    id: "57",
    division_id: "7",
    location: "Gaibandha",
    bn_location: "গাইবান্ধা",
    latitude: "25.328751",
    longitude: "89.528088",
    url: "www.gaibandha.gov.bd",
  },
  {
    id: "58",
    division_id: "7",
    location: "Thakurgaon",
    bn_location: "ঠাকুরগাঁও",
    latitude: "26.0336945",
    longitude: "88.4616834",
    url: "www.thakurgaon.gov.bd",
  },
  {
    id: "59",
    division_id: "7",
    location: "Rangpur",
    bn_location: "রংপুর",
    latitude: "25.7558096",
    longitude: "89.244462",
    url: "www.rangpur.gov.bd",
  },
  {
    id: "60",
    division_id: "7",
    location: "Kurigram",
    bn_location: "কুড়িগ্রাম",
    latitude: "25.805445",
    longitude: "89.636174",
    url: "www.kurigram.gov.bd",
  },
  {
    id: "61",
    division_id: "8",
    location: "Sherpur",
    bn_location: "শেরপুর",
    latitude: "25.0204933",
    longitude: "90.0152966",
    url: "www.sherpur.gov.bd",
  },
  {
    id: "62",
    division_id: "8",
    location: "Mymensingh",
    bn_location: "ময়মনসিংহ",
    latitude: "24.7465670",
    longitude: "90.4072093",
    url: "www.mymensingh.gov.bd",
  },
  {
    id: "63",
    division_id: "8",
    location: "Jamalpur",
    bn_location: "জামালপুর",
    latitude: "24.937533",
    longitude: "89.937775",
    url: "www.jamalpur.gov.bd",
  },
  {
    id: "64",
    division_id: "8",
    location: "Netrokona",
    bn_location: "নেত্রকোণা",
    latitude: "24.870955",
    longitude: "90.727887",
    url: "www.netrokona.gov.bd",
  },
];

export default districtData;
