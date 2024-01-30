import React from "react";
import { View, TouchableOpacity, Animated, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ShadowDecorator,
  OpacityDecorator,
  useOnCellActiveAnimation,
} from "react-native-draggable-flatlist";
import ListaParticipantesEvento from "../../components/ListaParticipantesEvento";
import { styles } from "./styles";

const ItemLista = ({ item, index, drag, handleDeleteEvent }: any) => {
  const { isActive } = useOnCellActiveAnimation();

  return (
    <OpacityDecorator activeOpacity={0.5}>
      <ShadowDecorator>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            elevation: isActive ? 30 : 0,
            opacity: isActive ? 0.5 : 1,
            margin: 0,
            padding: 0,
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
                renderItem={({ item, index }) => (
                  <ListaParticipantesEvento
                    participant={item}
                    participantIndex={index}
                  />
                )}
              />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                padding: 0,
                margin: 0,
              }}
            >
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => handleDeleteEvent(item.index)}
              >
                <MaterialCommunityIcons
                  name="delete-outline"
                  color="red"
                  style={styles.iconDelete}
                />
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

export default ItemLista;
