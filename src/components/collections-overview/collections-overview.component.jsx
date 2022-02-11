import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { CollectionsOverviewContainer } from "./collections-overview.styles";
import CollectionsContext from "../../contexts/collections/collections.context";

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    key => collectionsMap[key]
  );

  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  )
};

export default CollectionsOverview;
