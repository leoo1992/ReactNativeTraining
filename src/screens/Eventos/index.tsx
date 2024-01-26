import { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BtnNavToAgendamento } from "../../components/BtnNavToAgendamento";
import DraggableFlatList, {
  ShadowDecorator,
  OpacityDecorator,
  useOnCellActiveAnimation,
} from "react-native-draggable-flatlist";

interface EventosProps {
  route: {
    params: {
      eventData: {
        index: any;
        nameEvent: string;
        dateEvent: string;
        participants: string[];
      };
    };
  };
}

export function Eventos({ route }: EventosProps | any) {
  const refFlatList = useRef(null);
  const { eventData } = route.params || {};
  const [eventList, setEventList] = useState<
    Array<{
      index: any;
      nameEvent: string;
      dateEvent: string;
      participants: string[];
    }>
  >([]);

  const handleDeleteEvent = (index: any) => {
    const updatedEventList = [...eventList];
    updatedEventList.splice(index, 1);
    setEventList(updatedEventList);
  };

  useEffect(() => {
    if (eventData) {
      setEventList((prevEvents) => [
        ...prevEvents,
        { ...eventData, index: eventList.length },
      ]);
    }
  }, [eventData]);

  const itemLista = ({ item, index, drag }: any) => {
    const { isActive } = useOnCellActiveAnimation();

    const listaDeParticipantes = ({
      item: participant,
      index: participantIndex,
    }: any) => {
      return (
        <View style={styles.containerParticipants}>
          <Icon name="person-pin" size={20} color="lime" style={styles.icon} />
          <Animated.Text style={styles.textEvents} key={participantIndex}>
            {participant}
          </Animated.Text>
        </View>
      );
    };

    return (
      <OpacityDecorator activeOpacity={0.5}>
        <ShadowDecorator>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              elevation: isActive ? 30 : 0,
              opacity: isActive ? 0.5 : 1,
            }}
          >
            <View style={styles.containerEvent}>
              <View style={{ flex: 1 }}>
                <Animated.Text>
                  <Animated.Text style={styles.textEvent}>Nome: </Animated.Text>
                  <Animated.Text style={styles.textEvent2}>
                    {item.nameEvent}
                  </Animated.Text>
                </Animated.Text>
                <Animated.Text>
                  <Animated.Text style={styles.textEvent}>Data: </Animated.Text>
                  <Animated.Text style={styles.textEvent2}>
                    {item.dateEvent}
                  </Animated.Text>
                </Animated.Text>
                <Animated.Text style={styles.textEvent}>
                  Participantes:
                </Animated.Text>

                <FlatList
                  style={styles.listParticipants}
                  data={item.participants}
                  keyExtractor={(participant, participantIndex) =>
                    participantIndex.toString()
                  }
                  renderItem={listaDeParticipantes}
                />
              </View>

              <View style={{ justifyContent: "space-between" }}>
                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => handleDeleteEvent(index)}
                >
                  <Icon name="delete" color="red" style={styles.iconDelete} />
                </TouchableOpacity>

                <TouchableOpacity onLongPress={drag}>
                  <MaterialCommunityIcons
                    name="arrow-up-down-bold"
                    style={styles.dragIndicator}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </ShadowDecorator>
      </OpacityDecorator>
    );
  };

  return (
    <>
      {eventData ? (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.containerApp2}>
            <DraggableFlatList
              ref={refFlatList}
              data={eventList}
              keyExtractor={(item, index) => index.toString()}
              onDragEnd={({ data }) => {
                setEventList(data);
              }}
              renderItem={itemLista}
            />
            <BtnNavToAgendamento />
          </View>
        </GestureHandlerRootView>
      ) : (
        <View style={styles.containerApp}>
          <Text style={styles.textEventEmpty}>Não há eventos cadastrados</Text>
          <BtnNavToAgendamento />
        </View>
      )}
    </>
  );
}
