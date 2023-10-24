import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import CardQuestion from './components/CardQuestion/CardQuestion';
import NavBar from './components/NavBar/Navbar';
import MenuLateral from './components/MenuLateral/MenuLateral';

export default function App() {
  const [menu, setmenu] = useState(false);
  const [game, setgame] = useState(0);
  const [lesson, setlesson] = useState([26]);
  const [nivel, setnivel] = useState(0);

  useEffect(() => {
  }, [lesson, nivel])

  return (
    <View>
      <View style={styles.navBar}>
        <NavBar click={() => setmenu(!menu)}></NavBar>
      </View>
      {menu &&
        <MenuLateral
          lesson={lesson}
          nivel={nivel}
          setLesson={(ls) => setlesson(ls)}
          setNivel={(nv) => setnivel(nv)}>
        </MenuLateral>}

      <View style={styles.container}>
        {!game ?
          <Pressable style={styles.button} onPress={() => setgame(!game)}>
            <Text style={styles.text}>Start Game</Text>
          </Pressable>
          : <CardQuestion
            lesson={lesson}
            nivel={nivel} />


        }
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  buttonAnsers: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  navBar: {
    backgroundColor: '#353a41'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 60,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#841584',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
