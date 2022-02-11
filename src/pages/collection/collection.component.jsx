import React, { useContext } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
// import { selectCollection } from "../../redux/shop/shop.selector";
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from "./collection.styles";
import CollectionsContext from "../../contexts/collections/collections.context"

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collections = useContext(CollectionsContext);
    // const collection = useSelector(selectCollection(collectionId));
    const collection = collections[collectionId];
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{ title }</CollectionTitle>
            <CollectionItemsContainer>
            {
                items.map( (item) =>(
                    <CollectionItem key={ item.id } item={item} className="collection-item"/>
                ))
            }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
};

export default CollectionPage;