// React native componentes
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { useState } from "react";
// Estilização
import { styles } from "./styles";
import { THEME } from "../../theme";
// Libs
import { EyeSlash, Eye, CaretLeft } from "phosphor-react-native"
// Outros
import SpotifyLogo from "../../assets/Logo.svg"
// Components
import { Button } from "../../components/Button";
import { Separator } from "../../components/Separator";
import { SocialButtons } from "../../components/SocialButtons";
import { useNavigation } from "@react-navigation/native"

export function SignIn() {
  const navigation = useNavigation();
  
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);


  function showPassword() {
    setIsPasswordHidden(!isPasswordHidden)
  }

  function handleUsernameFocus() {
    setIsUsernameFocused(true);
  }

  function handleUsernameBlur() {
    setIsUsernameFocused(false);
  }

  function handlePasswordFocus() {
    setIsPasswordFocused(true);
  }

  function handlePasswordBlur() {
    setIsPasswordFocused(false);
  }

  function handleGoBack(){
    navigation.goBack()
  }

  function handleMusicPage(){
    navigation.navigate('nowPlaying')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} activeOpacity={0.6} onPress={handleGoBack}>
          <CaretLeft size={24} color={THEME.COLORS.GRAY[400]} />
        </TouchableOpacity>

        <SpotifyLogo width={108} height={33} />

        {/* View criada só para dar o espaçamento correto entre os 3 elementos */}
        <View style={{ width: 32, height: 32 }} />

      </View>


      <View style={styles.content}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subTitle}>If you need any support click here</Text>
      </View>


      <View style={styles.inputContainer}>
        <View style={[styles.inputContent, isUsernameFocused && styles.inputContentFocused]}>
          <TextInput
            selectionColor={THEME.COLORS.GREEN_TEXT}
            placeholder="Enter username or e-mail"
            placeholderTextColor={THEME.COLORS.GRAY[700]}

            style={styles.input}

            onFocus={handleUsernameFocus}
            onBlur={handleUsernameBlur}
            onChangeText={setUsername}
            value={username}
          />
        </View>

        <View style={[styles.inputContent, isPasswordFocused && styles.inputContentFocused]}>
          <TextInput
            secureTextEntry={isPasswordHidden ? true : false}
            placeholder="Password"
            selectionColor={THEME.COLORS.GREEN_TEXT}
            placeholderTextColor={THEME.COLORS.GRAY[700]}
            style={styles.input}

            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity onPress={showPassword}>

            {
              isPasswordHidden ?
                <Eye size={24} color={THEME.COLORS.GRAY[700]} />
                :
                <EyeSlash size={24} color={THEME.COLORS.GRAY[700]} />
            }

          </TouchableOpacity>
        </View>

        <Text style={styles.recovery}>Recovery password</Text>

      </View>

      <Button
        title="Sign in"
        onPress={handleMusicPage}
      />

      <View style={{ gap: 40 }}>
        <Separator />
        <SocialButtons />

        <Text style={styles.footerText}>
          Not a member? register now
        </Text>
      </View>
    </View>
  );
}