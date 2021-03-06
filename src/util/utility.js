/* all kinds of helper functions and fixed data arrays (e.g. for ordering or colouring elements) */
const forschungsthemen = require("../assets/subject_language_data.json");
const fieldsMapping = [
  { name: "Naturwissenschaften", field: 1, color: "#ad494a" },
  { name: "Lebenswissenschaften", field: 2, color: "#e69e57" },
  { name: "Geistes- und Sozialwissenschaften", field: 3, color: "#14a5b5" },
  { name: "Ingenieurwissenschaften", field: 4, color: "#9467bd" }
];

export const continents = [
  {
    name: "North America",
    xOffset: 61.4,
    yOffset: 53.1,
    mapWidth: 378,
    mapHeight: 384,
    longMin: -168.1311,
    longMax: -11.39,
    latMin: 7.322,
    latMax: 83.5702,
    institutionCount: 0,
    anchorPoint: 1 / 12,
    centroidX: -89.76055,
    centroidY: 45.4461
  },
  {
    name: "South America",
    xOffset: 150,
    yOffset: 96,
    mapWidth: 180,
    mapHeight: 384,
    longMin: -81.2897,
    longMax: -26.2463,
    latMin: -59.473,
    latMax: 12.6286,
    institutionCount: 0,
    anchorPoint: 3 / 12,
    centroidX: -53.768,
    centroidY: -23.4222
  },
  {
    name: "Europe",
    xOffset: 97.8,
    yOffset: 48.4,
    mapWidth: 292,
    mapHeight: 384,
    longMin: -10.6,
    longMax: 40.166,
    latMin: 34.8888,
    latMax: 71.27,
    institutionCount: 0,
    anchorPoint: 5 / 12,
    centroidX: 14.783,
    centroidY: 53.0794
  },
  {
    name: "Asia",
    xOffset: 63.1,
    yOffset: 55.4,
    mapWidth: 383,
    mapHeight: 387,
    longMin: 20.01,
    longMax: 189.82,
    latMin: -22.147,
    latMax: 81.328,
    institutionCount: 0,
    anchorPoint: 7 / 12,
    centroidX: 104.915,
    centroidY: 29.5905
  },
  {
    name: "Africa",
    xOffset: 75.8,
    yOffset: 61.2,
    mapWidth: 348,
    mapHeight: 394,
    longMin: -17.537,
    longMax: 51.412,
    latMin: -34.822,
    latMax: 37.34,
    institutionCount: 0,
    anchorPoint: 9 / 12,
    centroidX: 16.9375,
    centroidY: 1.259
  },
  {
    name: "Australia",
    xOffset: 120,
    yOffset: 135,
    mapWidth: 330,
    mapHeight: 400,
    longMin: 112.9511,
    longMax: 159.1019,
    latMin: -54.749,
    latMax: -10.0516,
    institutionCount: 0,
    anchorPoint: 11 / 12,
    centroidX: 136.0265,
    centroidY: -32.4003
  }
];

export const fieldsIntToString = number => {
  if (isNaN(number)) return number;
  return fieldsMapping.find(e => e.field === number)
    ? fieldsMapping.find(e => e.field === number).name
    : number;
};

export const fieldsStringToInt = str => {
  return fieldsMapping.find(e => e.name === str)
    ? fieldsMapping.find(e => e.name === str).field
    : 99;
};

export const hauptthemaIntToString = number => {
  return forschungsthemen.map(e => e.review_board)[number]
    ? forschungsthemen[number]
    : number;
};

export const hauptthemaStringToInt = str => {
  return forschungsthemen.find(e => e.review_board === str)
    ? forschungsthemen.map(e => e.review_board).indexOf(str)
    : str;
};

export const topicStringToInt = str => {
  return forschungsthemen.find(e => e.subject_area === str)
    ? forschungsthemen.map(e => e.subject_area).indexOf(str)
    : str;
};

export const topicIntToString = number => {
  return forschungsthemen.map(e => e.subject_area)[number]
    ? forschungsthemen.map(e => e.subject_area)[number]
    : number;
};

export const topicToField = topic => {
  return forschungsthemen.find(e => e.subject_area === topic)
    ? forschungsthemen.find(e => e.subject_area === topic).field
    : 99;
};

export const hauptthemaToField = hauptthema => {
  return forschungsthemen.find(e => e.review_board === hauptthema)
    ? forschungsthemen.find(e => e.review_board === hauptthema).field
    : 99;
};

export const topicTohauptthema = topic => {
  return forschungsthemen.find(e => e.subject_area === topic)
    ? forschungsthemen.find(e => e.subject_area === topic).review_board
    : 99;
};

export const getFieldColor = field => {
  return fieldsMapping.find(e => e.field === field)
    ? fieldsMapping.find(e => e.field === field).color
    : "#989aa1"; // default color field
};

export const translateLanguage = string => {
  if (window.location.pathname.includes("de")) {
    return fieldsIntToString(string);
  }
  if (forschungsthemen.find(e => e.review_board === string)) {
    return forschungsthemen.find(e => e.review_board === string)
      .review_board_eng;
  }
  if (forschungsthemen.find(e => e.field === string)) {
    return forschungsthemen.find(e => e.field === string)
      .scientific_discipline_eng;
  }
  return forschungsthemen.find(e => e.subject_area === string)
    ? forschungsthemen.find(e => e.subject_area === string).subject_area_eng
    : string;
};

export const shortenString = (string, len) => {
  return string.length > len ? string.substring(0, len) + "..." : string;
};

export const getQueryStringParams = query => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split("&")
        .reduce((params, param) => {
          let [key, value] = param.split("=");
          params[key] = value ? value : "";
          return params;
        }, {})
    : {};
};
/* filters projects according to time filter and topics/subjects filter */
export const applyFilters = (data, filter) => {
  let filteredData = data;
  Object.values(filter).forEach(f => {
    let newFilteredData = {};
    filteredData = Object.keys(filteredData).forEach(d => {
      if (f.type === "ht") {
        if (f.value.some(value => value === filteredData[d][f.filterKey]))
          newFilteredData[d] = filteredData[d];
      } else if (f.type === "timeframe") {
        let doc_count = 0;
        for (let year = f.value[0]; year < f.value[1]; year++) {
          doc_count += filteredData[d].timeframe[year - 1979].start;
        }
        filteredData[d].doc_count = doc_count;

        newFilteredData[d] = filteredData[d];
      } else {
        newFilteredData[d] = filteredData[d];
      }
    });
    filteredData = newFilteredData;
  });
  return Object.values(filteredData);
};
