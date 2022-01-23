
import {Instagram} from '../components/icons/Instagram'
import {Facebook} from '../components/icons/Facebook'
import {Youtube} from '../components/icons/Youtube'
 function  LoadLinks() { 
    
    const arrayLoads = []
    let icon = {}
    let iconUrl = ""
    let iconName = ""
    
    
    icon = Instagram
    iconUrl = 'https://www.instagram.com/tifelipemoreira/'
    iconName = "Instagram"
    arrayLoads.push({iconName,iconUrl,icon})

    icon = Facebook
    iconUrl = 'https://www.facebook.com/'
    iconName = "Facebook"
    arrayLoads.push({iconName,iconUrl,icon})
    
    icon = Youtube
    iconUrl = 'https://www.youtube.com/channel/UC71uLqVzlKizQVP2oXuPAFA'
    iconName = "Youtube"
    arrayLoads.push({iconName,iconUrl,icon})
    
    return arrayLoads
    
}

export const socialLinks = LoadLinks()
