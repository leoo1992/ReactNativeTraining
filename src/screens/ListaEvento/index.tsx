import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

interface ListaEventoProps {
  route: {
    params: {
      eventData: {
        nameEvent: string;
        dateEvent: string;
        participants: string[];
      };
    };
  };
}

export function ListaEvento({ route }: ListaEventoProps) {
  const navigation = useNavigation();
  const { eventData } = route.params || {};

  const [eventList, setEventList] = useState<
    Array<{
      nameEvent: string;
      dateEvent: string;
      participants: string[];
    }>
  >([]);

  useEffect(() => {
    if (eventData) {
      setEventList((prevEvents) => [...prevEvents, eventData]);
    }
  }, [eventData]);

  const handleDeleteEvent = (index: number) => {
    const updatedEventList = [...eventList];
    updatedEventList.splice(index, 1);
    setEventList(updatedEventList);
  };

  return (
    <>
      {eventData ? (
        <View style={styles.containerApp2}>
          <FlatList
            data={eventList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.containerEvent}>
                <Text>
                  <Text style={styles.textEvent}>Nome: </Text>
                  <Text style={styles.textEvent2}>{item.nameEvent}</Text>
                </Text>
                <Text>
                  <Text style={styles.textEvent}>Data: </Text>
                  <Text style={styles.textEvent2}>{item.dateEvent}</Text>
                </Text>
                <Text style={styles.textEvent}>Participantes:</Text>
                <FlatList
                  style={styles.listParticipants}
                  data={item.participants}
                  keyExtractor={(participant, participantIndex) =>
                    participantIndex.toString()
                  }
                  renderItem={({
                    item: participant,
                    index: participantIndex,
                  }) => (
                    <View style={styles.containerParticipants}>
                      <Icon
                        name="person-pin"
                        size={20}
                        color="lime"
                        style={styles.icon}
                      />
                      <Text style={styles.textEvents} key={participantIndex}>
                        {participant}
                      </Text>
                    </View>
                  )}
                />
                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => handleDeleteEvent(index)}
                >
                  <Icon
                    name="delete"
                    color="red"
                    style={styles.iconDelete}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
          <TouchableOpacity
            style={styles.buttonPlus}
            onPress={() => {
              navigation.navigate("Agendamento");
            }}
          >
            <Icon name="add" size={50} color="lime" style={styles.iconPlus} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.containerApp}>
          <Text style={styles.textEventEmpty}>Não há eventos cadastrados</Text>
          <TouchableOpacity
            style={styles.buttonPlus}
            onPress={() => {
              navigation.navigate("Agendamento");
            }}
          >
            <Icon name="add" size={50} color="lime" style={styles.iconPlus} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
