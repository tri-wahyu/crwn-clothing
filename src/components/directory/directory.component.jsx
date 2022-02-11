import React, { useContext } from "react";

import MenuItem from "../menu-item/menu-item.components";

import DirectoryContext from "../../contexts/directory/directory.context";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => {
  const sections = useContext(DirectoryContext);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  )
};

export default Directory;
