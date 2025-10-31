import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import { useState, } from 'react';


export default function HomeScreen() {

    const [teller, setTeller] = useState(0);

    return (

        <View>

            <View style={styles.knapper}>
                <TouchableOpacity 
                style={styles.økKnapp}
                onPress = {() => setTeller(teller +1)}>
                    <Text style={styles.textØk}>
                        Øk teller
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.nedKnapp}
                onPress = {() => {
                    if (teller > 0) {
                        setTeller(teller -1);
                    }
                }}>

                    <Text style={styles.textNed}>
                        Reduser teller
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.counterStyling}>

                <Text style={styles.tellerEr}>
                    Teller er: 
                </Text>

                <View style={styles.counterBox}>
                    <Text style={styles.counter}>
                        {teller}
                    </Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    knapper: {
        alignSelf: "center",
        marginTop: 150,
        width: "60%",
        height: 150,
        flexDirection: "column",
        justifyContent: "space-between",
    },

    økKnapp: {
        backgroundColor: "#487281",
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },

    nedKnapp: {
        backgroundColor: "#487281",
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },

    textØk: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 30,
        fontWeight: "bold",

    },
    textNed: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 30,
        fontWeight: "bold",
    },

    counterStyling: {
        width: "60%",
        height: 300,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center",
    },

    counterBox: {
        backgroundColor: "#D8DBE2",
        height: 200,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
    },

    counter: {
        fontSize: 100,
        fontWeight: "bold",
    },

    tellerEr: {
        fontSize: 20,
        fontWeight: "bold",
    }

});