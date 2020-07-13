import {
  fieldsIntToString,
  topicToField,
  topicTohauptthema,
  continents,
  translateLanguage
} from "../../util/utility";

/* the property "Forschungsthema, Expertise, Kompetenzen" of categories is split into "hauptthema" and "forschungsbereich" by which they are later sorted. the date format is changed and the research regions of a category are translated into continents */
export const processCategoriesData = (categories, timeData) => {
  return categories.map(category => {
    let topic = category.title.trim();
    let fb = topicToField(topic);
    let rb = topicTohauptthema(topic);
    let years = [];
    for (let year in timeData) {
      if (timeData[year].subject_area[topic]) {
        years.push(timeData[year].subject_area[topic]);
      } else if (timeData[year].research_area[topic]) {
        years.push(timeData[year].research_area[topic]);
      } else if (timeData[year].review_board[topic]) {
        years.push(timeData[year].review_board[topic]);
      }
    }
    return {
      ...category,
      hauptthema: rb,
      forschungsbereichStr: fieldsIntToString(fb),
      forschungsbereich: fb,
      timeframe: years,
      title_lang: translateLanguage(topic),
      fb_lang: translateLanguage(fieldsIntToString(fb)),
      rb_lang: translateLanguage(rb)
    };
  });
};

const edgesFromClique = clique => {
  let pairs = [];
  clique.forEach((v1, i) => {
    clique.slice(i + 1).forEach(v2 => {
      pairs.push([v1, v2]);
    });
  });
  return pairs;
};

export const processGeoData = geoData => {
  let institutions = geoData
    .map(con =>
      con.institution_ids.map((id, i) => ({
        id: id,
        latlon: con.geo_jsons[i],
        name: con.names[i],
        continent: con.continents[i]
      }))
    )
    .flat();
  let institutionIds = [...new Set(institutions.map(i => i.id))];
  institutions = institutionIds
    .map(id => institutions.find(inst => inst.id === id))
    .filter(inst => inst.latlon && inst.latlon.length === 2);

  let projects = geoData.map(project => ({
    id: project.id[0],
    institutions: project.names.map((name, i) => [name, project.continents[i]])
  }));

  let continentsForView = continents.map(c => ({
    ...c,
    projectsCount: geoData.filter(connection =>
      connection.continents.includes(c.name)
    ).length,
    institutionCount: institutions.filter(inst => inst.continent === c.name)
      .length
  }));

  let continentConnections = [];
  geoData
    .filter(project => project.continents.length > 1)
    .forEach(project => {
      continentConnections = continentConnections.concat(
        edgesFromClique([...new Set(project.continents)])
      );
    });
  let consForView = [];
  continentConnections.forEach(con => {
    if (con[0] && con[1]) {
      const key = JSON.stringify([con[0], con[1]].sort());
      if (!consForView[key]) {
        consForView[key] = {
          start: continents.find(c => con[0] === c.name).anchorPoint,
          end: continents.find(c => con[1] === c.name).anchorPoint,
          weight: 1,
          name: con[0] + "|" + con[1]
        };
      } else {
        consForView[key].weight += 1;
      }
    }
  });

  return {
    projects: projects,
    institutions: institutions,
    connections: consForView,
    continents: continentsForView
  };
};
