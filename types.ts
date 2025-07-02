export interface Plant {
  id: string;
  name: string; // Common Name
  localName: string;
  botanicalName: string;
  category: 'Large Tree' | 'Medium Tree' | 'Small Tree' | 'Shrub' | 'Vine';
  isFlowering: boolean;
  isFruitBearing: boolean;
  isPollinator: boolean;
  isBirdAttracting: boolean;
  isFragrant: boolean;
  isNitrogenFixing: boolean;
  type: 'Native' | 'Exotic';
  lifecycle: 'Deciduous' | 'Evergreen';
  imageUrl?: string;
}

export interface GridNode {
  x: number;
  y: number;
  plantId: string | null;
}

export interface Project {
  id: string;
  name:string;
  location: string;
  gridRows: number;
  gridCols: number;
  gridSpacing: number; // in metres
  nodes: GridNode[];
  procurementStatus: {
    [plantId: string]: {
      purchased: number;
      planted: number;
    }
  };
}

export type View = 'DASHBOARD' | 'PROJECT_DETAIL' | 'PROCUREMENT' | 'PLANTS' | 'SETTINGS';

export type ProcurementInfo = {
  plant: Plant;
  required: number;
  purchased: number;
  planted: number;
  locations: { x: number; y: number }[];
};