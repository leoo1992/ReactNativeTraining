import { useState, useEffect, useRef } from "react";
import { EventosProps } from "./";

 export const ViewController = ({ route }: EventosProps | any) => {
  const refFlatList = useRef(null);
  const { eventData } = route.params || {};
  const [openDialog, setOpenDialog] = useState(false);
  const [confirmRemoveEvent, setConfirmRemoveEvent] = useState<{
    value: boolean;
    index: any;
  }>({ value: false, index: null });
  const [eventList, setEventList] = useState<
    Array<{
      index: any;
      nameEvent: string;
      dateEvent: string;
      participants: string[];
    }>
  >([]);

  const indexCounter = useRef(0);

  const handleDeleteEvent = (index: any) => {
    setConfirmRemoveEvent({ value: true, index });
    setOpenDialog(true);
  };

  useEffect(() => {
    if (eventData) {
      setEventList((prevEvents) => [
        ...prevEvents,
        { ...eventData, index: indexCounter.current },
      ]);
      indexCounter.current += 1;
    }
  }, [eventData]);

  const ConfirmDelete = () => {
    if (confirmRemoveEvent.value) {
      const updatedEventList = eventList.filter(
        (event) => event.index !== confirmRemoveEvent.index
      );
      setEventList(updatedEventList);
    }
    setOpenDialog(false);
  };

  return {
    refFlatList,
    openDialog,
    confirmRemoveEvent,
    eventList,
    handleDeleteEvent,
    ConfirmDelete,
    setOpenDialog,
    setEventList,
    setConfirmRemoveEvent
  };
};
