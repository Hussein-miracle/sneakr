import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import LikedSneakr from "../../components/liked-sneakr/LikedSneakr";

const NoLikes = ({navigation}) => {
  const handlePress = () => {
    console.log('start likmen')
    navigation.navigate('Products');
  }
  return (
    <View style={styles.noLikes}>
      <Text style={styles.noLikesTitle}>You don't have any liked sneakrs yet.</Text>

      <TouchableOpacity style={styles.noLikesBtn} onPress={handlePress} activeOpacity={0.95}>
        <Text style={styles.noLikesBtnText}>Start Liking</Text>
      </TouchableOpacity>
    </View>
  );
};

const LikedSneakersScreen = ({ navigation }) => {
  const likedSneakers = useSelector((st) => st.sneakers.likes);

  const handleHome = () => {
    navigation.navigate("Products");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Likes</Text>
      </View>
      {likedSneakers.length > 0 ? (
        <FlatList
          data={likedSneakers}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: 10,
          }}
          numColumns={1}
          renderItem={({ item }) => {
            return <LikedSneakr item={item} {...{ navigation }} />;
          }}
        />
      ) : (
        <NoLikes navigation={navigation}/>
      )}
    </View>
  );
};

export const LikedSneakersScreenOptions = () => {
  return {
    headerTitle: "Likes",
    headerShown: true,
    tabLabelShown: !false,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: "lightgreen",
    color: Colors.blackPrimary,
    paddingTop: 60,
    // paddingHorizontal: 2,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    backgroundColor: Colors.secondary,
  },
  headerText: {
    color: Colors.primaryWhite,
    fontSize: 18,
    fontWeight: "700",
  },
  noLikes:{
    alignSelf:'center',
    borderRadius:6,
    backgroundColor: Colors.secondary,
    marginTop:0.015 * Dimensions.get('window').height,
    height:0.15 * Dimensions.get('window').height,
    width: 0.96 * Dimensions.get('window').width,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  noLikesTitle:{
    color:Colors.primaryWhite,
  },
  noLikesBtn:{
    backgroundColor:Colors.primaryWhiteDark,
    padding:4,
    borderRadius:3,
  },
  noLikesBtnText:{
    color:Colors.blackPrimary,
    fontWeight:'400'
  }
});

export default LikedSneakersScreen;
