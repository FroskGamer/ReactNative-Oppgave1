import { Text, View, StyleSheet,} from 'react-native';

export default function HomeScreen() {
  return (
    <View>

   	<View style={styles.boxRød}>
    		<Text style={styles.tittel}>En app</Text>
    	</View>

		<View>
			<View style={styles.div2}>

				<View style={styles.boxGrønn}/> 
				<View style={styles.boxSvart}/>

			</View>

			<View style={styles.div3}>
				<View style={styles.boxGul}/>
			</View>
		</View>

		<View style={styles.tekstBoks}>
			<Text style={styles.text}>Tekst some er uten mening!</Text>
		</View>
		
		<View style={styles.blåKnapp}>
			<Text style={styles.tekstOK}>OK</Text>
		</View>


	</View>
	);
}

const styles = StyleSheet.create({

	tekstBoks: {
		width: "75%",
		alignItems: "center",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: 40,
	},

	text: {
		fontSize: 27.27,
		color: "rgba(0, 0, 0, 1)",
	},

	boxRød: {
		width: "100%",
		height: 150,
		backgroundColor: "rgba(165, 72, 72, 1)",
		justifyContent: "center",
		alignItems: "center",    
	},

	tittel: {
		fontSize: 40,
		color: "rgba(255, 255, 255, 1)",
	},

	div2: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	div3: {
		alignItems: "center",
	},

	boxGrønn: {
		backgroundColor: "rgba(73, 190, 103, 1)",
		width: 75,
		height: 75,
		marginLeft: 25,
	},

	boxSvart: {
		backgroundColor: "rgba(50, 58, 52, 1)",
		width: 75,
		height: 75,
		marginRight: 25,
	},

   	boxGul: {
		backgroundColor: "rgba(174, 185, 67, 1)",
		width: 75,
		height: 75,

	},

	blåKnapp: {
		backgroundColor: "rgba(42, 53, 180, 1)",
		width: 150,
		height: 75,
		marginTop: "40%",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		

	},
	tekstOK: {
		fontSize: 40,
		color: "rgba(255, 255, 255, 1)",

	}
});