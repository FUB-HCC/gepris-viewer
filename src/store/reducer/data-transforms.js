import {
  fieldsIntToString,
  topicToField,
  topicTohauptthema
} from "../../util/utility";

/* the property "Forschungsthema, Expertise, Kompetenzen" of categories is split into "hauptthema" and "forschungsbereich" by which they are later sorted. the date format is changed and the research regions of a category are translated into continents */
export const processCategoriesData = state => {
  const categoryData = state.categories;
  return categoryData.map(category => {
    let topic = category.title.trim();
    let fb = topicToField(topic);
    let rb = topicTohauptthema(topic);
    let years = [];
    for (let year in state.timeData) {
      if (
        state.timeData[year].subject_area[topic] > 0 ||
        state.timeData[year].research_area[topic] > 0 ||
        state.timeData[year].review_board[topic] > 0
      ) {
        years.push(parseInt(year));
      }
    }
    return {
      ...category,
      hauptthema: rb,
      forschungsbereichStr: fieldsIntToString(fb),
      forschungsbereich: fb,
      timeframe: years
    };
  });
};
