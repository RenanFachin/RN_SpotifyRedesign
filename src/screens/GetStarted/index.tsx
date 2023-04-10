// Componentes React-native
import { View, Image, Text } from "react-native";
// Estilizações
import { styles } from "./styles";
// Outros
import background from "../../assets/bg-getStarted.png"
import SpotifyLogo from "../../assets/Logo.svg"
// Componentes
import { Button } from "../../components/Button";

import { useNavigation } from '@react-navigation/native'

export function GetStarted() {
  const navigation = useNavigation();

  function handleGetStarted(){
    navigation.navigate('logon')
  }

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
          title="Get started"
          onPress={handleGetStarted}
        />

      </View>
    </View>
  );
}