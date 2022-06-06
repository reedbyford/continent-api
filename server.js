const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const continent = {
    'north america':{
        'population': 579024000,
        'landArea': 23309892,
        'countries':{
            'Antigua and Barbuda':{

            },
            'Bahamas':{

            },
            'Barbados':{

            },
            'Belize':{

            },
            'Canada':{

            },
            'Costa Rica':{

            },
            'Cuba':{

            },
            'Dominica':{

            },
            'Dominican Republic':{

            },
            'El Salvador':{

            },
            'Grenada':{

            },
            'Guatemala':{

            },
            'Haiti':{

            },
            'Honduras':{

            },
            'Jamaica':{

            },
            'Mexico':{

            },
            'Nicaragua':{

            },
            'Panama':{

            },
            'Saint Kitts and Nevis':{

            },
            'Saint Lucia':{

            },
            'Saint Vincent and the Grenadines':{

            },
            'Trinidad and Tobago':{

            },
            'United States of America':{

            },
        },
        'territories':{
            'Anguilla (UK)':{

            },
            'Aruba (Netherlands)':{

            },
            'Bermuda (UK)':{

            },
            'Bonaire (Netherlands)':{

            },
            'British Virgin Islands (UK)':{

            },
            'Cayman Islands (UK)':{

            },
            'Clipperton Island (France)':{

            },
            'Curaçao (Netherlands)':{

            },
            'Greenland (Denmark)':{

            },
            'Guadeloupe (France)':{

            },
            'Martinique (France)':{

            },
            'Montserrat (UK)':{

            },
            'Navassa Island (USA)':{

            },
            'Puerto Rico (USA)':{

            },
            'Saba (Netherlands)':{

            },
            'Saint Barthélemy (France)':{

            },
            'Saint Martin (France)':{

            },
            'Saint Pierre and Miquelon (France)':{

            },
            'Sint Eustatius (Netherlands)':{

            },
            'Sint Maarten (Netherlands)':{

            },
            'Turks and Caicos (UK)':{

            },
            'US Virgin Islands (USA)':{

            },
        },
    },
    'south america':{
        'population': 437735000,
        'landArea': 6888000,
        'countries':{
            'Argentina':{

            },
            'Bolivia':{

            },
            'Brazil':{

            },
            'Chile':{

            },
            'Colombia':{

            },
            'Ecuador':{

            },
            'Guyana':{

            },
            'Paraguay':{

            },
            'Peru':{

            },
            'Suriname':{

            },
            'Uruguay':{

            },
            'Venezuela':{

            },
        },
        'territories':{
            'Bouvet Island (Norway)':{

            },
            'Falkland Islands (UK)':{

            },
            'French Guinea (France)':{

            },
            'Nueva Esparta (Venezuela)':{

            },
            'South Georgia and the South Sandwich Islands (UK)':{

            },
        },
    },
    'europe':{
        'population': 748513817,
        'landMass': 7769964,
        'countries':{
            'Albania':{

            },
            'Andorra':{

            },
            'Armenia (transcontinental - generally considered Asian)':{

            },
            'Austria':{

            },
            'Azerbaijan (transcontinental - generally considered Asian)':{

            },
            'Belarus':{

            },
            'Belgium':{

            },
            'Bosnia and Herzegovina':{

            },
            'Bulgaria':{

            },
            'Croatia':{

            },
            'Cyprus (generally considered European)':{

            },
            'Czechia/Czech Republic':{

            },
            'Denmark':{

            },
            'Estonia':{

            },
            'Finland':{

            },
            'France':{

            },
            'Georgia (transcontinental - generally considered Asian)':{

            },
            'Germany':{

            },
            'Greece':{

            },
            'Hungary':{

            },
            'Iceland':{

            },
            'Ireland':{

            },
            'Italy)':{

            },
            'Kazakhstan (transcontinental - generally considered Asian)':{

            },
            'Latvia':{

            },
            'Liechtenstein':{

            },
            'Lithuania':{

            },
            'Luxembourg':{

            },
            'Malta':{

            },
            'Moldova':{

            },
            'Monaco':{

            },
            'Montenegro':{

            },
            'Netherlands':{

            },
            'North Macedonia':{

            },
            'Norway':{

            },
            'Poland':{

            },
            'Portugal':{

            },
            'Romania':{

            },
            'Russia (transcontinental - generally considered European)':{

            },
            'San Marino':{

            },
            'Serbia':{

            },
            'Slovakia':{

            },
            'Slovenia':{

            },
            'Spain':{

            },
            'Sweden':{

            },
            'Switzerland':{

            },
            'Turkey (transcontinental - generally considered European)':{

            },
            'Ukraine':{

            },
            'United Kingdom':{

            },
            'Vatican City (Holy See)':{

            },
        },
        'territories':{
            'Åland (Finland)':{

            },
            'Channel Islands (UK)':{

            },
            'Faroe Islands (Denmark)':{

            },
            'Gibraltar (UK)':{

            },
            'Guernsey (UK - crown dependency)':{

            },
            'Isle of Man (UK - crown dependency)':{

            },
            'Jersey (UK - crown dependency)':{

            },
            'Kosovo (partially recognized, claimed by Serbia)':{

            },
            'Northern Cyprus (not recognized, claimed by Cyprus)':{

            },
            'Northern Ireland (UK)':{

            },
            'Svalbard (Norway)':{

            },
        },
    },
    'africa':{
        'population': 1405865000,
        'landMass': 28489869,
        'countries':{
            'Algeria':{

            },
            'Angola':{

            },
            'Benin':{

            },
            'Botswana':{

            },
            'Burkina Faso':{

            },
            'Burundi':{

            },
            'Cabo Verde/Cape Verde':{

            },
            'Cameroon':{

            },
            'Central African Republic':{

            },
            'Chad':{

            },
            'Comoros':{

            },
            'Congo/Republic of the Congo':{

            },
            'Democratic Republic of the Congo':{

            },
            'Djibouti':{

            },
            'Egypt (transcontinental - generally considered African)':{

            },
            'Equatorial Guinea':{

            },
            'Eritrea':{

            },
            'Eswatini (formerly Swaziland)':{

            },
            'Ethiopia':{

            },
            'Gabon':{

            },
            'Gambia, The':{

            },
            'Ghana':{

            },
            'Guinea':{

            },
            'Guinea-Bissau':{

            },
            'Ivory Coast/Republic of Côte d\'Ivoire':{

            },
            'Kenya':{

            },
            'Lesotho':{

            },
            'Liberia':{

            },
            'Libya':{

            },
            'Madagascar':{

            },
            'Malawi':{

            },
            'Mali':{

            },
            'Mauritania':{

            },
            'Mauritius':{

            },
            'Morocco':{

            },
            'Mozambique':{

            },
            'Namibia':{

            },
            'Niger':{

            },
            'Nigeria':{

            },
            'Rwanda':{

            },
            'Sao Tome and Principe':{

            },
            'Senegal':{

            },
            'Seychelles':{

            },
            'Sierra Leone':{

            },
            'Somalia':{

            },
            'South Africa':{

            },
            'South Sudan':{

            },
            'Sudan':{

            },
            'Tanzania':{

            },
            'Togo':{

            },
            'Tunisia':{

            },
            'Uganda':{

            },
            'Zambia':{

            },
            'Zimbabwe':{

            },
        },
        'territories':{
            'Canary Islands (Spain)':{

            },
            'Ceuta (Spain)':{

            },
            'French Southern and Antarctic Lands (France)':{

            },
            'Madeira (Portugal)':{

            },
            'Mayotte (France)':{

            },
            'Melilla (Spain)':{

            },
            'Pelagie Islands (Italy)':{

            },
            'Plazas de Soberania (Spain)':{

            },
            'Reunion (France)':{

            },
            'Saint Helena, Ascension and Tristan da Cunha (UK)':{

            },
            'Socotra Archipelago (Yemen)':{

            },
        },
    },
    'asia':{
        'population': 4718815000,
        'landMass': 44029797,
        'countries':{
            'Afghanistan':{

            },
            'Armenia (transcontinental - generally considered Asian)':{

            },
            'Azerbaijan (transcontinental - generally considered Asian)':{

            },
            'Bahrain':{

            },
            'Bangladesh':{

            },
            'Bhutan':{

            },
            'Brunei':{

            },
            'Cambodia':{

            },
            'China':{

            },
            'Cyprus (transcontinental - generally considered European)':{

            },
            'Egypt (transcontinental - generally considered African)':{

            },
            'Georgia (transcontinental - generally considered Asian)':{

            },
            'Hong Kong (China - Special Administrative Region)':{

            },
            'India':{

            },
            'Indonesia':{

            },
            'Iran':{

            },
            'Iraq':{

            },
            'Israel (U.N. member, though partially unrecognized)':{

            },
            'Japan':{

            },
            'Jordan':{

            },
            'Kazakhstan (transcontinental - generally considered Asian)':{

            },
            'Kuwait':{

            },
            'Kyrgyzstan':{

            },
            'Laos':{

            },
            'Lebanon':{

            },
            'Macau (China - Special Administrative Region)':{

            },
            'Malaysia':{

            },
            'Maldives':{

            },
            'Mongolia':{

            },
            'Myanmar (formerly Burma)':{

            },
            'Nepal':{

            },
            'North Korea (Democratic People\'s Republic of Korea)':{

            },
            'Oman':{

            },
            'Pakistan':{

            },
            'Palestine (limited recognition)':{

            },
            'Philippines':{

            },
            'Qatar':{

            },
            'Russia (transcontinental - generally considered European)':{

            },
            'Saudi Arabia':{

            },
            'Singapore':{

            },
            'South Korea (Republic of Korea)':{

            },
            'Sri Lanka':{

            },
            'Syria':{

            },
            'Taiwan (limited recognition - claimed by China)':{

            },
            'Tajikistan':{

            },
            'Thailand':{

            },
            'Timor-Leste/East Timor':{

            },
            'Turkey (transcontinental - generally considered European)':{

            },
            'Turkmenistan':{

            },
            'United Arab Emirates':{

            },
            'Uzbekistan':{

            },
            'Vietnam':{

            },
            'Yemen':{

            },
        },
        'territories':{
            'British Indian Ocean Territory (UK territory)':{

            },
        },
    },
    'oceania':{
        'population': 43762000,
        'landMass': 8525989,
        'countries':{
            'Australia':{

            },
            'Fiji':{

            },
            'Kiribati':{

            },
            'Marshall Islands':{

            },
            'Micronesia (The Federated States of)':{

            },
            'Nauru':{

            },
            'New Zealand':{

            },
            'Palau':{

            },
            'Papua New Guinea':{

            },
            'Samoa':{

            },
            'Solomon Islands':{

            },
            'Tonga':{

            },
            'Tuvalu':{

            },
            'Vanuatu':{

            },
        },
        'territories':{
            'American Samoa (US)':{

            },
            'Ashmore and Cartier Islands (Australia)':{

            },
            'Baker Island (US)':{

            },
            'Cook Islands (New Zealand)':{

            },
            'Coral Sea Islands (Australia)':{

            },
            'Easter Island (Chile)':{

            },
            'French Polynesia (France)':{

            },
            'Galapagos Islands (Ecuador)':{

            },
            'Guam (US)':{

            },
            'Howland Island (US)':{

            },
            'Jarvis Island (US)':{

            },
            'Johnston Atoll (US)':{

            },
            'Kingman Reef (US)':{

            },
            'Midway Atoll (US)':{

            },
            'New Caledonia (France)':{

            },
            'Niue (New Zealand)':{

            },
            'Norfolk Island (Australia)':{

            },
            'Northern Mariana Islands (US)':{

            },
            'Palmyra Atoll (US)':{

            },
            'Papua (Indonesia) (Not same as Papua New Guinea)':{

            },
            'Pitcairn Islands (UK)':{

            },
            'San Andrés and Providencia (Colombia)':{

            },
            'Tokelau (New Zealand)':{

            },
            'Wake Island (US)':{

            },
            'Wallis and Futuna (France)':{

            },
            'West Papua (Indonesia)':{

            },
        },
    },
    'antarctica':{
        'population': 4912,
        'landMass': 12949940,
        'countries': 'There are technically no countries on the continent of Antarctica. However, seven sovereign states have territorial claims in Antarctica',
        'territories':{
            'Adélie Land (France)':{

            },
            'Argentine Antarctica (Argentina)':{

            },
            'Australian Antarctic Territory (Australia)':{

            },
            'British Antarctic Territory (UK)':{

            },
            'Chilean Antarctic Territory (Chile)':{

            },
            'Peter I Island (Norway)':{

            },
            'Queen Maud Land (Norway)':{

            },
            'Ross Dependency (New Zealand)':{

            },
        }, 
    },
    'unknown':{
        'population': 'unknwon',
        'landMass': 'unknown',
        'countries': 'unknown',
        'territories': 'unknown', 
    }
};

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request,response)=>{
    const continentName = request.params.name.toLowerCase();
    if(continent[continentName]){
        response.json(continent[continentName]);
    }else{
        response.json(continent['unknown']);
    }
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}, better go catch it!`);
});