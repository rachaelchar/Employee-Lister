import React from 'react';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';


export default function SortIcon(props) {
  return(
    <SortByAlphaIcon
    className="float-right"
    onClick={props.clickSortIcon}
    />
  );
}

