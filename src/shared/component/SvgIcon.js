import React from "react";
import { ReactComponent as Case } from "../../assets/Icon/Case.svg";
import { ReactComponent as Arrow } from "../../assets/Icon/Arrow.svg";
import { ReactComponent as Hand } from "../../assets/Icon/Hand.svg";
import { ReactComponent as Close } from "../../assets/Icon/Close.svg";
import { ReactComponent as Magnifying } from "../../assets/Icon/Magnifying.svg";


const mapIcon = {
  case: Case,
  arrow:Arrow,
  hand:Hand,
  close:Close,
  magnifying:Magnifying
};

export const SVGIcon = ({ name, width = "16px", height = width, ...rest }) => {
  const MatchIcon = mapIcon[name] || null;
  if (!MatchIcon) return null;
  return <MatchIcon width={width} height={height} {...rest} />;
};

