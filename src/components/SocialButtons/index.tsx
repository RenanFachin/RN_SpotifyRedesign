import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import GoogleLogo from '../../assets/googleIcon.svg'
import ApppleLogo from '../../assets/appleIcon.svg'

export function SocialButtons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <GoogleLogo />
      </TouchableOpacity>

      <TouchableOpacity>
        <ApppleLogo />
      </TouchableOpacity>
    </View>
  );
}