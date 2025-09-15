import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'height' : undefined}
    >

      <ScrollView>

        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre Completo'
              onChangeText={(text) => setForm({ ...form, name: text })}
              autoCapitalize={'words'}
              autoCorrect={false}
            />

            <ThemedTextInput
              placeholder='Correo Electrónico'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

          </ThemedCard>

          <ThemedCard>
            <ThemedText className='my-2'>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
            <ThemedText className='my-2'>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
            <ThemedText className='my-2'>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
            <ThemedText className='my-2'>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
            <ThemedText className='my-2'>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
            <ThemedText className='my-2'>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
            <ThemedText className='my-2'>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
            {/* <ThemedCard style={{ marginBottom: isIOS ? 100 : 10 }}> */}
              <ThemedTextInput
                placeholder='Número de teléfono'
                autoCorrect={false}
                keyboardType='phone-pad'
                onChangeText={(text) => setForm({ ...form, phone: text })}
              />
            {/* </ThemedCard> */}
          </ThemedCard>

          {isIOS && <View style={{ marginBottom: 100 }} />}
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
