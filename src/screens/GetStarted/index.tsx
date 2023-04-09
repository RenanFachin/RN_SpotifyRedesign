// Componentes React-native
import { View, Image, Text } from 'react-native';

// Estilizações
import { styles } from './styles';

// Outros
import background from '../../assets/bg-getStarted.png'
import SpotifyLogo from '../../assets/Logo.svg'
import { Button } from '../../components/Button';

export function GetStarted() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={background}
      />

      <SpotifyLogo
        style={{ marginTop: 90 }}
        width={196}
        height={59}
      />


      <View style={styles.content}>
        <Text style={styles.primary}>
          Enjoy listening to music
        </Text>

        <Text style={styles.secondary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.
        </Text>

        <Button
          title='Get started'
        />

      </View>
    </View>
  );
}