import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
      <Text style={styles.button}>
        {title}
      </Text>
    </TouchableOpacity>

  );
}