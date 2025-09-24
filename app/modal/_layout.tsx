import { Stack } from 'expo-router';
import React from 'react';

const ModalLayout = () => {
  return (
    <Stack  screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}

export default ModalLayout