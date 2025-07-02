import { Plant, Project, GridNode } from './types';

export const INITIAL_PLANTS: Plant[] = [
  { id: 'plant-1', name: 'Neem', localName: 'Limdo', botanicalName: 'Azadirachta indica', category: 'Medium Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: true, isNitrogenFixing: false, type: 'Native', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?neem,tree' },
  { id: 'plant-2', name: 'Mango', localName: 'Aambo', botanicalName: 'Mangifera indica', category: 'Large Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: true, isNitrogenFixing: false, type: 'Native', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?mango,tree' },
  { id: 'plant-3', name: 'Sapota', localName: 'Chiku', botanicalName: 'Manilkara zapota', category: 'Medium Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: true, isNitrogenFixing: false, type: 'Exotic', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?sapota,fruit' },
  { id: 'plant-4', name: 'Guava', localName: 'Jamfal', botanicalName: 'Psidium guajava', category: 'Small Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: true, isNitrogenFixing: false, type: 'Exotic', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?guava,fruit' },
  { id: 'plant-5', name: 'Jackfruit', localName: 'Fanas', botanicalName: 'Artocarpus heterophyllus', category: 'Large Tree', isFlowering: true, isFruitBearing: true, isPollinator: false, isBirdAttracting: true, isFragrant: false, isNitrogenFixing: false, type: 'Native', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?jackfruit,tree' },
  { id: 'plant-6', name: 'Tamarind', localName: 'Aamli', botanicalName: 'Tamarindus indica', category: 'Large Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: false, isNitrogenFixing: true, type: 'Native', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?tamarind,tree' },
  { id: 'plant-7', name: 'Kadamb', localName: 'Kadamb', botanicalName: 'Neolamarckia cadamba', category: 'Large Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: true, isNitrogenFixing: false, type: 'Native', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?kadamba,flower' },
  { id: 'plant-8', name: 'Karanj', localName: 'Karanj', botanicalName: 'Millettia pinnata', category: 'Medium Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: false, isFragrant: true, isNitrogenFixing: true, type: 'Native', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?karanja,tree' },
  { id: 'plant-9', name: 'Gulmohar', localName: 'Gulmohar', botanicalName: 'Delonix regia', category: 'Medium Tree', isFlowering: true, isFruitBearing: true, isPollinator: false, isBirdAttracting: true, isFragrant: false, isNitrogenFixing: true, type: 'Exotic', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?gulmohar,flower' },
  { id: 'plant-10', name: 'Arjun', localName: 'Arjun', botanicalName: 'Terminalia arjuna', category: 'Large Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: false, isFragrant: false, isNitrogenFixing: false, type: 'Native', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?arjuna,tree' },
  { id: 'plant-11', name: 'Amaltas', localName: 'Garmalo', botanicalName: 'Cassia fistula', category: 'Medium Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: false, isFragrant: false, isNitrogenFixing: false, type: 'Native', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?amaltas,flower' },
  { id: 'plant-12', name: 'Fig', localName: 'Anjeer', botanicalName: 'Ficus racemosa', category: 'Medium Tree', isFlowering: false, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: false, isNitrogenFixing: false, type: 'Native', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?fig,fruit' },
  { id: 'plant-13', name: 'Amla', localName: 'Amla', botanicalName: 'Phyllanthus emblica', category: 'Small Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: true, isNitrogenFixing: false, type: 'Native', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?amla,fruit' },
  { id: 'plant-14', name: 'Baheda', localName: 'Baheda', botanicalName: 'Terminalia bellirica', category: 'Large Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: false, isNitrogenFixing: false, type: 'Native', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?baheda,tree' },
  { id: 'plant-15', name: 'Aritha', localName: 'Aritha', botanicalName: 'Sapindus mukorossi', category: 'Medium Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: false, isFragrant: false, isNitrogenFixing: false, type: 'Native', lifecycle: 'Deciduous' },
  { id: 'plant-16', name: 'Giricidia', localName: 'Girisidia', botanicalName: 'Gliricidia sepium', category: 'Small Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: false, isFragrant: true, isNitrogenFixing: true, type: 'Exotic', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?gliricidia,flower' },
  { id: 'plant-17', name: 'Shirish', localName: 'Shirish', botanicalName: 'Albizia lebbeck', category: 'Medium Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: false, isFragrant: true, isNitrogenFixing: true, type: 'Native', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?shirish,tree' },
  { id: 'plant-18', name: 'Kapur', localName: 'Kapur', botanicalName: 'Cinnamomum camphora', category: 'Large Tree', isFlowering: true, isFruitBearing: true, isPollinator: true, isBirdAttracting: true, isFragrant: true, isNitrogenFixing: false, type: 'Exotic', lifecycle: 'Evergreen', imageUrl: 'https://source.unsplash.com/100x100/?camphor,tree' },
  { id: 'plant-19', name: 'Champa', localName: 'Champa', botanicalName: 'Plumeria rubra', category: 'Small Tree', isFlowering: true, isFruitBearing: false, isPollinator: true, isBirdAttracting: false, isFragrant: true, isNitrogenFixing: false, type: 'Exotic', lifecycle: 'Deciduous', imageUrl: 'https://source.unsplash.com/100x100/?plumeria,flower' },
];

const generateInitialNodes = (rows: number, cols: number): GridNode[] => {
    const nodes: GridNode[] = [];
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            nodes.push({ x, y, plantId: null });
        }
    }
    return nodes;
};


export const INITIAL_PROJECTS: Project[] = [
  { 
    id: 'proj-1', 
    name: 'PiC Centre, Limbodara', 
    location: 'Limbodara, Gujarat', 
    gridRows: 9, 
    gridCols: 15, 
    gridSpacing: 2, 
    nodes: generateInitialNodes(9, 15),
    procurementStatus: {},
  }
];