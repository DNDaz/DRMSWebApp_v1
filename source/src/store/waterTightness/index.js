export default {
  state: {
    waterSupplyMainConnectionAnnualInspection: {
      id: '234hsdr723nn00',
      fid: '001',
      title: 'Regular Annual Maintenance Inspection For Main Supply',
      inspectionDate: '2018-050-12',
      nextInspectionDate: '2018-050-12',
      inspectionBy: 'Anonymous',
      isAllWaterConnectionsInspected: true,
      isMainIncludingStopCockInspected: false,
      isSchedulingRepairs: true,
      isSchedulingContractors: false,
      isSchedulingMunicipality: true,
      isLaundryConnectionChecked: false,
      isAllFacilitiesChecked: false,
      internalPersonResponsibleContact: '',
      plumberResponsibleContact: '',
      municipalWaterDivisionContact: '',
      year: ''
    },
    individualFacilityWaterSupplyAnnualInspections: [
      {
        facilityID: 'qwew2324',
        facilityName: 'Entrance',
        stopCock: '',
        isLandry: '',
        isResidentialStructure: '',
        actionTaken: '',
        leakageStatus: 'No Leakage',
        year: '',
        internalPersonResponsibleContact: '',
        plumberResponsibleContact: '',
        pulmberCertification: '',
        municipalWaterDivisionContact: '',
        quarter: ''
      },
      {
        facilityID: '232zdfd4',
        facilityName: 'Entrance',
        stopCock: '',
        isLandry: '',
        isResidentialStructure: '',
        actionTaken: '',
        leakageStatus: 'No Leakage',
        year: '',
        internalPersonResponsibleContact: '',
        plumberResponsibleContact: '',
        pulmberCertification: '',
        municipalWaterDivisionContact: '',
        quarter: ''
      },
      {
        facilityID: '1232f324',
        facilityName: 'Entcrance',
        stopCock: '',
        isLandry: '',
        isResidentialStructure: '',
        actionTaken: '',
        leakageStatus: 'No Leakage',
        year: '',
        internalPersonResponsibleContact: '',
        plumberResponsibleContact: '',
        pulmberCertification: '',
        municipalWaterDivisionContact: '',
        quarter: ''
      },
      {
        facilityID: 'gt662324544dd',
        facilityName: 'Entrance',
        stopCock: '',
        isLandry: '',
        isResidentialStructure: '',
        actionTaken: '',
        leakageStatus: 'No Leakage',
        internalPersonResponsibleContact: '',
        plumberResponsibleContact: '',
        pulmberCertification: '',
        municipalWaterDivisionContact: '',
        year: '',
        quarter: ''
      },
      {
        facilityID: '04394932nsd2324',
        facilityName: 'Entrance',
        stopCock: '',
        isLandry: '',
        isResidentialStructure: '',
        actionTaken: '',
        leakageStatus: 'No Leakage',
        internalPersonResponsibleContact: '',
        plumberResponsibleContact: '',
        pulmberCertification: '',
        municipalWaterDivisionContact: '',
        year: '',
        quarter: ''
      }
    ],
    finalRegularMaintenanceInspection: {
      id: '234hsdr723nn00',
      fid: '001',
      title: 'Regular Annual Maintenance Inspection',
      inspectionDate: '2018-050-12',
      nextInspectionDateInFiveYears: '2018-050-12',
      inspectionBy: 'Anonymous',
      isSewerLinePressureTested: '',
      year: ''
    },
    individualRegularFacilityInspections: [
      {
        facilityID: 'sjfh2324',
        facilityName: 'Entrance',
        inspectionDate: '',
        dateOfNextInsoection: '',
        actionTypeTake: 'Repair',
        manholeNumber: 'manhole1',
        pressureStatus: 'No pressure loss',
        quarter: '',
        actionTaken: 'Repair Complete',
        internalPersonResponsibleContact: '',
        plumberResponsibleContact: ''
      },
      {
        facilityID: 'losd2444324',
        facilityName: 'Entrance',
        inspectionDate: '',
        dateOfNextInsoection: '',
        actionTypeTake: 'Repair',
        manholeNumber: 'manhole2',
        pressureStatus: 'pressure loss',
        quarter: '',
        actionTaken: 'Repair InProgresss ',
        internalPersonResponsibleContact: '',
        plumberResponsibleContact: ''
      },
      {
        facilityID: 'losd9324',
        facilityName: 'Entrance',
        inspectionDate: '',
        dateOfNextInsoection: '',
        actionTypeTake: 'Repair',
        manholeNumber: 'manhole3',
        pressureStatus: 'pressure loss',
        quarter: '',
        actionTaken: 'Repair Starting',
        internalPersonResponsibleContact: '',
        plumberResponsibleContact: ''
      }
    ],
    regularMaintenanceInspections: {
      facilityID: 'losd932412',
      facilityName: 'Entrance',
      inspectionDate: '',
      dateOfNextInsoection: '',
      actionTypeTake: 'Repair',
      manholeNumber: 'manhole3',
      pressureStatus: 'pressure loss',
      quarter: '',
      actionTaken: 'Repair Starting',
      internalPersonResponsibleContact: '',
      plumberResponsibleContact: ''
    },
    seasonalMaintenanceInspections: {
      facilityID: 'losd9324098',
      facilityName: 'Entrance',
      inspectionDate: '',
      dateOfNextInsoection: '',
      actionTypeTake: 'Repair',
      manholeNumber: 'manhole3',
      pressureStatus: 'pressure loss',
      quarter: '',
      actionTaken: 'Repair Starting',
      internalPersonResponsibleContact: '',
      plumberResponsibleContact: ''
    },
    visualMonthlyServicesInspections: {
      facilityID: 'losd93246588',
      facilityName: 'Entrance',
      inspectionDate: '',
      dateOfNextInsoection: '',
      actionTypeTake: 'Repair',
      manholeNumber: 'manhole3',
      pressureStatus: 'pressure loss',
      quarter: '',
      actionTaken: 'Repair Starting',
      internalPersonResponsibleContact: '',
      plumberResponsibleContact: ''
    },
    visualGroundSurfaceMonitoring: {
      facilityID: 'losd93247gt66',
      facilityName: 'Entrance',
      inspectionDate: '',
      dateOfNextInsoection: '',
      actionTypeTake: 'Repair',
      manholeNumber: 'manhole3',
      pressureStatus: 'pressure loss',
      quarter: '',
      actionTaken: 'Repair Starting',
      internalPersonResponsibleContact: '',
      plumberResponsibleContact: ''
    }
  },
  getters: {
    getAllWaterSupplies (state) {
      return state.loadedWaterSurfaces
    }
  }
}
