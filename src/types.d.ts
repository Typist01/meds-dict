type Med = {
  unit: string;
  activeStrength: string;
  dosageTypes: string;
  labeler: string;
  nonPName: string;
  id: string;
  typeName: string;
  pName: string;
  pNameSuffix: string;
  substanceName: string;
};

type MedsResponse = {
  products: any[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
  };
};
