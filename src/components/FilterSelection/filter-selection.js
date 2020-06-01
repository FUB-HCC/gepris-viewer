import React from "react";
import { connect } from "react-redux";
import FilterSet from "./filter-set-view";
import { checkboxFilterChange } from "../../store/actions/actions";
import style from "./filter-selection.module.css";
import { hauptthemaToField } from "../../util/utility";

/* filter sets for browser version. highlevel fiters are fixed, subfilters dependend on the data */
const getFilterSets = state => {
  return [
    {
      name: "Forschungsgebiet",
      subsets: [
        {
          name: "Naturwissenschaften",
          nameId: 1,
          filterId: "forschungsgebiet",
          isTogglable: true,
          subFilters: state.main.filters.hauptthema.uniqueVals.filter(
            val => hauptthemaToField(val) === 1
          ),
          subFilterId: "hauptthema"
        },
        {
          name: "Lebenswissenschaften",
          nameId: 2,
          filterId: "forschungsgebiet",
          isTogglable: true,
          subFilters: state.main.filters.hauptthema.uniqueVals.filter(
            val => hauptthemaToField(val) === 2
          ),
          subFilterId: "hauptthema"
        },
        {
          name: "Geistes- und Sozialwissenschaften",
          nameId: 3,
          filterId: "forschungsgebiet",
          isTogglable: true,
          subFilters: state.main.filters.hauptthema.uniqueVals.filter(
            val => hauptthemaToField(val) === 3
          ),
          subFilterId: "hauptthema"
        },
        {
          name: "Ingenieurwissenschaften",
          nameId: 4,
          filterId: "forschungsgebiet",
          isTogglable: true,
          subFilters: state.main.filters.hauptthema.uniqueVals.filter(
            val => hauptthemaToField(val) === 4
          ),
          subFilterId: "hauptthema"
        }
      ]
    }
  ];
};

const FilterSelection = props => (
  <div className={style.filterSelectionWrapper}>
    {props.filterSets.map(filterSet => (
      <FilterSet
        filters={props.filters}
        set={filterSet}
        changeFilter={props.filterChangeHandler}
        key={filterSet.name}
      />
    ))}
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    filterChangeHandler: (filterId, value, form) => {
      dispatch(checkboxFilterChange(filterId, value, form));
    }
  };
};

const mapStateToProps = state => {
  return {
    filterSets: getFilterSets(state),
    filters: state.main.filters
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelection);
