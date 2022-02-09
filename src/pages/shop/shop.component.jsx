import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";
import CollectionPageContainer from "../collection/collection.container";
import collectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { useDispatch } from "react-redux";

const ShopePage = ({ match }) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={collectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

export default ShopePage;