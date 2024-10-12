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
      'https://travel.usnews.com/dims4/USNEWS/da4a14f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTokyo-GettyImages-Jackyenjoyphotography.jpg',
      'https://travel.usnews.com/dims4/USNEWS/e3bd73c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAsakusa-SeanPavonePhoto-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/5dee24e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAerial_view-Yukinori_Hasumi-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/357652d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fhonkan02-National_Museum.jpg',
      'https://travel.usnews.com/dims4/USNEWS/64c0a6e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTokyo_Station_Square-Torjrtrx-Getty_sFrsb8g.jpg',
      'https://travel.usnews.com/dims4/USNEWS/18b2dab/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTokyo_Tower_at_Night-Eakkawatna-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/84b20c9/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCherry_Blossom-Margarita_Almpanezou-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b9d8e78/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTokyo_Station_Facade-Torjrtrx-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/62fa51a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fhonkan_room11-3-national_museum.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2994e25/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-503547958.jpg'
    ],
  },
  {
    id: 11,
    name: 'Phuket',
    rank: "#11 in World's Best Places to Visit",
    description:
      "Located in southern Thailand, the island of Phuket offers something for everyone, especially budget-minded travelers. Activities like spa treatments and boat tours come with low price tags, as do accommodations, making this a cheap tropical vacation option. For stunning scenery, check out the limestone cliffs of Phang Nga Bay and lounge on Phuket's gorgeous white sand beaches (Freedom Beach and Bang Tao Beach are two popular destinations). Other top attractions include Wat Chalong Temple and the Big Buddha. Once the sun sets, hitch a ride on a tuk-tuk and take part in the island's lively nightlife scene. ",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/977c2bd/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fboat_tours_attraction_rhtQ1dy.jpg',
      'https://travel.usnews.com/dims4/USNEWS/55d7ddb/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_image_2017_getty_REDhwov.jpg',
      'https://travel.usnews.com/dims4/USNEWS/5a151f7/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fnai_harn_getty_IYLNqng.jpg',
      'https://travel.usnews.com/dims4/USNEWS/235d59a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fkata_noi_getty_KczNkIx.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f40344f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fwat_chalong_getty_NyDm1Ak.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b28fac2/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Frailay_viewpoint_getty_gXCj87j.jpg',
      'https://travel.usnews.com/dims4/USNEWS/9beb99d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fkaron_beach_getty_XeyGtKK.jpg',
      'https://travel.usnews.com/dims4/USNEWS/bd7f5b9/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fphuket_town_getty_izbxVXO.jpg',
      'https://travel.usnews.com/dims4/USNEWS/e4ace87/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fcape_promthep_getty_0WaDOeP.jpg',
      'https://travel.usnews.com/dims4/USNEWS/e4ace87/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fcape_promthep_getty_0WaDOeP.jpg'
    ],
  },
  {
    id: 12,
    name: 'Costa Rica',
    rank: "#12 in World's Best Places to Visit",
    description:
      "From volcanic mountains and verdant rainforests to tumbling waterfalls and miles of stunning shoreline, Costa Rica is a Central American gem. Explore the beaches along the Nicoya Peninsula, hike along Arenal Volcano and spot exotic wildlife (think: river turtles, otters and howler monkeys) in remote Tortuguero National Park. If you're looking for an adrenaline rush, go swimming next to some of the country's waterfalls or zip lining through its rainforests. Then, head back to an eco-luxury all-inclusive resort to unwind. Just make sure you plan a visit during Costa Rica's dry season, which falls between mid-December and April. ",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/220aa39/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F10b-Cocles_Beach-Credit_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1c06f2a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F15-Nauyaca_Waterfalls-Credit_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f34c0e8/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F17-Irazu_Volcano-Credit_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/34bf84e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F21-Nosara-Credit_CampPhoto-Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0d46c56/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F3-Ecotermales_Hot_Springs-Credit_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a6be679/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F8a-Corcovado_National_Park-Credit_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2fddc22/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F2a-Guanacaste-Credit_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3219ac0/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F1b-Montezuma-Credit_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/656e007/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F7c-Arenal_Volcano-Credit_Visit_Costa_Rica.jpg',
      'https://travel.usnews.com/dims4/USNEWS/32acc67/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F4c-Manuel_Antonio-Credit_Getty_Images.jpg'
    ],
  },
  {
    id: 13,
    name: 'South Island, New Zealand',
    rank: "#13 in World's Best Places to Visit",
    description:
      "New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to spectacular fjords. Here, you can admire the mountains of Fiordland National Park from hiking trails or a boat on Milford Sound/Piopiotahi. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown (a favorite destination among bungee jumpers), sample delicious sauvignon blanc wine in the Marlborough region or explore New Zealand's most accessible glaciers – Franz Josef and Fox Glacier – on the island's west coast.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/a838120/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJoao_InacioGetty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/ca9ef01/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDunedinNZCourtesy_of_Tourism_New_Zealand.jpg',
      'https://travel.usnews.com/dims4/USNEWS/942a90f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMiles_HoldenCourtesy_of_Tourism_New_Zealand.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a5f9ba3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FjfoltynGetty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/31c1239/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FRatnakorn_PiyasirisorostGetty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/7838a04/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FgracethangGetty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b6cba1d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FChanachai_PanichpattanakijGetty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/594c323/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FUnlimited_New_ZealandCourtesy_of_Tourism_New_Zealand.jpg',
      'https://travel.usnews.com/dims4/USNEWS/16f0546/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJoppiGetty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a96ed7b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCultura_RFBen_Pipe_PhotographyGetty_Images.jpg'
    ],
  },
  {
    id: 14,
    name: 'Tahiti',
    rank: "#14 in World's Best Places to Visit",
    description:
      "Travel to this island – the largest in French Polynesia – if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow combined with experiencing an ancient culture. Beyond the posh resorts, Tahiti boasts black sand and golden beaches, a bustling capital (Papeete) and prime snorkeling and surfing conditions. If you're looking for more cultural activities, check out some of the island's temples, shop for Tahitian pearls at its traditional indoor markets or enjoy local performance art. To save money, opt to stay in a vacation rental – the island is home to plenty of cute bungalows and chic condos.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/75525f5/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fksaltbeach-white-sand.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c7dafea/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fviavadowaterfall-nature-outside.jpg',
      'https://travel.usnews.com/dims4/USNEWS/dfd1d5c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDamoceanblack-sand-beach-nature.jpg',
      'https://travel.usnews.com/dims4/USNEWS/6ac16a5/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fbpperryisland-view-aerial.jpg',
      'https://travel.usnews.com/dims4/USNEWS/ce4fcd1/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FVincent_Pommeyrolnature-mountain-water.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b0f28ca/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMichael_Runkelblack-sand-beach.jpg',
      'https://travel.usnews.com/dims4/USNEWS/cc15333/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDamoceanhike-mountain-view.jpg',
      'https://travel.usnews.com/dims4/USNEWS/57b8209/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCalinatgarden-plants-nature.jpg',
      'https://travel.usnews.com/dims4/USNEWS/56a4c9e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMlennymountain-island-nature.jpg',
      'https://travel.usnews.com/dims4/USNEWS/bc62a82/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDarryl_Leniukmarket-city-outside.jpg'
    ],
  },
  {
    id: 15,
    name: 'Banff',
    rank: "#15 in World's Best Places to Visit",
    description:
      "An Alberta town full of acclaimed restaurants, breweries, boutiques and art galleries, Banff makes for an exciting vacation in every season. Vacationers can spend their days hiking, relaxing in hot springs and boating on scenic lakes. Banff's location within the Canadian Rockies also makes it easy for visitors to access Banff National Park, which boasts some of the world's most beautiful vistas. Inside the park, travelers can admire sweeping views of the Bow Valley from the Banff Gondola or while schussing the slopes at the park's three ski resorts.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/c6fb51e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGondola_lookout2_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/d5e0d5e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCave_and_Basin_2-Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/4886f3e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJohnston_Canyon-Credit_Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/38535f0/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBuffalo_Nations_Luxton_Museum.jpg',
      'https://travel.usnews.com/dims4/USNEWS/9797a49/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMount_Norquay_summer_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/cc4efa4/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMoraine_Lake-2016.jpg',
      'https://travel.usnews.com/dims4/USNEWS/cc4efa4/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMoraine_Lake-2016.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c590204/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMoraine_Lake-attraction-2016.jpg',
      'https://travel.usnews.com/dims4/USNEWS/5719538/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSunshine_Village_Banff__Lake_Louise_Tourism-Noel_Hendrickson.jpg',
      'https://travel.usnews.com/dims4/USNEWS/7b0d970/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FColumbia_Icefield-2016.jpg'
    ],
  },
  {
    id: 16,
    name: 'Great Barrier Reef',
    rank: "#16 in World's Best Places to Visit",
    description:
      "The globe's largest coral reef system – and one of the original Seven Natural Wonders of the World – touts one-of-a-kind scenery. At Australia's Great Barrier Reef, you'll find more than 600 islands and 1,500-plus species of fish. Though plenty of diving and snorkeling spots can be found along Queensland's coast, to escape the crowds, visit the Whitsunday Islands (which happen to have some of the world's best beaches). Also, save time for viewing the reef from above during a flightseeing excursion.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/fe080bf/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Faquatic_life_dZuhRSO.jpg',
      'https://travel.usnews.com/dims4/USNEWS/7975a59/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fair_tours_aHNsfYX.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b5c63c0/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Ftownsville_UppFFrn.jpg',
      'https://travel.usnews.com/dims4/USNEWS/ab540c0/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgreat_barrier_reef_getty_maerie_jGkGIe7.jpg',
      'https://travel.usnews.com/dims4/USNEWS/734260a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fcairns_iD5syPP.jpg',
      'https://travel.usnews.com/dims4/USNEWS/fdeb7b1/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fsharks_MOc2PV4.jpg',
      'https://travel.usnews.com/dims4/USNEWS/cc8f396/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgreat_barrier_reef_getty_darrentierney_UWo66Gp.jpg',
      'https://travel.usnews.com/dims4/USNEWS/075d8c9/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgreat_barrier_reef_getty_wendy_townrow_oMwi47e.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a836e8a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgreat_barrier_reef_bleaching_2FIkLY5.jpg',
      'https://travel.usnews.com/dims4/USNEWS/63f1499/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgreat_barrier_reef_getty_hayden_fazakarley_eyeem_BxhmNzs.jpg'
    ],
  },
  {
    id: 17,
    name: 'Amsterdam',
    rank: "#17 in World's Best Places to Visit",
    description:
      "Famous museums, tulips, canal-lined streets, \"coffee shops\" and high-end boutiques await you in Amsterdam. Here, you can spend your days gazing at Vincent van Gogh paintings, relaxing in Vondelpark and shopping in The Nine Streets area. Immerse yourself in Amsterdam's street food scene by eating herring or Dutch fries, or satisfy your sweet tooth with stroopwafels. You can also do as the Dutch do and rent a bicycle to tour the city. If you plan on visiting in spring, don't miss the Keukenhof gardens, where you can view millions of colorful flowers. ",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/9938fc2/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAlexander_SpatariBuildings-water-path-bridge.jpg',
      'https://travel.usnews.com/dims4/USNEWS/e86d73a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FOlena_ZFlowers-buildings-windmill-landscape-plants-sun-sky-people.jpg',
      'https://travel.usnews.com/dims4/USNEWS/155aaa2/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGeorge_PachantourisCity-center-square-buildings-flowers-sky-sunset.jpg',
      'https://travel.usnews.com/dims4/USNEWS/79b4e9c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FIngus_KruklitisCity-aerial-view-buildings-water-canal-boats.jpg',
      'https://travel.usnews.com/dims4/USNEWS/e090154/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmathesspark-water-building-flowers-plants-nature.jpg',
      'https://travel.usnews.com/dims4/USNEWS/57588a3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fneirfysign-outside-landscape-flowers.jpg',
      'https://travel.usnews.com/dims4/USNEWS/99ba90d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAlexander_SpatariBuildings-sky-colorful-sidewalk-plants.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1b0f36f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FPaul_Crudgington__EyeEmPark-outside-nature.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a339fbc/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGeorge_PachantourisWater-canal-boats-tours-sighseeing-city-buildings.jpg',
      'https://travel.usnews.com/dims4/USNEWS/228696e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJan_Kees_SteenmanBuilding-museum-art-outside-lawn.jpg'
    ],
  },
  {
    id: 18,
    name: 'Barcelona',
    rank: "#18 in World's Best Places to Visit",
    description:
      "This Spanish city is a feast for the eyes: Visitors can walk past medieval architecture in the Barri Gòtic, snap photos of the intricate Basílica de la Sagrada Família and marvel at more of Antoni Gaudí's whimsical creations in Park Güell. Meanwhile, Barceloneta beach and the Parc de la Ciutadella are perfect places to pass the time on a sunny day before checking out the restaurants and bars along Las Ramblas, which buzzes at all hours of the night. For travelers who want to see Barcelona from above, trek up Tibidabo or to the Bunkers del Carmel.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/8c65c6b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FParc_Guell_Gatsi_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f4565cf/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FLa_Rambla_aerial_Nikada_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/175e505/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSagrada_aerial_Pol_Albarran_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2d09eb8/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F27686161020_6fd70fe654_o_zGCgnKN.jpg',
      'https://travel.usnews.com/dims4/USNEWS/95676ce/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-901203318_uNXAuQ0.jpg',
      'https://travel.usnews.com/dims4/USNEWS/343a234/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FLa_Rambla_Eva-Katalin_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f10b459/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FParc_Guell_trees_Jacek_Kadaj_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/e29f5b6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-696254553.jpg',
      'https://travel.usnews.com/dims4/USNEWS/98a4561/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-689267522.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f18e0c4/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBarceloneta_Alexander_Spatari_Getty.jpg'
    ],
  },
  {
    id: 19,
    name: 'St. Lucia',
    rank: "#19 in World's Best Places to Visit",
    description:
      "Dotted with luxurious boutique hotels and stunning mountainside resorts, this Caribbean destination is ideal for lovebirds and adrenaline junkies. Those in search of relaxation will find it on the island's unspoiled shorelines (specifically Reduit Beach and Anse Chastanet). Meanwhile, adventure seekers can test their limits climbing the Pitons or zip lining through the Chassin region's rainforest. The dry season, from December to April, is the most popular (and expensive) time to visit, but budget-conscious travelers can find superb weather and cheaper room rates if they arrive in May or June. ",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/0780ce5/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAnseChastanet-Aerial-9.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f0f232a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FToraille.jpg',
      'https://travel.usnews.com/dims4/USNEWS/95463bd/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMiton_Cogheil-EyeEm.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b2e714a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMorne_Coubaril.jpg',
      'https://travel.usnews.com/dims4/USNEWS/8e81d32/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAnseChastanet_LC_2.jpg',
      'https://travel.usnews.com/dims4/USNEWS/26f1ef5/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAnse_Chastanet_-_Anse_Mamin.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3ace489/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSulphur_Springs_-_2.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0421bb6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fjaminwell.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3953836/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FWildrozeBeach-water-nature-outside-plants.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a967845/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGros_Piton_with_flowers_Milton_Cogheil_-EyeEm.jpg'
    ],
  },
  {
    id: 20,
    name: 'Sydney',
    rank: "#20 in World's Best Places to Visit",
    description:
      "Sydney offers more than just a dizzying array of famous landmarks, such as the Sydney Opera House, Mrs. Macquarie's Chair and the Sydney Harbour Bridge. This Australia metropolis boasts a warm, sunny climate that is ideal for relaxing or surfing at world-renowned beaches like Coogee, Bondi and Manly. Sydney also hosts several seasonal events, including concerts and food festivals. No visit would be complete without visiting museums like the Hyde Park Barracks and the Australian Museum to get an overview of the city's history and culture.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/4b99115/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSydney_Harbour_Bridge_sunrise_seng_chye_teo_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/6074ada/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSydney_Harbour_at_dusk_Vijay_Anand_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/42ab1f1/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FRoyal_Botanic_Garden_mauricallard_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3f50aff/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAerial_View_of_Sydney_Harbour.jpg',
      'https://travel.usnews.com/dims4/USNEWS/caa67a4/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSydney_Opera_House_Allistair_McLellan_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/9997e66/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSydney_Harbour_Bridge_fireworks_Neon_Jellyfish_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/7b8752a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSydney_Harbour_zetter_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3c59ca6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FThe_Rocks_Oliver_Strewe_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f47a986/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDarling_Harbour_3_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f33016f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FRoyal_Botanic_Gardens.jpg'
     ],
  },
  {
    id: 21,
    name: 'Dubai',
    rank: "#21 in World's Best Places to Visit",
    description:
      "Stunning Persian Gulf views, heart-pumping activities and historical landmarks await you in Dubai. This Middle Eastern city is filled with some of the world's most notable and unique attractions, including the Dubai Mall, indoor Ski Dubai and Burj Khalifa, the tallest building on the planet. But the city still holds onto its heritage, as seen in the Bastakiya Quarter and the traditional Gold and Spice souks. When you need a break from the hustle and bustle of the city, head to a sandy shore like Jumeirah Public Beach, Sunset Beach or Al Mamzar Beach Park.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/78fc683/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FLarge-DTCM_Palm_Jumeirah_1.jpg',
      'https://travel.usnews.com/dims4/USNEWS/046e25b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBurj_Khalifa_3_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0369307/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FLarge-DET_Dubai_Frame_Always_On_2.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f0c8550/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJumeirah_Mosque_2_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/39f911d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAl_Bastakiya_Quarter_2_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2bfa497/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDET_Downtown_Dubai_Always_On_6.jpg',
      'https://travel.usnews.com/dims4/USNEWS/619e39a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDTCM_Burj_Al_Arab_3.jpg',
      'https://travel.usnews.com/dims4/USNEWS/8e44634/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FLarge-DET_Palm_Jumeirah_Always_On_5.jpg',
      'https://travel.usnews.com/dims4/USNEWS/237cf15/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDET_Burj_Al_Arab_Always_On_1.jpg',
      'https://travel.usnews.com/dims4/USNEWS/07fb426/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDesert_Conservation_3_Getty.jpg'
    ],
  },
  {
    id: 22,
    name: 'New York City',
    rank: "#22 in World's Best Places to Visit",
    description:
      "New York City hosts infinite urban adventures: You can wander through Central Park, tour art exhibits at The Metropolitan Museum of Art, catch a classic New York Broadway show or peruse SoHo's stylish boutiques. At night, admire Manhattan's glittering skyscrapers from the top of the Empire State Building or the rooftop bar of a trendy boutique hotel. Foodies will also appreciate New York's endless restaurant options and commendable number of Michelin stars. If you want to sample a bit of everything, sign up for a food tour.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/336fa15/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCentral_Park_sunset_Wojtek_Zagorski_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f458dcc/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCentral_Park_green_Alexander_Spatari_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/4aee1bb/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FEmpire_State_Building_Getty_Zsolt_Hlinka.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2e3aa16/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FStatue_and_skyline_Getty_TriggerPhoto.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0f5bc1e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FOne_WTC_Getty_Tetra_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/4c01b4a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCentral_Park_lake_and_cherry_blossoms_Andria_Patino_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/9e65ec5/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCentral_Park_boat_house_Vicki_Jauron_Babylon_and_Beyond_Photography_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/ef44dd5/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FESB_skyline_Getty_adamkaz.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f901ec1/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FStatue_of_Liberty_dusk_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/cf7910a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FEllis_Island_Danny_Lehman_Getty.jpg'
    ],
  },
  {
    id: 23,
    name: 'Santorini',
    rank: "#23 in World's Best Places to Visit",
    description:
      "Frequently touted as a top destination for vacation, Greece's most popular isle woos newlyweds every year with its breathtaking sunsets, whitewashed villages and colorful beaches. Archaeological sites, such as Ancient Thira and the prehistoric Akrotiri, beckon to history buffs, while central Santorini's wine tours lure oenophiles. Work up an appetite by hiking along the rim of the caldera, then head to scenic Amoudi Bay to dine alfresco. Meanwhile, travelers looking for a relaxing daytrip can hop on a boat to the nearby island of Thirassia.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/c6e3c8e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-541132240.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0692113/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F4-Ancient_Thira_ruined_house-Credit_Westend61-Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3d4d234/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-466234324.jpg',
      'https://travel.usnews.com/dims4/USNEWS/bbaa953/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-603718150.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3552912/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F9-Pyrgos_in_the_evening-Credit_StephenBridger-Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0cfa6d3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F4-Ancient_Thira-Credit_WitR-Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/634a6b5/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fa_20.jpg',
      'https://travel.usnews.com/dims4/USNEWS/47d6969/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F9-Pyrgos_in_the_daytime-Credit_amriphoto-Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a47ca57/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F12-Inland_village-Emporia-Credit_Socha-Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/53c3f31/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F2-Amoudi_Bay-GettyImages-547233462.jpg'
    ],
  },
  {
    id: 24,
    name: 'British Virgin Islands',
    rank: "#24 in World's Best Places to Visit",
    description:
      "If picturesque beaches and warm weather are what you're after, look no further than the British Virgin Islands. For easy access to Smuggler's Cove, Brewers Bay, and other top-notch BVI beaches, consider booking your hotel room on Tortola, the area's largest island. Plus, you can easily hop between the smaller islands on a boat tour. Head to Virgin Gorda to see the must-visit rock formations of The Baths and hike through Gorda Peak National Park, or truly get away from the crowds on the island of Anegada, which offers stretches of secluded white sand beaches.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/33480f1/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fbvi_new_main_edited_n1Gy7nz.jpg',
      'https://travel.usnews.com/dims4/USNEWS/7dd2520/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fthe_baths_main_getty_KvGwkjr.jpg',
      'https://travel.usnews.com/dims4/USNEWS/00f218b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fanegada_getty_shalamov_AAdAvHv.jpg',
      'https://travel.usnews.com/dims4/USNEWS/9f70b5f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmarina_cay_bettyx1138_flickr_GJNumVo.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b8723a6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fsailing_getty_karl_weatherly_ha6st5S.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c7faf1b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fboats_harbor_at_night_getty_anya_brewley_schultheiss_ITa6TSn.jpg',
      'https://travel.usnews.com/dims4/USNEWS/335b8e9/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fsage_mountain_main_getty_SacqLWR.jpg',
      'https://travel.usnews.com/dims4/USNEWS/4186066/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fthe_baths_3_getty_JiSSinO.jpg',
      'https://travel.usnews.com/dims4/USNEWS/17e97ae/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fdevils_bay_aUGlVMA.jpg',
      'https://travel.usnews.com/dims4/USNEWS/923beaf/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-486633788_D8YmMcD.jpg'
    ],
  },
  {
    id: 25,
    name: 'Bali',
    rank: "#25 in World's Best Places to Visit",
    description:
      "Serene temples and beautiful beaches are the biggest draws to this lush Indonesian paradise. And we do mean lush – the region's notoriously soggy wet season is best avoided by planning a visit between April and October. Break up your beach time with a visit to the village of Kintamani, home to a towering (and active) volcano, as well as a large lake. If you're craving an adrenaline rush, hop on one of Bali's many swings to soar above rice terraces and jungles. Meanwhile, foodies can whip up some nasi goreng during a Balinese cooking class.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/d70f52a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSunrise_Batur_Lake_Getty_Pandu_Adnyana.jpg',
      'https://travel.usnews.com/dims4/USNEWS/bf8f994/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FNusa_dua2_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/d8d483b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBesakih_temples_Getty_Witthaya.jpg',
      'https://travel.usnews.com/dims4/USNEWS/49abc36/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBali_trees_volcano_rice_fields_Getty_Michele_Falzeone.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1f7ceed/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGunung_Kawi-main_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/024532d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FTegalalang_Rice_Terrace_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/9973a8b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fnusa_penida_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/65d9971/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSanur_Beach_2_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/38d6be8/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmt_batur_sunrise_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/73d9dad/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FUluwatu_temple_Getty_asab974.jpg',
      'https://travel.usnews.com/dims4/USNEWS/85c04ac/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSanga_ParkCity-skyline-buildings.jpg'
    ],
  },
  {
    id: 26,
    name: 'Tulum',
    rank: "#26 in World's Best Places to Visit",
    description:
      "Consider Tulum if you're longing for an approachable Bohemian beach getaway. This relatively easy-to-reach Mexico hot spot lies nearly 80 miles southwest of Cancún and boasts many sandy, palm-lined beaches, including the popular Playa Paraíso. Beyond its shoreline, Tulum features everything from cerulean swimming holes called cenotes to fascinating Mayan ruins. The true allure of Tulum is its aesthetic, which includes chic boutique hotels, trendy open-air restaurants and yoga lounges under a jungle canopy. Bike down Beach Road to find everything from matcha to fashionable shops.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/744452d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSimon_Dannhauer-Getty_Images.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3310beb/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FYal-ku_Lagoon_Media_Raw_Stock_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/661cb86/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMardoz.jpg',
      'https://travel.usnews.com/dims4/USNEWS/49c2c05/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fturtle_getty_h7Q0EgF.jpg',
      'https://travel.usnews.com/dims4/USNEWS/df213bf/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJJ0A3266.jpg',
      'https://travel.usnews.com/dims4/USNEWS/d98c297/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FReinhard_Dirscherl.jpg',
      'https://travel.usnews.com/dims4/USNEWS/b99db6e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FElis_Blanca.jpg',
      'https://travel.usnews.com/dims4/USNEWS/f45d01f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FDC_Colombia.jpg',
      'https://travel.usnews.com/dims4/USNEWS/abfad61/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMuyil_3_Getty.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0cf3e9f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMardoz_sWIFyOY.jpg'
    ],
  },
  {
    id: 27,
    name: 'Florence',
    rank: "#27 in World's Best Places to Visit",
    description:
      "Florence, Italy, offers numerous world-famous attractions, including the Duomo, Piazzale Michelangelo and Piazza della Signoria. Plus, it's a haven for art lovers thanks to art-focused museums like the Galleria dell'Accademia di Firenze and the Uffizi Gallery. After appreciating this historic Italian city's Renaissance architecture and art, sample some of the region's delectable Tuscan food and wine at Florence's quaint cafes, gelato shops and ristorantes. Then, cross the Ponte Vecchio bridge to get to Italy's acclaimed Palazzo Pitti and the Boboli Gardens, where you'll find fountains, meticulously landscaped green spaces and panoramic views.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/36fce36/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FElena_PueyoSkyline-city-sunset.jpg',
      'https://travel.usnews.com/dims4/USNEWS/6f7528b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FPablo_CharlonBridge-water-sunset.jpg',
      'https://travel.usnews.com/dims4/USNEWS/31d243e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGary_Yeowellmuseum-aerial.jpg',
      'https://travel.usnews.com/dims4/USNEWS/47f5980/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FlupengyuCity-buildings-people.jpg',
      'https://travel.usnews.com/dims4/USNEWS/abc5aa0/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FermessChurch-building.jpg',
      'https://travel.usnews.com/dims4/USNEWS/4871feb/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FThe_Chickenwingmuseum-architecture-sunset.jpg',
      'https://travel.usnews.com/dims4/USNEWS/fb35235/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSuttipong_SutiratanachaiSkyline-city-buildings.jpg',
      'https://travel.usnews.com/dims4/USNEWS/5843806/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAtlantide_PhototravelBuilding-historic.jpg',
      'https://travel.usnews.com/dims4/USNEWS/aa92e6c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCAHKTPalace-historic-building.jpg',
      'https://travel.usnews.com/dims4/USNEWS/023b136/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FVladislav_ZolotovBuilding-city.jpg'
    ],
  },
  {
    id: 28,
    name: 'Grand Canyon National Park',
    rank: "#28 in World's Best Places to Visit",
    description:
      "Measuring roughly 277 miles long, 18 miles wide and about a mile deep, the Grand Canyon is brimming with outdoor activities for everyone from day-trippers to adventure junkies. Hike along the national park's popular Rim and Bright Angel trails for unparalleled vistas, cool off with a whitewater rafting excursion down the Colorado River or view the dramatic Arizona landscape from above during a helicopter tour. If you're feeling especially daring, sign up for a skydiving excursion above the canyon.",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/812a7ad/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGC1.jpg',
      'https://travel.usnews.com/dims4/USNEWS/6cd58f6/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBartfettwatchtower-grand-canyon-view.jpg',
      'https://travel.usnews.com/dims4/USNEWS/0ba9f0a/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMartin_RuegnerAerial-view-horseshoe-bend.jpg',
      'https://travel.usnews.com/dims4/USNEWS/4d7fcce/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FAndranik_BarsegyanHike-view-trail.jpg',
      'https://travel.usnews.com/dims4/USNEWS/37edbdb/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FPeter_Ungergrand-canyon-hike.jpg',
      'https://travel.usnews.com/dims4/USNEWS/4c5b80d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJohn_ElkWatch-tower-grand-canyon.jpg',
      'https://travel.usnews.com/dims4/USNEWS/aaf3340/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBasic_Elements_PhotographyAerial-skyline-colorful.jpg',
      'https://travel.usnews.com/dims4/USNEWS/92cb449/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FPatrick_J._Endreshike-view-trail.jpg',
      'https://travel.usnews.com/dims4/USNEWS/72f5814/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBrandon_Mutariwaterfall-nature-view.jpg',
      'https://travel.usnews.com/dims4/USNEWS/a1c1454/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FHemant_Kulkarni__500pxGrand-canyon-view-nature.jpg'
    ],
  },
  {
    id: 29,
    name: 'Tasmania',
    rank: "#29 in World's Best Places to Visit",
    description:
      "Set your sights on a far-flung adventure down under in Tasmania, Australia's island state located about 150 miles from the mainland. Tassie (as locals call it) is sure to impress with its wildlife (think: Tasmanian devils, fairy penguins and kangaroos) and awe-inspiring scenery, including 19 national parks, such as Cradle Mountain-Lake St Clair National Park and Freycinet National Park. The waterfront cities of Hobart and Launceston also offer stunning settings, plus acclaimed art and gastronomy scenes. Not to mention, the island is home to four wine trails, so you can taste the region's pinot noir and sparkling options no matter where you stay. ",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/dbfde85/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fcradle_mountain_X4lrnIX.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c074545/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fwellington_park_sLlN8oq.jpg',
      'https://travel.usnews.com/dims4/USNEWS/be8b586/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fbonorong_wildlife_sanctuary_V15uNah.jpg',
      'https://travel.usnews.com/dims4/USNEWS/dd427c7/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fsunset_at_freycinet_national_park_Y1HYa1h.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1a3489d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fbay_of_fires_conservation_area_WYgHE5N.jpg',
      'https://travel.usnews.com/dims4/USNEWS/55d45a9/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fthree_capes_track_wN15VI3.jpg',
      'https://travel.usnews.com/dims4/USNEWS/7debf25/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Faurora_australis_HivPQuv.jpg',
      'https://travel.usnews.com/dims4/USNEWS/204cbb3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fbridestowe_lavender_estate_Qf1myir.jpg',
      'https://travel.usnews.com/dims4/USNEWS/da844fd/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Ffreycinet_national_park_1xGGv0z.jpg',
      'https://travel.usnews.com/dims4/USNEWS/ab72ce4/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Flaunceston_cataract_gorge_first_basin_pa08WTE.jpg'
    ],
  },
  {
    id: 30,
    name: 'Rio de Janeiro',
    rank: "#30 in World's Best Places to Visit",
    description:
      "Christ the Redeemer, Sugarloaf Mountain and the shores of Copacabana and Ipanema beaches are just a few reasons why you should plan a trip to Rio. In this mesmerizing Brazilian city, you can revel in the sounds of samba in the Lapa neighborhood after strolling along the cobblestone sidewalks of Santa Teresa. Time your visit for February if you want to experience Carnival, though keep in mind that flights and hotels are expensive when this world-famous celebration takes place. ",
    images: [
      'https://travel.usnews.com/dims4/USNEWS/7d528a7/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FIlha_Fiscal_rio_getty_Rolf_Richrdson__robertharding.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3b9f92b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_yIo9V9K.jpg',
      'https://travel.usnews.com/dims4/USNEWS/1595693/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fprainha_9vIMlJq.jpg',
      'https://travel.usnews.com/dims4/USNEWS/c023378/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FChrist_the_Redeemer_Rio_Getty_Christian_Adams.jpg',
      'https://travel.usnews.com/dims4/USNEWS/cc91a1d/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FJardim_Botanico_Rio_Getty_Marcelo_Freire_Photograhy.jpg',
      'https://travel.usnews.com/dims4/USNEWS/2600231/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FView_from_Sugar_Loaf_Mountain_Rio_Getty_Artie_Photography_Artie_Ng.jpg',
      'https://travel.usnews.com/dims4/USNEWS/d80a832/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FCopacabana_Rio_Getty_Anton_Petrus.jpg',
      'https://travel.usnews.com/dims4/USNEWS/3f5b3b7/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FPedra_da_Gavea_rio_getty_Ze_Martinusso.jpg',
      'https://travel.usnews.com/dims4/USNEWS/bc65257/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMetropolitan_Cathedral_Rio_Getty_Gonzalo_Azumendi.jpg',
      'https://travel.usnews.com/dims4/USNEWS/973e65b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-584791890.jpg'
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
    <div className="destination-modal-overlay" onClick={onClose}>
      <div className="destination-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="destination-modal-close-button" onClick={onClose} aria-label="Close Modal">
          &times;
        </button>
        {images.length > 1 && (
          <>
            <button className="destination-modal-prev-button" onClick={handlePrev} aria-label="Previous Image">
              &#10094;
            </button>
            <button className="destination-modal-next-button" onClick={handleNext} aria-label="Next Image">
              &#10095;
            </button>
          </>
        )}
        <img
          src={images[currentIndex] || '/images/placeholder.png'}
          alt={`${name} view ${currentIndex + 1}`}
          className="destination-modal-image"
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
      <div className="destination-breadcrumbs">
        <Link to="/" className="destination-breadcrumb-link">
          <b>Home</b>&nbsp;&nbsp;
        </Link>{' '}
        &gt; <span className="destination-current-page">&nbsp;&nbsp;<b>Destinations</b></span>
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
