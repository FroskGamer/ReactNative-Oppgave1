import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const [antallTegn, setAntallTegn] = useState("");
  const [passord, setPassord] = useState("");
  const [isEnabledStoreBokstaver, setIsEnabledStoreBokstaver] = useState(false);
  const [isEnabledSmaaBokstaver, setIsEnabledSmaaBokstaver] = useState(false);
  const [isEnabledTall, setIsEnabledTall] = useState(false);
  const [isEnabledSymboler, setIsEnabledSymboler] = useState(false);


  // Funksjon for å generere tilfeldig passord
  function genererPassord(isSmaaBokst, isStoreBokst, isTall, isSymb, antTegn) {    
    let smaaBokstaver = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let storeBokstaver = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let tall = ["0","1","2","3","4","5","6","7","8","9"]
    let symboler = ["#","$","%","&","*"]
    let lovligeTegn = []
    
    if (isSmaaBokst) {
      lovligeTegn = lovligeTegn.concat(smaaBokstaver);
    }
    if (isStoreBokst) {      
      lovligeTegn = lovligeTegn.concat(storeBokstaver);
    }
    if (isTall) {      
      lovligeTegn = lovligeTegn.concat(tall);
    }
    if (isSymb) {      
      lovligeTegn = lovligeTegn.concat(symboler);
    }
    let passord = []
    for (let i = 0; i < antTegn; i++) {
      passord.push(lovligeTegn[Math.floor(Math.random() * lovligeTegn.length)])
    }
    return passord;
  }

  return (
  <View style={ styles.screen }>
    <View style={ styles.container1 } >                    
      <Text style={ styles.text_heading}> 
        Passordgenerator
      </Text>         
    </View>
    <View style={ styles.container2 }>
      <View style={ styles.line}>
        <Text style={ styles.text_line} >
          Store bokstaver
        </Text>
        <Switch
          style={ styles.switchstyle }
          thumbColor= {isEnabledStoreBokstaver ? "#f4f310" : "#f4f3f4"}        
          onValueChange={() => setIsEnabledStoreBokstaver(!isEnabledStoreBokstaver)}
          value={isEnabledStoreBokstaver}
        />
      </View>    
      <View style={ styles.line}>
        <Text style={ styles.text_line} >
          Små bokstaver
        </Text>
        <Switch
          style={ styles.switchstyle }
          thumbColor= {isEnabledSmaaBokstaver ? "#f4f310" : "#f4f3f4"}         
          onValueChange={() => setIsEnabledSmaaBokstaver(!isEnabledSmaaBokstaver)}
          value={isEnabledSmaaBokstaver}
        />
      </View>    
      <View style={ styles.line}>
        <Text style={ styles.text_line} >
          Tall
        </Text>
        <Switch
          style={ styles.switchstyle } 
          thumbColor= {isEnabledTall ? "#f4f310" : "#f4f3f4"}         
          onValueChange={() => setIsEnabledTall(!isEnabledTall)}
          value={isEnabledTall}
        />
      </View>    
      <View style={ styles.line }>
        <Text style={ styles.text_line } >
          Symboler
        </Text>
        <Switch
          style={ styles.switchstyle } 
          thumbColor= {isEnabledSymboler ? "#f4f310" : "#f4f3f4"}        
          onValueChange={() => setIsEnabledSymboler(!isEnabledSymboler)}
          value={isEnabledSymboler}
        />        
      </View>
      <View style={ styles.line }>
        <Text style={ styles.text_line }>
          Antall tegn
        </Text>
        <TextInput 
          style={ styles.input } 
          onChangeText={(antallTegn) => setAntallTegn(antallTegn)}
        />    
      </View>
    </View>
    <View style={ styles.container4 }>
    <Button
        title="Generer passord"
        onPress={() => setPassord(genererPassord(isEnabledSmaaBokstaver, 
            isEnabledStoreBokstaver, isEnabledTall, isEnabledSymboler, antallTegn))}
      />
    </View>
    <View style={ styles.container3 }>
      <Text style={ styles.text_line2 }>
        Passord:
      </Text> 
      <Text style={ styles.text_line3 } selectable>
        {passord}
      </Text>
    </View>    
  </View>
  );
  }

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
  },
  container1: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 2,
    alignItems: "stretch",
    justifyContent: "center",
    padding: 20,
  },
  container3: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container4: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    padding: 10, 
    fontSize: 20,
    backgroundColor: "#f5f5f5",
  },
  switchstyle: {
    trackColor: { false: "#767577", true: "#81b0ff" },
    ios_backgroundColor: "#3e3e3e",
  },
  text_heading: {
    color: "white",
    fontSize: 35,
  },
  text_line: {
    color: "black",
    fontSize: 20,
  },
  text_line2: {
    color: "black",
    fontSize: 20,
  },
  text_line3: {
    color: "white",
    fontSize: 20,
    backgroundColor: "grey",
  },
});
