import React, {useEffect} from 'react';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

const Timer = ({time = 1}) => {
  const width = useSharedValue(10);
  useEffect(() => {
    if (time === 1) {
      width.value = withSpring(10);
    } else {
      width.value = withSpring(width.value + 10);
    }
  }, [time]);

  return (
    <Animated.View
      style={{
        width: width,
        height: 20,
        backgroundColor: 'violet',
        borderRadius: 10,
        marginVertical: 20,
      }}></Animated.View>
  );
};
export default Timer;
