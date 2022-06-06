import React, {useState} from 'react';
import {
  Button,
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

interface CounterProps {
  name: string;
}
const Counter: React.FC<CounterProps> = ({name}) => {
  const [counter, setCounter] = useState(1);

  return (
    <View>
      <Text>
        {name}: {counter}{' '}
      </Text>
      <Button
        title="Add"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <>
      <View style={ViewStyles}>
        <Counter name="Mark" />
      </View>
      <View style={ViewStyles}>
        <TextInput style={ViewStyles} />
      </View>
    </>
  );
};

const ViewStyles: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'pink',
  borderColor: 'blue',
  borderWidth: 3,
};

export default App;
