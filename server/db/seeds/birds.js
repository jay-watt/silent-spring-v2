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
          Habitat: 'Aotearoa',
          Media_Notes:
            'South Island(male song) Franz Josef Glacier, December 1956',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/35%20-%20Unknown%20Title%20-%20Unknown%20Artist.mp3 Carl & Lise Wiesmann ',
        },
        {
          id: 2,
          Sound_Id: '2pateke',
          Te_Reo: 'Pāteke',
          English_Name: 'Brown Teal',
          Country: 'Aotearoa',
          Status: 3,
          Habitat: 'Wetlands',
          Media_Notes:
            'Calls by one bird. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit:
            'https://macaulaylibrary.org/asset/203926471 Carl & Lise Wiesmann ',
        },
        {
          id: 3,
          Sound_Id: '3tui',
          Te_Reo: 'Tūī',
          English_Name: 'Tui',
          Country: 'Aotearoa',
          Status: 1,
          Habitat: 'Broadleaf forests',
          Media_Notes: 'Kapiti Island, October 1956',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/13%20-%20Tui.mp3',
        },
        {
          id: 4,
          Sound_Id: '4takahe',
          Te_Reo: 'Takahē',
          English_Name: 'Swamphen',
          Country: 'Aotearoa',
          Status: 3,
          Habitat: 'Grasslands',
          Media_Notes: '',
          Sound_Credit: 'https://macaulaylibrary.org/asset/212043711',
        },
        {
          id: 5,
          Sound_Id: '5kereru',
          Te_Reo: 'Kererū',
          English_Name: 'NZ Wood Pigeon',
          Country: 'Aotearoa',
          Status: 1,
          Habitat: 'Forest',
          Media_Notes: 'Wing sounds of four adults, Te Anau, October 2012',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/NIA%20417%20NZ%20Pigeon%20wingbeats.mp3',
        },
        {
          id: 6,
          Sound_Id: '6taiko',
          Te_Reo: 'Tāiko',
          English_Name: 'Black Petrel',
          Country: 'Aotearoa',
          Status: 3,
          Habitat: 'Coast',
          Media_Notes:
            'Calls by a group of birds while feeding on chum. Recorded from a ship. Elevation: 0 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'https://macaulaylibrary.org/asset/203926781',
        },
        {
          id: 7,
          Sound_Id: '7toroa',
          Te_Reo: 'Toroa',
          English_Name: 'Antipodean Albatross',
          Country: 'Aotearoa',
          Status: 3,
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
          Habitat: 'Forest',
          Media_Notes:
            'A female calling. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'https://macaulaylibrary.org/asset/203926621',
        },
        {
          id: 9,
          Sound_Id: '9kakianau',
          Te_Reo: 'Kakīānau',
          English_Name: 'Black Swan ',
          Country: 'Aotearoa',
          Status: 1,
          Habitat: 'Lakes, Larger constructed ponds, estauries',
          Media_Notes: 'Meola Reef, Westmere (Coastal Walkway)',
          Sound_Credit:
            'Back up: https://search.macaulaylibrary.org/catalog?taxonCode=blkswa&mediaType=audio',
        },
        {
          id: 10,
          Sound_Id: '10pukeko',
          Te_Reo: 'Pūkeko',
          English_Name: 'Australasian Swamphen',
          Country: 'Aotearoa',
          Status: 1,
          Habitat: 'Wetlands',
          Media_Notes:
            'A bird calling. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'https://macaulaylibrary.org/asset/203926751',
        },
        {
          id: 11,
          Sound_Id: '11matata',
          Te_Reo: 'Mātātā',
          English_Name: 'Fernbird',
          Country: 'Aotearoa',
          Status: 3,
          Habitat: 'Dense Wetlands',
          Media_Notes: 'Adult song, Kapiti Island October 1956',
          Sound_Credit: 'Carl & Lise Wiesmann',
        },
        {
          id: 12,
          Sound_Id: '12tieke',
          Te_Reo: 'Tīeke',
          English_Name: 'Saddleback',
          Country: 'Aotearoa',
          Status: 2,
          Habitat: 'Forest',
          Media_Notes: '',
          Sound_Credit: 'https://macaulaylibrary.org/asset/285324401',
        },
        {
          id: 13,
          Sound_Id: '13karuhiruhi',
          Te_Reo: 'Kāruhiruhi',
          English_Name: 'Pied shag',
          Country: 'Aotearoa',
          Status: 2,
          Habitat: 'Coastal marine waters',
          Media_Notes: 'Orakei Basin',
          Sound_Credit: 'https://macaulaylibrary.org/asset/190120641',
        },
        {
          id: 14,
          Sound_Id: '14popokotea',
          Te_Reo: 'Pōpokotea',
          English_Name: 'Whitehead',
          Country: 'Aotearoa',
          Status: 1,
          Habitat: 'Forest/shrubland',
          Media_Notes:
            'Several birds calling from bushes. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'https://macaulaylibrary.org/asset/204016011',
        },
        {
          id: 15,
          Sound_Id: '15kawaupaka',
          Te_Reo: 'Kawaupaka',
          English_Name: 'Little Shag',
          Country: 'Aotearoa',
          Status: 3,
          Habitat: 'Coastal, Fresh water ',
          Media_Notes:
            'Small flock, taking off from the water at Harts Creek, Ellesmere, December 2012',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/NIA%20582%20Little%20Pied%20Cormorant.mp3',
        },
        {
          id: 16,
          Sound_Id: '16korimako',
          Te_Reo: 'Korimako',
          English_Name: 'Bellbird',
          Country: 'Aotearoa',
          Status: 1,
          Habitat: 'Forest',
          Media_Notes: 'NOTES: 10 dB pad engaged on microphone.',
          Sound_Credit: 'https://macaulaylibrary.org/asset/136045',
        },
        {
          id: 17,
          Sound_Id: '17kawau-tikitiki',
          Te_Reo: 'Kawau tikitiki',
          English_Name: 'Spotted Shag',
          Country: 'Aotearoa',
          Status: 3,
          Habitat: 'Coastal ',
          Media_Notes:
            'Begging young, one adult at nest, Te Oka Bay Banks Peninsula',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/04%20-%20Track%204%281%29.mp3',
        },
        {
          id: 18,
          Sound_Id: '18ruru',
          Te_Reo: 'Ruru',
          English_Name: 'Morepork',
          Country: 'Aotearoa',
          Status: 1,
          Habitat: 'Forest',
          Media_Notes: '',
          Sound_Credit: 'https://macaulaylibrary.org/asset/380864781',
        },
        {
          id: 19,
          Sound_Id: '19adzebill',
          Te_Reo: '',
          English_Name: 'North Island Adzebill',
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'Grasslands',
          Media_Notes:
            'Simulated call, December 2016, Simulation by David Antony Clark, David Antony Clark, http://www.ucamusic.com/childrens-music-shop/choose-by-age/older-kids/birdsong-cafe-the-sound-of-the-new-zealand-rainforest/',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/ADZEBILL.mp3',
        },
        {
          id: 20,
          Sound_Id: '20kahu',
          Te_Reo: 'Kāhu',
          English_Name: 'Swamp Harrier',
          Country: 'Aotearoa',
          Status: '1',
          Habitat: 'Wetlands',
          Media_Notes:
            '"Australian Harrier calls from one, possibly two unseen birds in flight near Hay\'s Creek Reservoir, Papakura 29/08/22"","',
          Sound_Credit: 'https://macaulaylibrary.org/asset/479309141',
        },
        {
          id: 21,
          Sound_Id: '21moa-nunui',
          Te_Reo: 'Moa Nunui',
          English_Name: 'South Island Giant Moa',
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'Various',
          Media_Notes:
            'Digital reconstruction (South Island robins, grey warbler, blackbird, kiwi & bellbird in background), Porirua, December 2002, Night, David Clark, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/70%20-%20Moa%20%28Reconstructed%29.mp3',
        },
        {
          id: 22,
          Sound_Id: '22kiwi-pukupuku',
          Te_Reo: 'Kiwi Pukupuku',
          English_Name: 'Little Spotted Kiwi',
          Country: 'Aotearoa',
          Status: '3',
          Habitat: 'Forest/scrub',
          Media_Notes:
            'A bird calling at night. Elevation: 53 m. Date added to IBC: June 22, 2016.',
          Sound_Credit: 'https://macaulaylibrary.org/asset/204016071',
        },
        {
          id: 23,
          Sound_Id: '23haast-eagle',
          Te_Reo: '',
          English_Name: "Haast's eagle",
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'Alpine',
          Media_Notes:
            'Simulated call, December 2018, Simulation by Piers Gilbertson, Te Papa,',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/%28BIRDY%20-%20HAAST%27S%20EAGLE.mp3',
        },
        {
          id: 24,
          Sound_Id: '24moa-hakahaka',
          Te_Reo: 'Moa Hakahaka',
          English_Name: 'Stout-Legged Moa',
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'Forest/Coast',
          Media_Notes: 'Simulated call, December 2016, Te Papa, Te Papa,',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/%28BIRDY%20-%20MOA.mp3',
        },
        {
          id: 25,
          Sound_Id: '25tarepo',
          Te_Reo: 'Tarepo',
          English_Name: 'North Island Goose',
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'Various',
          Media_Notes: 'Simulated call, December 2016, Te Papa, Te Papa,',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/%28BIRDY%20-%20NZ%20GOOSE%20FINAL.mp3',
        },
        {
          id: 26,
          Sound_Id: '26manutahora',
          Te_Reo: 'Manutahora',
          English_Name: "Finsch's Duck",
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'Drylands',
          Media_Notes: 'Simulated call, December 2016, Te Papa, Te Papa,',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/%28BIRDY%20-%20FINSCHS%20DUCK%20FINAL.mp3',
        },
        {
          id: 27,
          Sound_Id: '27snipe-rail',
          Te_Reo: '',
          English_Name: 'Snipe-Rail',
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'Forest',
          Media_Notes:
            'Simulated call, December 2016, Simulation by David Antony Clark, David Antony Clark, http://www.ucamusic.com/childrens-music-shop/choose-by-age/older-kids/birdsong-cafe-the-sound-of-the-new-zealand-rainforest/',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/Snipe-rail.mp3',
        },
        {
          id: 28,
          Sound_Id: '28huia',
          Te_Reo: 'Huia',
          English_Name: 'Huia',
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'North Island',
          Media_Notes:
            'Human imitation of a female call, Wellington New Zealand, December 1952, Afternoon, Henare Haumana (deceased), McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/03%20-%20Track%203%281%29.mp3',
        },
        {
          id: 29,
          Sound_Id: '29piopio',
          Te_Reo: 'Piopio',
          English_Name: 'North Island Thrush',
          Country: 'Aotearoa',
          Status: 5,
          Habitat: 'North Island',
          Media_Notes:
            'Human imitation of song, Wellington New Zealand, December 1952, Afternoon, Henare Haumana, McPherson Natural History Unit Sound Archive, www.archivebirdsnz.com',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/34%20-%20North%20Island%20Thrush%20%28Imitation%29.mp3',
        },
        {
          id: 30,
          Sound_Id: '30torea-tai',
          Te_Reo: 'Tōrea tai',
          English_Name: 'Chatham Island Oystercatcher',
          Country: 'Aotearoa',
          Status: 4,
          Habitat: 'Coastal',
          Media_Notes:
            'Birds calling, Rangatira Island, Chatham Islands, December 1971',
          Sound_Credit:
            'https://nzbirdsonline.org.nz/sites/all/files/14%20Track%2014.mp3',
        },
        {
          id: 31,
          Sound_Id: '31kaki',
          Te_Reo: 'Kakī',
          English_Name: 'Black stilt',
          Country: 'Aotearoa',
          Status: 4,
          Habitat: 'Wetlands, riverbeds',
          Media_Notes:
            'Group of birds around small lake, Mount Cook, January 1982',
          Sound_Credit:
            'Les McPherson, McPherson Natural history unit sound archive',
        },
        {
          id: 32,
          Sound_Id: '32tuturuatu',
          Te_Reo: 'Tuturuatu',
          English_Name: 'Shore Plover',
          Country: 'Aotearoa',
          Status: 4,
          Habitat: 'Chatham Islands ',
          Media_Notes:
            'Birds calling from tidal rock pool, Rangatira Island, Chatham Islands, October 1987',
          Sound_Credit:
            'Ron Nilsson, McPherson Natural history unit sound archive',
        },
        {
          id: 33,
          Sound_Id: '33tara-iti',
          Te_Reo: 'Tara iti',
          English_Name: 'Fairy tern',
          Country: 'Aotearoa',
          Status: 4,
          Habitat: 'Exposed sandspits',
          Media_Notes:
            'Flight calls while hawking insects, Lake Georgia South Austrailia',
          Sound_Credit:
            'Harold and Audrey Couch, McPherson Natural history unit sound archive',
        },
        {
          id: 34,
          Sound_Id: '34kuaka-whanua-hou',
          Te_Reo: 'Kuaka Whenua Hou',
          English_Name: 'Whenua Hou diving petrel',
          Country: 'Aotearoa',
          Status: 4,
          Habitat: 'Whenua Hou (Codfish Island)',
          Media_Notes:
            "In a burrow, Ile de l'est Crozet Islands, November 1982",
          Sound_Credit:
            'P. Frigola, McPherson Natural history unit sound archive',
        },
        {
          id: 35,
          Sound_Id: '35kotuku',
          Te_Reo: 'Kōtuku ',
          English_Name: 'White Heron',
          Country: 'Aotearoa',
          Status: 4,
          Habitat: 'Harbours, estuaries, wetlands',
          Media_Notes:
            'Feeding sequence at nest, Okarito Colony, Waitangiroto River, January 1973',
          Sound_Credit:
            'Les McPherson, McPherson Natural history unit sound archive',
        },
        {
          id: 36,
          Sound_Id: '36kakapo',
          Te_Reo: 'Kākāpō',
          English_Name: 'Kakapo',
          Country: 'Aotearoa',
          Status: 4,
          Habitat: 'Forest Islands',
          Media_Notes:
            'Booming and Chinging, Arena Ridge, Stewart Island, January 1985',
          Sound_Credit:
            'Ralph Polsted, McPherson Natural history unit sound archive',
        },
      ])
    })
}
