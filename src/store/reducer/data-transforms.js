import {
  fieldsIntToString,
  topicToField,
  topicTohauptthema
} from "../../util/utility";

/* the property "Forschungsthema, Expertise, Kompetenzen" of projects is split into "hauptthema" and "forschungsbereich" by which they are later sorted. the date format is changed and the research regions of a project are translated into continents */
export const processProjectsData = state => {
  const projectData = state.projects;
  return projectData.map(project => {
    let topic = project.title.trim();
    let fb = topicToField(topic);
    let rb = topicTohauptthema(topic);
    return {
      ...project,
      hauptthema: rb,
      forschungsbereichStr: fieldsIntToString(fb),
      forschungsbereich: fb,
      timeframe: [2010, 2020]
    };
  });
};
