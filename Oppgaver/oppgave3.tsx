import { View, StyleSheet, Text, TextInput, } from 'react-native';
import { useState } from "react";

export default function HomeScreen() {

    const [textVariable, setVariableText] = useState(""); // lager variablen textVariable med useState 

    return (
        <View>

            <View style={styles.topBar}>
                <Text style={styles.tittle}>Passord</Text>
            </View>


            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Skriv inn passordet ditt:</Text>

                <TextInput 
                style={styles.inputInput}
                placeholder="Skriv her..."
                value={textVariable.length > 4 ? "*".repeat(textVariable.length) : textVariable} // hvis textVariable er større enn 5, repeter * for hver bokstav i textVariable
                onChangeText={setVariableText}> 
                
            
                </TextInput>
            </View>

            <View style={styles.divOutput}>
                <Text style={styles.outputText}>Passordet ditt er:</Text>
             

            {textVariable.length <= 4 && ( // && er "hvis", hvis venstre side er sann, gjør det på høyre (det inne i parentes). hvis høyre er falsk, gjør ingenting
                <Text> 
                    {textVariable} 
                </Text>                
            )}

            </View>

            <View style={styles.information}>
                <Text style={styles.informationText}>Passordet må minst ha 5 tegn</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "#373F51",
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },

    tittle: {
        fontSize: 30,
        color: "#ffffffff",
    },

    inputDiv: {

        alignSelf: "center",
        width: "80%",
        height: 100,
        marginTop: 40,
    },

    inputText: {
        fontSize: 25,
        fontWeight: "bold",
    },

    inputInput: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        height: "75%",

    },

    divOutput: {
        alignSelf: "center",
        marginTop: 50,
        width: "80%",
        height: 100,

    },

    outputText: {
        fontSize: 25,
        fontWeight: "bold",
    },

    information: {
        marginTop: 175,
        alignSelf: "center",
        width: "80%",
    },

    informationText: {
        fontSize: 25,
        fontWeight: "bold",
    },

});
