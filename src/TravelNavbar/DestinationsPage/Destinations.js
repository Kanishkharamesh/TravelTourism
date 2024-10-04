// src/DestinationsPage/Destinations.js
import React, { useState } from 'react';
import './Destinations.css';
import { Link } from 'react-router-dom';

// Sample data for destinations (Ensure to add all 30 destinations here)
const destinationsData = [
  {
    id: 1,
    name: 'Paris',
    rank: "#1 in World's Best Places to Visit",
    description:
      "France's magnetic City of Light is a perennial tourist destination, drawing visitors with its iconic attractions, like the Eiffel Tower and the Louvre, and its unmistakable je ne sais quoi. Quaint cafes, trendy shopping districts and Haussmann architecture give Paris its timeless beauty. But the city's best asset is that you're likely to discover something new with each trip or season (read: Paris is always a good idea). To best explore France's ever-changing capital, get lost wandering the charming cobblestone streets, learn its secrets on a walking tour, head to dynamic art exhibits like the Atelier des Lumières or gourmandize at the latest restaurants and pastry shops.",
    images: [
      'https://media1.thrillophilia.com/filestore/sv8cmj5yufx5ht7qkjxaq3dkc9gx_1579345955_Eiffel_Tower.jpg?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/z21yq5am9jt646tiaslu9jq1qxni_1586866174_fi.jpg?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/4v6uzks4tncmsj994n52g9qwwzii_notr.webp?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/wha94dodir1eyfp6smlns2lkb8l7_1584697531_fi.jpg?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/rtv8e2a1qpn7t8gf08b643paw4k9_1580118319_shutterstock_1305281371.jpg?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/95we2ksep96048eajjkff1ly2sb8_1585173567_Palace_of_Versailles___Gardens_(2).jpg?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/dqd7lqo7k495dk3i4tr2fq7uxocb_Aquaboulevard%20Paris.jpg?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/i2pzkrvvuxv9tbvvat8eqqc732l5_1579267406_shutterstock_354290552.jpg?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/3n8q1pec1plx9r9dxvnhgkq1bjlg_Muse%CC%81e_d\'Orsay,_North-West_view,_Paris_7e_140402.jpg?w=753&h=450&dpr=1.0',
      'https://media1.thrillophilia.com/filestore/nf4garrrc944h6sr4slja7upii2j_1586871284_shutterstock_114479500.jpg?w=753&h=450&dpr=1.0'
      // Add more image URLs as needed
    ],
  },
  {
    id: 2,
    name: 'Bora Bora',
    rank: "#2 in World's Best Places to Visit",
    description:
      "What this 12-square-mile French Polynesian island may lack in size it makes up for in sheer tropical beauty. Here, you'll find picturesque beaches, lush jungles and luxurious resorts set on surrounding islets. The island's extinct volcano, Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help you catch a glimpse of the island's best sights during an off-road excursion. To relax, head to Matira Beach for crystal-clear water and postcard-worthy white sand. Although a trip to Bora Bora is very expensive, most travelers say it's worth every penny.",
    images: [
      'https://www.marieetravel.com/wp-content/uploads/2023/10/Places_Like_Bora_Bora_Maldives.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2023/10/Places_Like_Bora_Bora_Jamaica.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2024/03/Fiji-tropical-islands-aerial-view.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2023/10/Places_Like_Bora_Bora_Mauritius.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2023/10/Places_Like_Bora_Bora_Moorea.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2024/05/Philippines-Palawan-limestone-cliffs-bay-boats.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2024/01/Malaysia-Langkawi-overwater-villas-pool.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2023/10/Places_Like_Bora_Bora_St-Lucia.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2023/10/Places_Like_Bora_Bora_Hawaii.jpg.webp',
      'https://www.marieetravel.com/wp-content/uploads/2023/10/Places_Like_Bora_Bora_Seychelles.jpg.webp'
      // Add more image URLs as needed
    ],
  },
  {
    id: 3,
    name: 'Glacier National Park',
    rank: "#3 in World's Best Places to Visit",
    description:
      "Snow-capped peaks, alpine meadows and azure lakes are just a few reasons why Glacier National Park is one of America's most striking parks. There are more than 700 miles of hiking trails in this Montana crown jewel, plus 13 designated areas for camping. In the winter, travelers can enjoy snowshoeing and skiing, while during the summer vacationers can go swimming in Lake McDonald and whitewater rafting on Flathead River, among other popular activities. For those who'd rather admire their surroundings from their car, a scenic drive along Going-to-the-Sun Road can't be missed.",
    images: [
      // Add image URLs or a placeholder image if none are available
      'https://travel.usnews.com/dims4/USNEWS/8911536/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_getty_3DvcjXU.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a5deeb1/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Ficeberg_lake_trail_attraction_h6Y0tJ9.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c45c17c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJeffrey_Ross.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a7445cd/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCaleb_Poe-EyeEm.jpg',
      'https://travel.usnews.com/dims4/USNEWS/7555838/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTim_Rains_foreset.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3d8bd9b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTim_Rains.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1614ffd/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTim_Rains_eMw6HCF.jpg',
      'https://travel.usnews.com/dims4/USNEWS/21fdc25/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTim_Rains_rocks.jpg',
      'https://travel.usnews.com/dims4/USNEWS/fd9e2db/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJacob_W._Frank_panorama.jpg',
      'https://travel.usnews.com/dims4/USNEWS/cc8fbe6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDavid_Restivo_s83ZZ6L.jpg'
    ],
  },
  {
    id: 4,
    name: 'Rome',
    rank: "#4 in World's Best Places to Visit",
    description:
      "When you visit Italy's capital city, prepare to cross a few must-see landmarks – including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list. Travelers can also see some of Italy's greatest treasures, including St. Peter's Basilica and the Sistine Chapel, in Vatican City. Escape the tourist crowds by taking a twilight stroll along the cobblestone streets of Trastevere, or head to Mercato Centrale Roma to sample local delicacies like pistachio gelato. Before leaving, peruse some of Rome's lesser-known museums, art galleries and boutiques, or head to Janiculum Hill for panoramic views of the city.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/c4b97cc/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fsmaller_main_image_original.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2330e6e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-158762142.jpg',
      'https://travel.usnews.com/dims4/USNEWS/6d25953/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAlexander_SpatariGetty_Images_F2zOPZz.jpg',
      'https://travel.usnews.com/dims4/USNEWS/6d25953/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAlexander_SpatariGetty_Images_F2zOPZz.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1c1f4e4/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-841851056.jpg',
      'https://travel.usnews.com/dims4/USNEWS/5ba52ed/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FEduardo_Ramos_CastanedaGetty_Images_HJiXP2s.jpg',
      'https://travel.usnews.com/dims4/USNEWS/8884f12/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FEDITED-Gennaro_Leonardi__EyeEmGetty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c0bb1e3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-643129800.jpg',
      'https://travel.usnews.com/dims4/USNEWS/dca4f78/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSean_PavoneGetty_Images2_8opynUw.jpg',
      'https://travel.usnews.com/dims4/USNEWS/abf8c8e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSean_PavoneGetty_Images_5kkHD9Q.jpg',
      'https://travel.usnews.com/dims4/USNEWS/dea8e29/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSean_PavoneGetty_Images_EDmXHnr.jpg'
    ],
  },
  {
    id: 5,
    name: 'Swiss Alps',
    rank: "#5 in World's Best Places to Visit",
    description:
      "Snow-covered mountains, charming towns and flower-strewn meadows make the Swiss Alps a year-round fairy tale destination. Visit in the winter for world-class skiing (and après-ski fondue and drinks) in locales such as the exclusive St. Moritz and the picturesque Zermatt, home of the craggy Matterhorn. Opt for warmer months to hike through the verdant valleys of Swiss National Park or attend lively festivals in the foothill city of Montreux. Regardless of the time of year, no trip would be complete without a visit to the Jungfrau Region, where you can experience idyllic mountain villages like Grindelwald and Mürren or take the Jungfrau Railway to Europe's highest railway station.",
    images: [
    'https://travel.usnews.com/dims4/USNEWS/c59db0c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSteffen_Schnur.jpg',
    'https://travel.usnews.com/dims4/USNEWS/11434b0/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTrummelbach_Falls-Roberto_Moiola-Sysaworld-Getty.jpg',
    'https://travel.usnews.com/dims4/USNEWS/60a2d36/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMatterhorn_summer-Comezora-Getty.jpg',
    'https://travel.usnews.com/dims4/USNEWS/54c7100/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMeadow-by-studio-Getty.jpg',
    'https://travel.usnews.com/dims4/USNEWS/ed85e74/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSt._Moritz-Francesco_Meroni-Getty.jpg',
    'https://travel.usnews.com/dims4/USNEWS/f5eeb91/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAletsch_Glacier-Carolin_Kertscher-Getty.jpg',
    'https://travel.usnews.com/dims4/USNEWS/db2f9ef/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMurren-Janoka82-Getty.jpg',
    'https://travel.usnews.com/dims4/USNEWS/8bc81b0/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGornergrat_Matterhorn-Suphanat_Wongsanuphat-Getty.jpg',
    'https://travel.usnews.com/dims4/USNEWS/fa222ad/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FFirst_Cliff_Walk-Roberto_Moiola-Sysaworld-Getty.jpg',
    'https://travel.usnews.com/dims4/USNEWS/72ce250/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FChalet_Lauterbrunnen-Marcus_Lindstrom-Getty.jpg'
    ],
  },
  {
    id: 6,
    name: 'Maui',
    rank: "#6 in World's Best Places to Visit",
    description:
      "Whether you're driving along the Road to Hana, enjoying a bird's-eye view of Maui's lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on white or black sand beaches, you'll find that this Hawaiian island is unlike any other tropical destination. Don't miss a chance to visit Haleakala National Park, which is home to one of the world's largest dormant volcanic craters and boasts surreal sunrises. You should also attend a traditional luau for a dose of local culture and a taste of Hawaiian specialties like poi, poke and i'a fish.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/afc7596/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-117211856_1JncHVX.jpg',
      'https://travel.usnews.com/dims4/USNEWS/5fa5a17/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDavid_Jolly__EyeEm_GettyImages.jpg',
      'https://travel.usnews.com/dims4/USNEWS/8676dec/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-499204317.jpg',
      'https://travel.usnews.com/dims4/USNEWS/9378720/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FThinkstock_ImagesGetty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/746dfd3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-1290932130.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2e2ca7d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-1278351126.jpg',
      'https://travel.usnews.com/dims4/USNEWS/64def02/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-184295449.jpg',
      'https://travel.usnews.com/dims4/USNEWS/cd14cf6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-516143229.jpg',
      'https://travel.usnews.com/dims4/USNEWS/5380dd6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-500308573.jpg',
      'https://travel.usnews.com/dims4/USNEWS/eab91f5/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-1006968136.jpg',
      'https://travel.usnews.com/dims4/USNEWS/10193a6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-990659706.jpg',
      'https://travel.usnews.com/dims4/USNEWS/bd7f808/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FStevenGaertner_GettyImages.jpg'
    ],
  },
  {
    id: 7,
    name: 'London, England',
    rank: "#7 in World's Best Places to Visit",
    description:
      "London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, join a tour that takes you past top spots like the Tate Modern art institution, Buckingham Palace, the Tower of London, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub for a Sunday roast. Once you've seen the major sights, stroll through the posh streets of Mayfair or Chelsea, or admire the gardens at one of London's 3,000 parks.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/44886ac/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-482151882_hA4PCda.jpg',
      'https://travel.usnews.com/dims4/USNEWS/16106e9/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-807070348_zOpwZ2L.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0e7fde9/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-85616403_qc4nwhg.jpg',
      'https://travel.usnews.com/dims4/USNEWS/6f94670/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fst_pauls_interior_getty_rv0qACX.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b94b9f6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F549933937_RxLfIgr.jpg',
      'https://travel.usnews.com/dims4/USNEWS/98c22d3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-129229148_3vmAAkK.jpg',
      'https://travel.usnews.com/dims4/USNEWS/99d2d0c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-816185058_gmrhLto.jpg',
      'https://travel.usnews.com/dims4/USNEWS/d97ad02/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-85075611_SZmqiOH.jpg',
      'https://travel.usnews.com/dims4/USNEWS/14cad5d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-471637116_Kr8nhrT.jpg',
      'https://travel.usnews.com/dims4/USNEWS/edc902d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-538053368_kCB3wya.jpg'
    ],
  },
  {
    id: 8,
    name: 'Maldives',
    rank: "#8 in World's Best Places to Visit",
    description:
      "It is not cheap or easy to reach, but this isolated Indian Ocean vacation spot located southwest of India is the personification of a dreamy tropical retreat. In this remote destination, which is made up of more than 1,000 islands, thatched-roof overwater bungalows sit above the bright aquamarine sea, providing easy water access and a romantic atmosphere. On this once-in-a-lifetime vacation, fill your days with beach trips, spa treatments and snorkeling or scuba diving excursions. If cabin fever sets in, pay a visit to the capital, Malé, where you'll find historic mosques and open-air markets. ",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/abd9e30/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMaldives-GettyImages-graphixel_mxYIcpF.jpg',
      'https://travel.usnews.com/dims4/USNEWS/ee1a530/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSunset_resort-Levente_Bodo-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/db51469/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FHalf_Water-JBfotoblog-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/090c04c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMaldives_beach2_Getty_levente_bodo.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0b7c01c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FWhale_shark-Julio_Sanjuan-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/86b4379/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMaafushi_overhead-Mohd_Syahrul_Izzam_bin_Minhad-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/ba28283/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSchool_of_Snapper-Giordano_Cipriani-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/51aab12/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMale-niromaks-getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/37c11d7/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSail_Getty_Matteo_Colombo.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2c74f02/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FOverhead-by_sharaff-Getty.jpg'
    ],
  },
  {
    id: 9,
    name: 'Turks & Caicos',
    rank: "#9 in World's Best Places to Visit",
    description:
      "Located north of the Dominican Republic, this collection of roughly 100 islands and cays is popular with couples – and for good reason. With sparkling white sand, crystal-clear water and nearly 350 miles of colorful coral reef, the Turks and Caicos Islands are truly a sight to behold. While you'd be remiss to visit this quintessential Caribbean wonder and not spend a day or two lounging on Grace Bay Beach on Providenciales, those seeking a more active getaway will have plenty of opportunities to snorkel, scuba dive and ride horses along the coast.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/6c458e7/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMudjin_Harbour_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c7a43d3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FLeeward_Beach_2_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1e6cddb/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMudjin_Harbour_2_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f3388a7/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FProvo_Golf_Club_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2aa7177/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBight_Reef_main_turtle_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f4b3afb/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTaylor_Bay_2_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1d16a6e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGrace_Bay_2_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/6ffdf5a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FPillory_Beach_main_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c14b3b4/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTaylor_Bay_3_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/ae8b865/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fshipwreck_Getty.jpg'
    ],
  },
  {
    id: 10,
    name: 'Tokyo',
    rank: "#10 in World's Best Places to Visit",
    description:
      "Simply setting foot in Japan's frenetic capital city is an experience. Known for its bustling streets and flashing neon signs, Tokyo has an electric energy and ample top attractions to discover. Foodies won't be let down by Tokyo's fresh sushi and hearty ramen (not to mention more Michelin-starred restaurants than any other city in the world). Shopaholics will find plenty of must-have designer products in Ginza, while those seeking a respite in nature can visit Shinjuku Gyoen or Yoyogi Park. Meanwhile, history buffs will appreciate Tokyo's centuries-old temples and shrines.",
    images: [
    ],
  },
  {
    id: 11,
    name: 'Phuket',
    rank: "#11 in World's Best Places to Visit",
    description:
      "Located in southern Thailand, the island of Phuket offers something for everyone, especially budget-minded travelers. Activities like spa treatments and boat tours come with low price tags, as do accommodations, making this a cheap tropical vacation option. For stunning scenery, check out the limestone cliffs of Phang Nga Bay and lounge on Phuket's gorgeous white sand beaches (Freedom Beach and Bang Tao Beach are two popular destinations). Other top attractions include Wat Chalong Temple and the Big Buddha. Once the sun sets, hitch a ride on a tuk-tuk and take part in the island's lively nightlife scene. ",
    images: [
    ],
  },
  {
    id: 12,
    name: 'Costa Rica',
    rank: "#12 in World's Best Places to Visit",
    description:
      "From volcanic mountains and verdant rainforests to tumbling waterfalls and miles of stunning shoreline, Costa Rica is a Central American gem. Explore the beaches along the Nicoya Peninsula, hike along Arenal Volcano and spot exotic wildlife (think: river turtles, otters and howler monkeys) in remote Tortuguero National Park. If you're looking for an adrenaline rush, go swimming next to some of the country's waterfalls or zip lining through its rainforests. Then, head back to an eco-luxury all-inclusive resort to unwind. Just make sure you plan a visit during Costa Rica's dry season, which falls between mid-December and April. ",
    images: [
    ],
  },
  {
    id: 13,
    name: 'South Island, New Zealand',
    rank: "#13 in World's Best Places to Visit",
    description:
      "New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to spectacular fjords. Here, you can admire the mountains of Fiordland National Park from hiking trails or a boat on Milford Sound/Piopiotahi. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown (a favorite destination among bungee jumpers), sample delicious sauvignon blanc wine in the Marlborough region or explore New Zealand's most accessible glaciers – Franz Josef and Fox Glacier – on the island's west coast.",
    images: [
    ],
  },
  {
    id: 14,
    name: 'Tahiti',
    rank: "#14 in World's Best Places to Visit",
    description:
      "Travel to this island – the largest in French Polynesia – if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow combined with experiencing an ancient culture. Beyond the posh resorts, Tahiti boasts black sand and golden beaches, a bustling capital (Papeete) and prime snorkeling and surfing conditions. If you're looking for more cultural activities, check out some of the island's temples, shop for Tahitian pearls at its traditional indoor markets or enjoy local performance art. To save money, opt to stay in a vacation rental – the island is home to plenty of cute bungalows and chic condos.",
    images: [
    ],
  },
  {
    id: 15,
    name: 'Banff',
    rank: "#15 in World's Best Places to Visit",
    description:
      "An Alberta town full of acclaimed restaurants, breweries, boutiques and art galleries, Banff makes for an exciting vacation in every season. Vacationers can spend their days hiking, relaxing in hot springs and boating on scenic lakes. Banff's location within the Canadian Rockies also makes it easy for visitors to access Banff National Park, which boasts some of the world's most beautiful vistas. Inside the park, travelers can admire sweeping views of the Bow Valley from the Banff Gondola or while schussing the slopes at the park's three ski resorts.",
    images: [
    ],
  },
  {
    id: 16,
    name: 'Great Barrier Reef',
    rank: "#16 in World's Best Places to Visit",
    description:
      "The globe's largest coral reef system – and one of the original Seven Natural Wonders of the World – touts one-of-a-kind scenery. At Australia's Great Barrier Reef, you'll find more than 600 islands and 1,500-plus species of fish. Though plenty of diving and snorkeling spots can be found along Queensland's coast, to escape the crowds, visit the Whitsunday Islands (which happen to have some of the world's best beaches). Also, save time for viewing the reef from above during a flightseeing excursion.",
    images: [
    ],
  },
  {
    id: 17,
    name: 'Amsterdam',
    rank: "#17 in World's Best Places to Visit",
    description:
      "Famous museums, tulips, canal-lined streets, \"coffee shops\" and high-end boutiques await you in Amsterdam. Here, you can spend your days gazing at Vincent van Gogh paintings, relaxing in Vondelpark and shopping in The Nine Streets area. Immerse yourself in Amsterdam's street food scene by eating herring or Dutch fries, or satisfy your sweet tooth with stroopwafels. You can also do as the Dutch do and rent a bicycle to tour the city. If you plan on visiting in spring, don't miss the Keukenhof gardens, where you can view millions of colorful flowers. ",
    images: [
    ],
  },
  {
    id: 18,
    name: 'Barcelona',
    rank: "#18 in World's Best Places to Visit",
    description:
      "This Spanish city is a feast for the eyes: Visitors can walk past medieval architecture in the Barri Gòtic, snap photos of the intricate Basílica de la Sagrada Família and marvel at more of Antoni Gaudí's whimsical creations in Park Güell. Meanwhile, Barceloneta beach and the Parc de la Ciutadella are perfect places to pass the time on a sunny day before checking out the restaurants and bars along Las Ramblas, which buzzes at all hours of the night. For travelers who want to see Barcelona from above, trek up Tibidabo or to the Bunkers del Carmel.",
    images: [
    ],
  },
  {
    id: 19,
    name: 'St. Lucia',
    rank: "#19 in World's Best Places to Visit",
    description:
      "Dotted with luxurious boutique hotels and stunning mountainside resorts, this Caribbean destination is ideal for lovebirds and adrenaline junkies. Those in search of relaxation will find it on the island's unspoiled shorelines (specifically Reduit Beach and Anse Chastanet). Meanwhile, adventure seekers can test their limits climbing the Pitons or zip lining through the Chassin region's rainforest. The dry season, from December to April, is the most popular (and expensive) time to visit, but budget-conscious travelers can find superb weather and cheaper room rates if they arrive in May or June. ",
    images: [
    ],
  },
  {
    id: 20,
    name: 'Sydney',
    rank: "#20 in World's Best Places to Visit",
    description:
      "Sydney offers more than just a dizzying array of famous landmarks, such as the Sydney Opera House, Mrs. Macquarie's Chair and the Sydney Harbour Bridge. This Australia metropolis boasts a warm, sunny climate that is ideal for relaxing or surfing at world-renowned beaches like Coogee, Bondi and Manly. Sydney also hosts several seasonal events, including concerts and food festivals. No visit would be complete without visiting museums like the Hyde Park Barracks and the Australian Museum to get an overview of the city's history and culture.",
    images: [
     ],
  },
  {
    id: 21,
    name: 'Dubai',
    rank: "#21 in World's Best Places to Visit",
    description:
      "Stunning Persian Gulf views, heart-pumping activities and historical landmarks await you in Dubai. This Middle Eastern city is filled with some of the world's most notable and unique attractions, including the Dubai Mall, indoor Ski Dubai and Burj Khalifa, the tallest building on the planet. But the city still holds onto its heritage, as seen in the Bastakiya Quarter and the traditional Gold and Spice souks. When you need a break from the hustle and bustle of the city, head to a sandy shore like Jumeirah Public Beach, Sunset Beach or Al Mamzar Beach Park.",
    images: [
    ],
  },
];

// Modal Component
const Modal = ({ show, onClose, images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!show) return null;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose} aria-label="Close Modal">
          &times;
        </button>
        {images.length > 1 && (
          <>
            <button className="modal-prev-button" onClick={handlePrev} aria-label="Previous Image">
              &#10094;
            </button>
            <button className="modal-next-button" onClick={handleNext} aria-label="Next Image">
              &#10095;
            </button>
          </>
        )}
        <img
          src={images[currentIndex] || '/images/placeholder.png'}
          alt={`${name} view ${currentIndex + 1}`}
          className="modal-image"
        />
      </div>
    </div>
  );
};

const Destinations = () => {
  const [modalData, setModalData] = useState({
    show: false,
    images: [],
    name: '',
  });

  const openModal = (images, name) => {
    setModalData({
      show: true,
      images: images.length > 0 ? images : ['/images/placeholder.png'],
      name: name,
    });
  };

  const closeModal = () => {
    setModalData({
      show: false,
      images: [],
      name: '',
    });
  };

  return (
    <div className="destinations-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>{' '}
        &gt; <span className="current-page">Destinations</span>
      </div>

      {/* Page Heading */}
      <div className="destinations-heading">
        <h2 className="destinations-title">WORLD'S BEST PLACES TO VISIT</h2>
        <p className="destinations-subtitle">
          With a world full of fascinating travel destinations, choosing the perfect vacation spot can present a challenge. That's why TravelPie used expert opinions, reader votes and current trends – and evaluated sights, cultures, scenic beauty, food options and more – to compile this list of the world's best places to visit. Use these recommendations to craft your travel bucket list, and cast your vote below to help us determine next year's ranking.
        </p>
      </div>

      {/* Destinations Cards */}
      <div className="destinations-cards-container">
        {destinationsData.map((destination) => (
          <div key={destination.id} className="destination-card">
            <div className="destination-image-container">
              <img
                src={destination.images[0] || '/images/placeholder.png'}
                alt={destination.name}
                className="destination-image"
                onClick={() => openModal(destination.images, destination.name)}
              />
            </div>
            <div className="destination-info">
              <h3 className="destination-name">{destination.name}</h3>
              <p className="destination-rank">{destination.rank}</p>
              <p className="destination-description">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <Modal
        show={modalData.show}
        onClose={closeModal}
        images={modalData.images}
        name={modalData.name}
      />
    </div>
  );
};

export default Destinations;
