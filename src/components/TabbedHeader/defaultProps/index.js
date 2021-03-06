import React, { useState } from 'react';
import { string } from 'prop-types';
import { View, Text, Platform } from 'react-native';

import QuizListElement from '../../QuizListElement';
import { Brandon, Jennifer, Ewa } from './cards';
import styles from '../styles';
import { Sizes } from '../../../common';
import { deviceHeight } from '../../../common/Constants';

const RenderContent = ({ title }) => {
  const [contentHeight, setcontentHeight] = useState({});
  const users = [Brandon, Jennifer, Ewa];

  const onLayoutContent = (e) => {
    const contentHeightTmp = { ...contentHeight };
    contentHeightTmp[title] = e.nativeEvent.layout.height;

    setcontentHeight({ ...contentHeightTmp });
  };

  const calcMargin = () => {
    let marginBottom = 50;

    if (contentHeight[title]) {
      const padding = 24;
      const isBigContent = deviceHeight - contentHeight[title] < 0;

      if (isBigContent) {
        return marginBottom;
      }

      marginBottom =
        deviceHeight - padding * 2 - Sizes.headerHeight - contentHeight[title];

      return marginBottom;
    }

    return marginBottom;
  };
  const marginBottom = Platform.select({ ios: calcMargin(title), android: 0 });

  return (
    <View style={[styles.content, { marginBottom }]} onLayout={(e) => onLayoutContent(e, title)}>
      <Text style={styles.contentText}>{title}</Text>
      {users.map(
        (user) =>
          (title === 'Popular Quizes' || title === user.type) && (
            <QuizListElement
              key={JSON.stringify(user)}
              elements={user.cardsAmount}
              authorName={user.author}
              mainText={user.label}
              labelText={user.type}
              imageSource={user.image}
              onPress={() => {}}
              pressUser={() => {}}
            />
          )
      )}
    </View>
  );
};

RenderContent.propTypes = {
  title: string,
};

RenderContent.defaultProps = {
  title: 'Popular Quizes',
};

export default RenderContent;
