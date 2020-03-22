import { useState, useEffect } from "react";

export const useSearch = (query, searchItems) => {
  const [items, setListItems] = useState([]);

  useEffect(() => {
    const listItems = [];
    const lowCaseQuery = query.toLowerCase();

    Object.keys(searchItems).map(country =>
      searchItems[country].forEach(city => {
        if (city.toLowerCase().startsWith(lowCaseQuery)) {
          const markedCity = city.replace(
            new RegExp(lowCaseQuery, "i"),
            match => `<b>${match}</b>`
          );
          listItems.push(
            `${markedCity}, <span class='text-offset'>${country}</span>`
          );
        }
      })
    );
    setListItems(listItems);
  }, [query]);

  return items;
};
