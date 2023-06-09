// React native
import { TouchableOpacity, View, Text, Image } from "react-native";
// Componentes
import { Button } from "../../components/Button";
// Outros
import { CaretLeft } from "phosphor-react-native"
// Styles
import { styles } from "./styles";
import { THEME } from "../../theme";
// Images
import SpotifyLogo from "../../assets/Logo.svg"
import LogoOnImage from "../../assets/logonImage.png"
import DetailsTop from "../../assets/detailsTop.png"
import DetailsBottom from "../../assets/detailsBottom.png"

import { useNavigation } from '@react-navigation/native'

export function Logon() {
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate('register')
  }

  function handleSignIn() {
    navigation.navigate('signIn')
  }

  function handleGoBack(){
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} activeOpacity={0.6} onPress={handleGoBack}>
          <CaretLeft size={24} color={THEME.COLORS.GRAY[400]} />
        </TouchableOpacity>
      </View>


      <View style={styles.content}>
        <SpotifyLogo width={235} height={71} />

        <Text style={styles.primary}>
          Enjoy listening to music
        </Text>

        <Text style={styles.secondary}>
          Spotify is a proprietary Swedish audio streaming and media services provider
        </Text>


        <View style={styles.contentButtons}>

          <View style={styles.register}>
            <Button title="Register" onPress={handleRegister}/>
          </View>

          <TouchableOpacity style={styles.signIn} activeOpacity={0.6} onPress={handleSignIn}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>

        </View>
      </View>

      <Image style={{ position: "absolute", top: 460 }} source={LogoOnImage} />
      <Image style={{ position: "absolute", left: 270 }} source={DetailsTop} />
      <Image style={{ position: "absolute", left: 280, bottom: -2 }} source={DetailsBottom} />
    </View>
  );
}