import React from "react";
import BabyNameData from "./babyNamesData.json";
// function for showing all baby
const BabyName = () => {
  return (
    <div class="allBabyName">
      {BabyNameData.map((name, index) => {
        return (
          <div>
            <p className={name.sex === "m" ? "boy" : "girl"}>{name.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BabyName;
