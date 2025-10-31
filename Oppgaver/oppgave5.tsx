import { Text, View, StyleSheet, TextInput, Image, Dimensions, } from 'react-native';
import React, {useState } from 'react';
import apiWeather from './oppgave5api';


export default function HomeScreen() {

    const { height, width } = Dimensions.get("window");
    const lineHeightBy = height * .45 * .2
    const lineHeightWeather = height * .45 * .16
    const lineHeightTemperature = height * .45 * .2


    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState<any>(null);
    
    const bilder = {
        klart: require('../bilder/oppgave5bilde0.jpg'),
        delvisSkyet: require('../bilder/oppgave5bilde1.jpg'),
        tåke: require('../bilder/oppgave5bilde2.jpg'),
        lettRegn: require('../bilder/oppgave5bilde3.jpg'),
        regn: require('../bilder/oppgave5bilde4.jpg'),
        snø: require('../bilder/oppgave5bilde5.jpg'),
        regnbyger: require('../bilder/oppgave5bilde6.jpg'),
        torden: require('../bilder/oppgave5bilde7.jpg'),
        ukjent: require('../bilder/oppgave5bilde8.jpg'),
    };
    const handleSearch = async () => {
        const data = await apiWeather(location);
        if (data) setWeather(data);
    };

    function getWeatherDescription(code: number) {
        if (code === 0) return "Klart vær";
        else if ([1,2,3].includes(code)) return "Delvis skyet";
        else if ([45,48].includes(code)) return "Tåke";
        else if ([51,53,55].includes(code)) return "Lett regn";
        else if ([61,63,65].includes(code)) return "Regn";
        else if ([71,73,75].includes(code)) return "Snø";
        else if ([80,81,82].includes(code)) return "Regnbyger";
        else if ([95,96,99].includes(code)) return "Torden";
        else return "Ukjent vær";
    }

    const description = weather ? getWeatherDescription(weather.weathercode) : "";


    function getWeatherImage(code: number) {
        if (code === 0) return bilder.klart;
        else if ([1, 2, 3].includes(code)) return bilder.delvisSkyet;
        else if ([45, 48].includes(code)) return bilder.tåke;
        else if ([51, 53, 55].includes(code)) return bilder.lettRegn;
        else if ([61, 63, 65].includes(code)) return bilder.regn;
        else if ([71, 73, 75].includes(code)) return bilder.snø;
        else if ([80, 81, 82].includes(code)) return bilder.regnbyger;
        else if ([95, 96, 99].includes(code)) return bilder.torden;
        else return bilder.ukjent;
    }

    return (

        <View style={styles.background}>
            {weather && (
                <Image
                    source={getWeatherImage(weather.weathercode)}
                    style={styles.backgroundImage}
                    blurRadius={1}
                />
            )}

            <View style={styles.input}>
                <View style={styles.informasjon}>

                    <Text style={[styles.by, {lineHeight: lineHeightBy}]}>
                        {weather ? weather.city : "Skriv inn et land eller by"}
                    </Text>

                    <Text style={[styles.weather, {lineHeight: lineHeightWeather}]}>
                        {description ? description : "Så vil informasjon dukke opp her"}
                    </Text>

                    <Text style={[styles.temperatur, {lineHeight: lineHeightTemperature}]}>
                        {weather ? `${weather.temperature}°` : "⩛"}
                    </Text> 

                    <TextInput
                    style={styles.searchBar}
                    placeholder = "Search any city"
                    value={location}
                    onChangeText={setLocation}
                    onSubmitEditing={handleSearch}
                    />

                </View>
            </View>
        </View>  

    );
}

const styles = StyleSheet.create({

    background: {
        backgroundColor: "rgba(0, 0, 0, 1)",

        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: "100%",

    },

    backgroundImage: {
        width: "100%",
        height: "100%",

        ...StyleSheet.absoluteFillObject,

    },

    input: {
        width: "70%",
        height: "45%",
    },

    informasjon: {
        width: "100%",
        height: "100%",
    },

    by: {
        backgroundColor: "rgba(184, 184, 184, .2)",
        color: "rgba(255, 255, 255, 1)",

        width: "100%",
        height: "20%",

        textAlign: "center",

        fontSize: 30,
    },

    weather: {
        backgroundColor: "rgba(184, 184, 184, .2)",
        color: "rgba(255, 255, 255, 1)",

        width: "100%",
        height: "16%",

        textAlign: "center",

        fontSize: 18,

    },

    temperatur: {
        backgroundColor: "rgba(184, 184, 184, .2)",
        color: "rgba(255, 255, 255, 1)",

        width: "100%",
        height: "20%",

        textAlign: "center",

        fontSize: 50,
    },

    searchBar: {
        backgroundColor: "#666666",
        color: "rgba(198, 198, 198, 1)",

        width: "100%",
        height: "15%",

        fontSize: 25,

        borderRadius: 8,
    }
});