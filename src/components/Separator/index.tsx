import { View, Text } from 'react-native';

import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

export function Separator() {
  return (
    <View style={styles.separator}>
      <LinearGradient
        colors={['#5B5B5B', '#252525']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1, flex: 1 }}
      />

      <Text style={
        {
          fontSize: 12,
          lineHeight: 16,
          fontFamily: THEME.FONT_FAMILY.REGULAR,
          color: THEME.COLORS.GRAY[600]
        }}>
        Or
      </Text>

      <LinearGradient
        colors={['#5B5B5B', '#252525']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={{ height: 1, flex: 1 }}
      />
    </View>
  );
}