export const parseMed = (med: any) => {
  const medication: Med = {
    unit: med["ACTIVE_INGRED_UNIT"],
    activeStrength: med["ACTIVE_NUMERATOR_STRENGTH"],
    dosageTypes: med["DOSAGEFORMNAME"],
    labeler: med["LABELERNAME"],
    nonPName: med["NONPROPRIETARYNAME"],
    id: med["PRODUCTID"],
    typeName: med["PRODUCTTYPENAME"],
    pName: med["PROPRIETARYNAME"],
    pNameSuffix: med["R"],
    substanceName: med["INSULIN HUMAN"],
  };
  return medication;
};
