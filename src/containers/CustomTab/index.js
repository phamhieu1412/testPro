import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  TextInput,
  Dimensions,
} from 'react-native'
import StickyParallaxHeader from 'react-native-sticky-parallax-header'

import styles from './styles';
import { IconIO } from '../../Omni';

const { event, ValueXY } = Animated;
const scrollY = new ValueXY();
const windowWidth = Dimensions.get('window').width;

const text = {
  biography: `The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price.
  The assassin droid IG-11 was also dispatched to terminate him. After working together to storm the encampment the infant was being held in, the Mandalorian and IG-11 found the Child. IG-11 then attempted to terminate the Child. The Mandalorian shot the droid before the he was able to assassinate the Child.
  Shortly after, the Mandalorian took the Child back to his ship. On the way they were attacked by a trio of Trandoshan bounty hunters, who attempted to kill the Child. After the Mandalorian defeated them, he and the Child camped out in the desert for the night. While the Mandalorian sat by the fire, the Child ate one of the creatures moving around nearby. He then approached the bounty hunter and attempted to use the Force to heal one of the Mandalorian's wounds. The Mandalorian stopped him and placed him back into his pod. The next day, the pair made it to the Razor Crest only to find it being scavenged by Jawas. The Mandalorian attacked their sandcrawler for the scavenged parts and attempted to climb it while the Child followed in his pod. However, the Mandalorian was knocked down to the ground`,
  powers: "Powers and Abilities",
  appearances: "Appearances"
}

const CustomTab = () => {
  const renderContent = x => (
    <View
      style={styles.contentContiner}>
      <Text style={styles.contentText}>{x}</Text>
      <Image source={require('../../images/banner/orderDetailBanner2x.png')} />
    </View>
  )

  const renderHeader = () => {
    const width = scrollY.y.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [
        (windowWidth - 15 - 15 - 25 - 5 - 5) * 0.8,
        (windowWidth - 15 - 15 - 25 - 5 - 5) * 0.4,
        (windowWidth - 15 - 15 - 25 - 5 - 5) * 0,
      ],
      // extrapolate: 'clamp',
    })

    return (
      <View
        style={styles.headerCotainer}>
        <View style={styles.headerWrapper}>
          {/* Left */}
          <View style={styles.headerLeftWrapper}>
            <TouchableOpacity onPress={() => console.log('CLICKED')}>
              <IconIO
                name="md-search"
                style={{ color: 'white', padding: 5 }}
                resizeMode="contain"
                size={25}
              />
            </TouchableOpacity>
            <Animated.View style={{ backgroundColor: 'green', width }}>
              <TextInput
                placeholder="xxx"
                style={{ padding: 5, backgroundColor: 'gray' }}
              />
            </Animated.View>
          </View>

          {/* right */}
          <View style={styles.headerRightWrapper}>
            <IconIO
              name="md-notifications-outline"
              style={[
                { color: 'white' },
              ]}
              resizeMode="contain"
              size={25}
            />
            <IconIO
              name="md-power"
              style={[
                { color: 'white' },
              ]}
              resizeMode="contain"
              size={25}
            />
          </View>
          {/* <Animated.View style={{ width }}>
            <Text
              style={styles.headerText}>
              Baby Yoda
            </Text>
          </Animated.View> */}
        </View>
      </View>
    )
  }

  const renderBackgroundImage = () => {
    return (
      <TouchableOpacity onPress={()=>console.log('asdasa')} >
        <Text>
        'Baby Yoda'
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <StickyParallaxHeader
      bounces={false}
      headerType="TabbedHeader"
      backgroundImage={require('../../images/banner/orderDetailBanner2x.png')}
      parallaxHeight={200}
      backgroundColor={'white'}
      header={renderHeader}
      renderBody={renderBackgroundImage}
      title={'Baby Yoda'}
      foregroundImage={require('../../images/banner/orderDetailBanner2x.png')}
      // tabs={[
      //   {
      //     title: 'Biography',
      //     content: renderContent(text.biography)
      //   },
      // ]}
      titleStyle={styles.titleStyle}
      tabTextContainerStyle={styles.tabTextContainerStyle}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabWrapperStyle={styles.tabWrapperStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      scrollEvent={event(
        [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
        { useNativeDriver: false }
      )}
      parallaxHeight={100}
      transparentHeader={false}
    />
  )
}
export default CustomTab