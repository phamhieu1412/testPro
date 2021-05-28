import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, RefreshControl, Text } from 'react-native';

import HList from './HList';
import styles from './styles';
import Button from '../Button/Button';

class HorizonList extends Component {
  static propTypes = {
    fetchAllProductsLayout: PropTypes.func.isRequired,
    fetchProductsByCollections: PropTypes.func,
    list: PropTypes.array,
    onShowAll: PropTypes.func,
    onViewProductScreen: PropTypes.func,
    collections: PropTypes.array,
    // setSelectedCategory: PropTypes.func,
    isFetching: PropTypes.bool.isRequired,
    showCategoriesScreen: PropTypes.func,
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   const { appConfig } = nextProps;
    // const layouts =
    //   appConfig && appConfig.homeLayout && appConfig.homeLayout.length ? appConfig.homeLayout : [];
    // if (layouts.length !== prevState.layouts.length) {
    //   prevState.fetchAllPost();
    //   return { layouts };
    // }

  //   return null;
  // }

  constructor(props) {
    super(props);

    this.state = {
      layouts: [{
        code: 1,
        predefined: "category-bubbles",
        title: "Nhóm hàng",
      }, {
        code: 2,
        predefined: "pos-based-promotion",
        title: "Khuyến mại POS",
      }, {
        code: 3,
        predefined: "hot-deal",
        title: "Khuyến mại",
      }, {
        code: 4,
        predefined: "most-purchased",
        title: "Mua nhiều",
      }, {
        code: 5,
        predefined: "pos-based-promotion",
        title: "Khuyến mại POS",
      }, {
        code: 6,
        predefined: "hot-deal",
        title: "Khuyến mại",
      }, {
        code: 7,
        predefined: "pos-based-promotion",
        title: "Khuyến mại POS",
      }, {
        code: 8,
        predefined: "hot-deal",
        title: "Khuyến mại",
      }, {
        code: 9,
        predefined: "pos-based-promotion",
        title: "Khuyến mại POS",
      }, {
        code: 10,
        predefined: "hot-deal",
        title: "Khuyến mại",
      }],
      fetchAllPost: this._fetchAllPost,
    };
  }

  // componentDidMount() {
  //   this._fetchAllPost();
  // }

  // getHomeLayout = () => {
  //   const { appConfig } = this.props;
  //   let layouts =
  //     appConfig && appConfig.homeLayout && appConfig.homeLayout.length ? appConfig.homeLayout : [];

  //   return layouts;
  // };

  /**
   * Fetch all products based on layouts
   */
  _fetchAllPost = () => {
    // if (this.props.isConnected) {
    //   this.props.fetchAllProductsLayout();
    // }
  };

  _fetchPost = ({ config, index, page }) => {
    const { fetchProductsByCollections } = this.props;
    fetchProductsByCollections(config, page, index);
  };

  _renderItem = ({ item, index }) => {
    const { layouts } = this.state;

    const {
      onShowAll,
      onViewProductScreen,
      collections,
      categoryList,
      // setSelectedCategory,
      fetchProductsByCollections,
      endReached,
      showCategoriesScreen,
      onViewCategory,
    } = this.props;

    // return (
    //   <HList
    //     horizontal
    //     onViewProductScreen={onViewProductScreen}
    //     onShowAll={onShowAll}
    //     key={`taglist-${index}`}
    //     config={item}
    //     index={index}
    //     isLast={index === layouts.length - 1}
    //     collection={layouts[index]}
    //     categoryList={categoryList}
    //     fetchPost={this._fetchPost}
    //     fetchProductsByCollections={fetchProductsByCollections}
    //     endReached={endReached}
    //     // setSelectedCategory={setSelectedCategory}
    //     showCategoriesScreen={showCategoriesScreen}
    //     onViewCategory={onViewCategory}
    //   />
    // );
    return (
      <View style={{ backgroundColor: 'pink', padding: 20, marginBottom: 20 }}>
        <Text>{item.title}</Text>
      </View>
    )
  };

  render() {
    const { layouts } = this.state;
    const { showCategoriesScreen } = this.props;

    return (
      <>
        <FlatList
          listKey={`home-layout-all`}
          data={layouts}
          keyExtractor={(item, index) => `h_${item.layout}_${index}` || `h_${index}`}
          renderItem={this._renderItem}
          scrollEventThrottle={16}
          // refreshing={isFetching}
          overScrollMode="never"
          scrollPerfTag="scrollAndroid"
          contentContainerStyle={styles.mainList}
          refreshControl={
            <RefreshControl
              // tintColor={Color.Text}
              // refreshing={isFetching}
              onRefresh={this._fetchAllPost}
            />
          }
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={showCategoriesScreen}
            text={'Xem thêm danh mục khác'}
          />
        </View>
        {/* <HomeProductList
          headerLabel={'Mặt hàng'}
          onViewProductScreen={onViewProductScreen}
          endReached={endReached}
        /> */}
      </>
    );
  }
}

export default HorizonList;
