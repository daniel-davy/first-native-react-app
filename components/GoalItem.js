import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ item, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "210644" }}
        onPress={onDeleteItem.bind(this, item.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginHorizontal: 8,
    marginVertical: 6,
    borderRadius: 6,
    padding: 6,
    backgroundColor: "#4b2b82",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
