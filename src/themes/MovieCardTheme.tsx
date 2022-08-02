/* eslint-disable no-trailing-spaces */
import { StyleSheet } from "react-native";



export const style = StyleSheet.create({
    app:{
      flex:1,
    },
    card: {
        width: 300,
        height: 420,
        borderRadius: 18,
    },
    cardImage: {
        flex: 1,
        borderRadius: 18,
    },
    containerImage: {
        borderRadius: 18,
        backgroundColor: 'transparent',
        flex: 1,
        
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 10,
    },
    containerImage2: {
        marginBottom: 15,
        backgroundColor: 'transparent',
        
    },
});
