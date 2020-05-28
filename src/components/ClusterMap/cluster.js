import React from "react";
import ClusterDot from "./cluster-dot";

/* Clusters are not visible in the current state of the visualization. Yet the categories are separated by clusters in the data structure as this might change again. */
const Cluster = props => {
  const {
    cluster,
    getLocation,
    radius,
    highlightedCategories,
    isTouchMode,
    filteredCategories
  } = props;
  const categories = cluster.categories.map(category => ({
    ...category,
    point: getLocation(category.mappoint),
    color: category.color,
    icon: category.icon
  }));
  return (
    <g key={cluster.id}>
      {categories.map((category, i) => (
        <ClusterDot
          point={category}
          isVisible={filteredCategories.find(c => c.title === category.title)}
          color={category.color}
          icon={category.icon}
          key={i + "category"}
          radius={radius + Math.sqrt(category.doc_count) * radius * 0.03}
          x={category.point[0]}
          y={category.point[1]}
          isHighlighted={highlightedCategories.includes(category.title)}
          isTouchMode={isTouchMode}
        />
      ))}
    </g>
  );
};

export default Cluster;
