import { View, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
    return (

        <View style={styles.page}>


            <View style={styles.imageDiv}>
                <Image source={require("../bilder/oppgave2bilde.jpg")} style={styles.image1}/>

                <Image source={{ uri: "https://i.pinimg.com/564x/f6/00/97/f60097ba8369351ade9ad136c71eb599.jpg"}} style={styles.image2}/>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "rgba(155, 189, 217, 1)",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    imageDiv: {
        backgroundColor: "white",
        height: "90%",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    image1: {
        width: "50%",
        height: "48%",
    },

    image2: {
        backgroundColor: "yellow",
        width: "50%",
        height: "48%",
    },
    
});