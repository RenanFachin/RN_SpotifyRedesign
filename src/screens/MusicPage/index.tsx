import { View, TouchableOpacity, Text, Image } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../theme";

import { DotsThreeVertical, CaretLeft, Heart, Repeat, SkipBack, SkipForward, Shuffle, Pause } from 'phosphor-react-native'
import { useNavigation } from "@react-navigation/native"

import AlbumCover from '../../assets/Blink.png'
import { useState } from "react";



export function MusicPage() {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false)

  function handleGoBack() {
    navigation.goBack()
  }

  function handleFavorite() {
    setIsFavorite(!isFavorite)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} activeOpacity={0.6} onPress={handleGoBack}>
          <CaretLeft size={24} color={THEME.COLORS.GRAY[400]} />
        </TouchableOpacity>

        <Text
          style={{ color: THEME.COLORS.GRAY[400], fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: 18, lineHeight: 24 }}
        >
          Now playing
        </Text>

        <TouchableOpacity activeOpacity={0.6}>
          <DotsThreeVertical size={32} color={THEME.COLORS.GRAY[400]} />
        </TouchableOpacity>

      </View>

      <View style={{ width: '100%' }}>
        <Image source={AlbumCover} style={styles.albumCover} />
      </View>

      <View style={styles.musicDetails}>
        <View style={{ gap: 8 }}>
          <Text style={styles.musicName}>Edging</Text>
          <Text style={styles.artist}>Blink 182</Text>
        </View>

        <TouchableOpacity onPress={handleFavorite}>
          {isFavorite ?
            <Heart size={24} color={THEME.COLORS.GRAY[650]} />
            :
            <Heart size={24} color={THEME.COLORS.GREEN_BUTTON} weight="fill" />}

        </TouchableOpacity>
      </View>

      <View style={styles.player}>
        <View style={{ borderWidth: 1, borderColor: THEME.COLORS.GRAY[700] }} />

        <View style={styles.playerTimes}>
          <Text style={{ color: THEME.COLORS.GRAY[600] }}>0:00</Text>
          <Text style={{ color: THEME.COLORS.GRAY[600] }}>3:11</Text>
        </View>
      </View>

      <View style={styles.controllers}>
        <TouchableOpacity>
          <Repeat color={THEME.COLORS.GRAY[350]}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <SkipBack color={THEME.COLORS.GRAY[350]} weight="fill" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.pause}>
          <Pause color={THEME.COLORS.WHITE} weight="fill"/>
        </TouchableOpacity>

        <TouchableOpacity>
          <SkipForward color={THEME.COLORS.GRAY[350]} weight="fill" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Shuffle color={THEME.COLORS.GRAY[350]}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}