import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";
import CollectionPageContainer from "../collection/collection.container";
import collectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
class ShopePage extends React.Component {
    componentDidMount(){
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync();
    }

    render () {
        const { match } = this.props;
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
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopePage);