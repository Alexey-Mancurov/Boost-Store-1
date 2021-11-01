import { useState } from "react";
import ExtraOptions from "./ExtraOptions";
import Price from "./Price";

const PersonalMissionEnd = (props) => {
  const [checkedOptions, setCheckedOptions]=useState([])

  const getCheckedOptions = (e)=>{
    setCheckedOptions((checkedOptions)=>[...checkedOptions, e])
  }

  return (
    <div className="matchmaking__card3-item matchmaking__card3-end">
      <div className="matchmaking__card3-item-box">
        {props.isExtraOptions ? <ExtraOptions isExtraOptions={props.isExtraOptions} getCheckedOptions={getCheckedOptions} extraOptions={props.extraOptions}/> : ""}

        <Price />
      </div>
    </div>
  );
};

export default PersonalMissionEnd;
