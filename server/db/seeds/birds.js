exports.seed = (knex) => {
  return knex('birds')
    .del()
    .then(() => {
      return knex('birds').insert([
        {
          id: 1,
          Sound_Id: '1piwakawaka',
          Te_Reo: 'Pīwakawaka',
          English_Name: 'Fantail',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 7,
          Habitat: 'Aotearoa',
          Media_Notes:
            'South Island fantail adult call (with goldfinches and sheep), Te Oka Bay Banks Peninsula, March 1970, 09.47.',
          Sound_Credit:
            'Les McPherson, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 2,
          Sound_Id: '2pateke',
          Te_Reo: 'Pāteke',
          English_Name: 'Brown Teal',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 7,
          Habitat: 'Wetlands',
          Media_Notes:
            'Calls by one bird. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'Josep del Hoyo, Macauley Library.',
        },
        {
          id: 3,
          Sound_Id: '3tui',
          Te_Reo: 'Tūī',
          English_Name: 'Tui',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 7,
          Habitat: 'Broadleaf forests',
          Media_Notes:
            'Single bird singing (redpolls in background), Andersons Park Invercargill, January 1984, 1600.',
          Sound_Credit:
            'Les McPherson, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 4,
          Sound_Id: '4takahe',
          Te_Reo: 'Takahē',
          English_Name: 'Swamphen',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 8,
          Habitat: 'Grasslands',
          Media_Notes: '',
          Sound_Credit: 'Alex Berryman, Macauley Library.',
        },
        {
          id: 5,
          Sound_Id: '5kereru',
          Te_Reo: 'Kererū',
          English_Name: 'NZ Wood Pigeon',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 9,
          Habitat: 'Forest',
          Media_Notes:
            'Wingbeats from one of 4 fighting/displaying adults, Te Anau, October 2012, 6.35am.',
          Sound_Credit:
            'Nicholas Allen, nick_allen@xtra.co.nz, New Zealand Birds Online.',
        },
        {
          id: 6,
          Sound_Id: '6taiko',
          Te_Reo: 'Tāiko',
          English_Name: 'Black Petrel',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 8,
          Habitat: 'Coast',
          Media_Notes:
            'Calls by a group of birds while feeding on chum. Recorded from a ship. Elevation: 0 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'Josep del Hoyo, Macauley Library.',
        },
        {
          id: 7,
          Sound_Id: '7toroa',
          Te_Reo: 'Toroa',
          English_Name: 'Antipodean Albatross',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 8,
          Habitat:
            'Breeding: Chatham Islands/ Not breeding: Southern Antarctic Ocean',
          Media_Notes: 'Feeding chick at nest, Auckland Islands, November 1989',
          Sound_Credit: 'Rhys Buckingham, McPherson Natural History Unit',
        },
        {
          id: 8,
          Sound_Id: '8hihi',
          Te_Reo: 'Hihi',
          English_Name: 'Stitchbird',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 8,
          Habitat: 'Forest',
          Media_Notes:
            'A female calling. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'Josep del Hoyo, Macauley Library.',
        },
        {
          id: 9,
          Sound_Id: '9kakianau',
          Te_Reo: 'Kakīānau',
          English_Name: 'Black Swan ',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 6,
          Habitat: 'Lakes, Larger constructed ponds, estauries',
          Media_Notes: 'Meola Reef, Westmere (Coastal Walkway)',
          Sound_Credit: 'Katie R, Macauley Library.',
        },
        {
          id: 10,
          Sound_Id: '10pukeko',
          Te_Reo: 'Pūkeko',
          English_Name: 'Australasian Swamphen',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 10,
          Habitat: 'Wetlands',
          Media_Notes:
            'A bird calling. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'Josep del Hoyo, Macauley Library.',
        },
        {
          id: 11,
          Sound_Id: '11matata',
          Te_Reo: 'Mātātā',
          English_Name: 'Fernbird',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 8,
          Habitat: 'Dense Wetlands',
          Media_Notes:
            'Calls by one bird. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'Josep del Hoyo, Macauley Library.',
        },
        {
          id: 12,
          Sound_Id: '12tieke',
          Te_Reo: 'Tīeke',
          English_Name: 'Saddleback',
          Country: 'Aotearoa',
          Status: 2,
          Sound_Level: 9,
          Habitat: 'Forest',
          Media_Notes:
            'Two birds alarmcalling. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'Josep del Hoyo, Macauley Library.',
        },
        {
          id: 13,
          Sound_Id: '13karuhiruhi',
          Te_Reo: 'Kāruhiruhi',
          English_Name: 'Pied shag',
          Country: 'Aotearoa',
          Status: 2,
          Sound_Level: 5,
          Habitat: 'Coastal marine waters',
          Media_Notes: 'Pied Shag colony with active nests, Orakei Basin.',
          Sound_Credit: 'Jim Kirker, Macauley Library.',
        },
        {
          id: 14,
          Sound_Id: '14popokotea',
          Te_Reo: 'Pōpokotea',
          English_Name: 'Whitehead',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 7,
          Habitat: 'Forest/shrubland',
          Media_Notes:
            'Several birds calling from bushes. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'Nicholas Talbot, Macauley Library.',
        },
        {
          id: 15,
          Sound_Id: '15kawaupaka',
          Te_Reo: 'Kawaupaka',
          English_Name: 'Little Shag',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 8,
          Habitat: 'Coastal, Fresh water ',
          Media_Notes:
            'Small flock, taking off from the water at Harts Creek, Ellesmere, December 2012',
          Sound_Credit:
            'Nicholas Allen, nick_allen@xtra.co.nz, New Zealand Birds Online.',
        },
        {
          id: 16,
          Sound_Id: '16korimako',
          Te_Reo: 'Korimako',
          English_Name: 'Bellbird',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 8,
          Habitat: 'Forest',
          Media_Notes: 'NOTES: 10 dB pad engaged on microphone.',
          Sound_Credit: 'Matthew D. Medler, Macauley Library.',
        },
        {
          id: 17,
          Sound_Id: '17kawau-tikitiki',
          Te_Reo: 'Kawau tikitiki',
          English_Name: 'Spotted Shag',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 10,
          Habitat: 'Coastal ',
          Media_Notes:
            'Begging young, one adult at nest, Te Oka Bay Banks Peninsula, October 1970, 1535.',
          Sound_Credit:
            'Les McPherson, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 18,
          Sound_Id: '18ruru',
          Te_Reo: 'Ruru',
          English_Name: 'Morepork',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 8,
          Habitat: 'Forest',
          Media_Notes: '',
          Sound_Credit: 'Hayden Pye, Macauley Library.',
        },
        {
          id: 19,
          Sound_Id: '19adzebill',
          Te_Reo: '',
          English_Name: 'North Island Adzebill',
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 7,
          Habitat: 'Grasslands',
          Media_Notes: 'Simulated call, December 2016.',
          Sound_Credit:
            'Simulation by David Antony Clark, David Antony Clark, http://www.ucamusic.com/childrens-music-shop/choose-by-age/older-kids/birdsong-cafe-the-sound-of-the-new-zealand-rainforest/, New Zealand Birds Online.',
        },
        {
          id: 20,
          Sound_Id: '20kahu',
          Te_Reo: 'Kāhu',
          English_Name: 'Swamp Harrier',
          Country: 'Aotearoa',
          Status: 1,
          Sound_Level: 5,
          Habitat: 'Wetlands',
          Media_Notes:
            '"Australian Harrier calls from one, possibly two unseen birds in flight near Hay\'s Creek Reservoir, Papakura 29/08/22"","',
          Sound_Credit: 'Jim Kirker, Macauley Library.',
        },
        {
          id: 21,
          Sound_Id: '21moa-nunui',
          Te_Reo: 'Moa Nunui',
          English_Name: 'South Island Giant Moa',
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 6,
          Habitat: 'Various',
          Media_Notes:
            'Digital reconstruction (South Island robins, grey warbler, blackbird, kiwi & bellbird in background), Porirua, December 2002, Night.',
          Sound_Credit:
            'David Clark, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 22,
          Sound_Id: '22kiwi-pukupuku',
          Te_Reo: 'Kiwi Pukupuku',
          English_Name: 'Little Spotted Kiwi',
          Country: 'Aotearoa',
          Status: 3,
          Sound_Level: 6,
          Habitat: 'Forest/scrub',
          Media_Notes:
            'A bird calling at night. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'Nicholas Talbot, Macauley Library.',
        },
        {
          id: 23,
          Sound_Id: '23haast-eagle',
          Te_Reo: 'Te Hōkioi',
          English_Name: "Haast's eagle",
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 8,
          Habitat: 'Alpine',
          Media_Notes: 'Simulated call, December 2018.',
          Sound_Credit:
            'Simulation by Piers Gilbertson, Te Papa, New Zealand Birds Online.',
        },
        {
          id: 24,
          Sound_Id: '24moa-hakahaka',
          Te_Reo: 'Moa Hakahaka',
          English_Name: 'Stout-Legged Moa',
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 8,
          Habitat: 'Forest/Coast',
          Media_Notes: 'Simulated call, December 2016.',
          Sound_Credit: 'Te Papa, New Zealand Birds Online.',
        },
        {
          id: 25,
          Sound_Id: '25tarepo',
          Te_Reo: 'Tarepo',
          English_Name: 'North Island Goose',
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 8,
          Habitat: 'Various',
          Media_Notes: 'Simulated call, December 2016.',
          Sound_Credit: 'Te Papa, New Zealand Birds Online.',
        },
        {
          id: 26,
          Sound_Id: '26manutahora',
          Te_Reo: 'Manutahora',
          English_Name: "Finsch's Duck",
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 7,
          Habitat: 'Drylands',
          Media_Notes: 'Simulated call, December 2016.',
          Sound_Credit: 'Te Papa, New Zealand Birds Online.',
        },
        {
          id: 27,
          Sound_Id: '27snipe-rail',
          Te_Reo: '',
          English_Name: 'Snipe-Rail',
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 9,
          Habitat: 'Forest',
          Media_Notes: 'Simulated call, December 2016.',
          Sound_Credit:
            'Simulation by David Antony Clark, http://www.ucamusic.com/childrens-music-shop/choose-by-age/older-kids/birdsong-cafe-the-sound-of-the-new-zealand-rainforest/, New Zealand Birds Online.',
        },
        {
          id: 28,
          Sound_Id: '28huia',
          Te_Reo: 'Huia',
          English_Name: 'Huia',
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 6,
          Habitat: 'North Island',
          Media_Notes:
            'Human imitation of a female call, Wellington New Zealand, December 1952, Afternoon.',
          Sound_Credit:
            'Henare Haumana (deceased), McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 29,
          Sound_Id: '29piopio',
          Te_Reo: 'Piopio',
          English_Name: 'North Island Thrush',
          Country: 'Aotearoa',
          Status: 5,
          Sound_Level: 6,
          Habitat: 'North Island',
          Media_Notes:
            'Human imitation of song, Wellington New Zealand, December 1952.',
          Sound_Credit:
            'Henare Haumana (deceased), McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 30,
          Sound_Id: '30torea-tai',
          Te_Reo: 'Tōrea tai',
          English_Name: 'Chatham Island Oystercatcher',
          Country: 'Aotearoa',
          Status: 4,
          Sound_Level: 9,
          Habitat: 'Coastal',
          Media_Notes:
            'Group of five birds giving piping display (southern black-backed gull in background), Rangatira Island, Chatham Islands, December 1971.',
          Sound_Credit:
            'Les McPherson, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 31,
          Sound_Id: '31kaki',
          Te_Reo: 'Kakī',
          English_Name: 'Black stilt',
          Country: 'Aotearoa',
          Status: 4,
          Sound_Level: 8,
          Habitat: 'Wetlands, riverbeds',
          Media_Notes:
            'Group of birds around small lake, Mount Cook, January 1982.',
          Sound_Credit:
            'Les McPherson, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 32,
          Sound_Id: '32tuturuatu',
          Te_Reo: 'Tuturuatu',
          English_Name: 'Shore Plover',
          Country: 'Aotearoa',
          Status: 4,
          Sound_Level: 8,
          Habitat: 'Chatham Islands ',
          Media_Notes:
            'Birds calling from tidal rock pool, Rangatira Island, Chatham Islands, October 1987.',
          Sound_Credit:
            'Ron Nilsson, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 33,
          Sound_Id: '33tara-iti',
          Te_Reo: 'Tara iti',
          English_Name: 'Fairy tern',
          Country: 'Aotearoa',
          Status: 4,
          Sound_Level: 8,
          Habitat: 'Exposed sandspits',
          Media_Notes:
            'Flight calls while hawking insects, Lake Georgia South Austrailia.',
          Sound_Credit:
            'Harold and Audrey Couch, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 34,
          Sound_Id: '34kuaka-whenua-hou',
          Te_Reo: 'Kuaka Whenua Hou',
          English_Name: 'Whenua Hou diving petrel',
          Country: 'Aotearoa',
          Status: 4,
          Sound_Level: 7,
          Habitat: 'Whenua Hou (Codfish Island)',
          Media_Notes:
            "In a burrow, Ile de l'est Crozet Islands, November 1982.",
          Sound_Credit:
            'P. Frigola, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 35,
          Sound_Id: '35kotuku',
          Te_Reo: 'Kōtuku ',
          English_Name: 'White Heron',
          Country: 'Aotearoa',
          Status: 4,
          Sound_Level: 8,
          Habitat: 'Harbours, estuaries, wetlands',
          Media_Notes:
            'Feeding sequence at nest, Okarito Colony, Waitangiroto River, January 1973.',
          Sound_Credit:
            'Les McPherson, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
        {
          id: 36,
          Sound_Id: '36kakapo',
          Te_Reo: 'Kākāpō',
          English_Name: 'Kakapo',
          Country: 'Aotearoa',
          Status: 4,
          Sound_Level: 9,
          Habitat: 'Forest Islands',
          Media_Notes:
            'Booming and Chinging, Arena Ridge, Stewart Island, January 1985.',
          Sound_Credit:
            'Ralph Polsted, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com, New Zealand Birds Online.',
        },
      ])
    })
}
