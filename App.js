import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const toggleModalHandler = () => {
    setModalIsVisible((previousModalState) => !previousModalState);
  };

  const addGoalHandler = (enteredGoalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    setModalIsVisible((previousModalState) => !previousModalState);
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#8500ff"
          onPress={toggleModalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={toggleModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  item={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 10
  },
});
