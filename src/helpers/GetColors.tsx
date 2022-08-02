/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
import ImageColors from "react-native-image-colors"









export const getImageColors = async( uri: string ) => {
    

    const colors = await ImageColors.getColors(uri, {} )
    
    let primary
    let secondary

    if( colors.platform === "android" ){
        //android result properties
        primary = colors.dominant
        secondary = colors.average
    }
    else if(colors.platform === "ios"){
        //ios result properties
        primary = colors.primary
        secondary = colors.secondary
    }

    return[primary, secondary]
}