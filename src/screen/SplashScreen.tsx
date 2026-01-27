import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ onFinish }:any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
      const scaleAnim = useRef(new Animated.Value(0.8)).current; // Initial scale 0.8

  useEffect(() => {
     Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800, // fade in duration
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

   const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // fade out duration
        useNativeDriver: true,
      }).start(() => onFinish()); // Notify parent after fade out
    }, 1500);


    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/as-splash.png')}
        style={[
          styles.image,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim as unknown as number }], // fix typing
          },
        ]}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // match your splash bg color
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '50%',
    borderTopLeftRadius:30,
    borderBottomRightRadius:30
  },
});

export default SplashScreen;
