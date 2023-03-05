import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { deleteNotification } from "../../store/actions/shoes.actions";
import Colors from "../../constants/Colors";

const NotificationItem = ({ notification }) => {
  const dispatch = useDispatch();
  const handleDeleteNotification = () => {
    // console.log("delenoti", notification.id);
    dispatch(deleteNotification(notification.id));
  };
  return (
    <View style={styles.notificationItem}>
      <View style={{width: '95%'}}>
        <Text style={styles.notificationItemTitle}>{notification.title}</Text>
        <Text style={styles.notificationItemBody}>{notification.body}</Text>
      </View>
      <TouchableOpacity onPress={handleDeleteNotification} style={{justifyContent:'center',alignItems:'center',width:'5%'}}>
        <MaterialCommunityIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const NotificationEmpty = () => {
  return (
    <View style={styles.notificationEmpty}>
      <Text style={styles.notificationEmptyText}>
        There's nothing to notify you about currently{" "}
      </Text>
      <Text style={styles.notificationEmptyText}>
        When there's something to notify you about you'll see it here.
      </Text>
    </View>
  );
};
const NotificationsScreen = () => {
  const notifications = useSelector((state) => state.sneakers.notifications);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      <ScrollView contentContainerStyle={{ ...styles.notificationsWrapper }}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))
        ) : (
          <NotificationEmpty />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.secondary,
    color: Colors.blackPrimary,
    paddingTop: 60,
    // paddingHorizontal: 2,
  },
  text: {
    color: "#000",
  },
  notificationsWrapper: {
    // justifyContent:'center',
    alignItems: "center",
    paddingTop: 6,
  },
  notificationItem: {
    width: Dimensions.get("window").width * 0.98,
    height: 100,
    borderRadius: 8,
    padding: 6,
    backgroundColor: Colors.primaryWhiteDark,
    marginVertical: 4,
    elevation: 4,
    flexDirection:'row',
    alignItems:'center',
  },
  notificationItemTitle: {
    fontSize: 16,
    fontFamily: "syne",
    fontWeight: "600",
  },
  notificationItemBody: {
    fontSize: 13,
    fontFamily: "tenor-sans",
    fontWeight: "500",
  },
  notificationEmpty: {
    backgroundColor: Colors.primaryWhite,
    padding: 6,
    marginTop: Dimensions.get("window").height * 0.35,
    borderRadius: 2,
  },
  notificationEmptyText: {
    marginVertical: 8,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 0.05 * Dimensions.get("window").height,
    backgroundColor: Colors.primaryWhite,
  },
  headerText: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: "700",
  },
});

export default NotificationsScreen;
