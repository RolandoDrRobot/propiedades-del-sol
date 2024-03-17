import { FiHome, FiBriefcase, FiKey, CgTrees, BiShieldAlt2, GoRocket, } from "../../assets/icons/vander"
import Property1 from "../../assets/images/property/1.jpg";
import Property2 from "../../assets/images/property/2.jpg";
import Property3 from "../../assets/images/property/3.jpg";
import Property4 from "../../assets/images/property/4.jpg";
import Property5 from "../../assets/images/property/5.jpg";
import Property6 from "../../assets/images/property/6.jpg";

import Land1 from "../../assets/images/land/1.jpeg";
import Land2 from "../../assets/images/land/2.jpeg";
import Land3 from "../../assets/images/land/3.jpeg";
import Land4 from "../../assets/images/land/4.jpeg";
import Land5 from "../../assets/images/land/5.jpeg";

import SubProperty1 from "../../assets/images/property/single/1.jpg";
import SubProperty2 from "../../assets/images/property/single/2.jpg";
import SubProperty3 from "../../assets/images/property/single/3.jpg";
import SubProperty4 from "../../assets/images/property/single/4.jpg";
import SubProperty5 from "../../assets/images/property/single/5.jpg";

import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";
import client7 from "../../assets/images/client/07.jpg";

import cate1 from "../../assets/images/property/residential.jpg";
import cate2 from "../../assets/images/property/land.jpg";
import cate3 from "../../assets/images/property/commercial.jpg";
import cate4 from "../../assets/images/property/investment.jpg";
import cate5 from "../../assets/images/property/industrial.jpg";

export const propertiesLand = [
  {
    id: 1,
    agentId: 1,
    image: Land1,
    name: '10765 Hillshire Ave, Baton Rouge, LA 70810, EE. UU.',
    square: 8000,
    type: "terreno",
    price: 5000,
    rating: 5.0,
    description: "Casa contemporánea de 4 habitaciones con vistas a la ciudad y características de hogar inteligente",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "123 Calle Tranquila",
    country: "Estados Unidos",
    state: "California",
    detail: [Land1, Land2, Land3, Land4, Land5],
    terrainFeatures: {
      canItBeDivided: "Sí, en dos parcelas",
      terrainType: "Rural",
      elevation: "Pendiente suave",
      soilQuality: "Franco",
      naturalResources: ["Madera", "Agua dulce"],
      topography: "Variada",
      accessibility: "Camino privado",
      proximityToAmenities: "30 minutos a la ciudad más cercana",
      environmentalConcerns: "No se informaron problemas ambientales"
    },
    legalConsiderations: {
      zoningRegulations: "Agrícola",
      landUseRestrictions: "Ninguna",
      easements: "Servidumbre de utilidad",
      propertyTaxStatus: "Al corriente",
      titleIssues: "Ninguno",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "Pozo",
      sewerSystem: "Fosa séptica (no instalada)",
      electricitySource: "Red eléctrica local",
      gasAvailability: "Propano",
      internetConnectivity: "Disponible"
    },
    developmentPotential: {
      futureLandValue: "Se espera que aprecie con el desarrollo local",
      potentialLandUse: "Residencial o Agrícola",
      infrastructurePlans: "Ninguno actualmente",
      surroundingDevelopment: "Principalmente tierras de cultivo y residencias rurales",
      marketTrends: "Demanda estable de propiedades rurales"
    }
  },
  {
    id: 2,
    agentId: 2,
    image: Land2,
    name: '555 Calle Principal, Ciudad Imaginaria, EE. UU.',
    square: 12000,
    type: "terreno",
    price: 8000,
    rating: 4.8,
    description: "Encantadora propiedad rural con vistas panorámicas y potencial de desarrollo",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "789 Camino Sereno",
    country: "Estados Unidos",
    state: "California",
    detail: [Land1, Land2, Land3, Land4, Land5],
    terrainFeatures: {
      canItBeDivided: "Sí, en tres parcelas",
      terrainType: "Montañoso",
      elevation: "Elevación moderada",
      soilQuality: "Arcilloso",
      naturalResources: ["Agua subterránea", "Vistas panorámicas"],
      topography: "Variada",
      accessibility: "Carretera pública",
      proximityToAmenities: "15 minutos a la ciudad más cercana",
      environmentalConcerns: "Sin problemas ambientales conocidos"
    },
    legalConsiderations: {
      zoningRegulations: "Residencial",
      landUseRestrictions: "Restricciones de altura",
      easements: "Sin servidumbres conocidas",
      propertyTaxStatus: "Al corriente",
      titleIssues: "Ninguno",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "Manantial",
      sewerSystem: "Fosa séptica (instalada)",
      electricitySource: "Generador propio",
      gasAvailability: "Gas natural",
      internetConnectivity: "Disponible"
    },
    developmentPotential: {
      futureLandValue: "Potencial de valorización con desarrollo turístico",
      potentialLandUse: "Turístico o Residencial",
      infrastructurePlans: "Proyectos de carreteras en desarrollo",
      surroundingDevelopment: "Zona en crecimiento con nuevos desarrollos",
      marketTrends: "Demanda creciente en propiedades rurales"
    }
  },
  {
    id: 11,
    agentId: 3,
    image: Land3,
    name: '321 Calle Tranquila, Pueblo Sereno, EE. UU.',
    square: 6000,
    type: "terreno",
    price: 7000,
    rating: 4.5,
    description: "Propiedad rural con encanto histórico y potencial para proyectos agrícolas",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "456 Camino Campestre",
    country: "Estados Unidos",
    state: "California",
    detail: [Land1, Land2, Land3, Land4, Land5],
    terrainFeatures: {
      canItBeDivided: "No, un solo lote",
      terrainType: "Valle",
      elevation: "Baja elevación",
      soilQuality: "Fértil",
      naturalResources: ["Agricultura", "Agua de manantial"],
      topography: "Plana con suaves colinas",
      accessibility: "Carretera pavimentada",
      proximityToAmenities: "20 minutos a la ciudad más cercana",
      environmentalConcerns: "Sin problemas ambientales conocidos"
    },
    legalConsiderations: {
      zoningRegulations: "Agrícola y Residencial",
      landUseRestrictions: "Ninguna",
      easements: "Derechos de paso para agricultura",
      propertyTaxStatus: "Al corriente",
      titleIssues: "Ninguno",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "Red de agua municipal",
      sewerSystem: "Fosa séptica (instalada)",
      electricitySource: "Red eléctrica local",
      gasAvailability: "Gas propano",
      internetConnectivity: "Disponible"
    },
    developmentPotential: {
      futureLandValue: "Potencial para desarrollo agrícola sostenible",
      potentialLandUse: "Agrícola o Residencial",
      infrastructurePlans: "Mejoras de carreteras planificadas",
      surroundingDevelopment: "Área con granjas y desarrollo rural",
      marketTrends: "Interés creciente en proyectos agrícolas"
    }
  },
  {
    id: 16,
    agentId: 4,
    image: Land4,
    name: '789 Colina Encantada, Ciudad Vista, EE. UU.',
    square: 10000,
    type: "terreno",
    price: 9500,
    rating: 4.2,
    description: "Terreno con vistas panorámicas y potencial para desarrollo residencial",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "101 Mirador Sereno",
    country: "Estados Unidos",
    state: "California",
    detail: [Land1, Land2, Land3, Land4, Land5],
    terrainFeatures: {
      canItBeDivided: "Sí, en cinco parcelas",
      terrainType: "Montañoso",
      elevation: "Alta elevación",
      soilQuality: "Rocoso",
      naturalResources: ["Vistas panorámicas", "Aire fresco"],
      topography: "Colinas escarpadas y mesetas",
      accessibility: "Camino pavimentado",
      proximityToAmenities: "15 minutos a la ciudad más cercana",
      environmentalConcerns: "Sin problemas ambientales conocidos"
    },
    legalConsiderations: {
      zoningRegulations: "Residencial",
      landUseRestrictions: "Altura máxima permitida",
      easements: "Ninguna servidumbre conocida",
      propertyTaxStatus: "Al corriente",
      titleIssues: "Ninguno",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "Manantial propio",
      sewerSystem: "Fosa séptica (instalada)",
      electricitySource: "Generador solar",
      gasAvailability: "Gas natural",
      internetConnectivity: "Disponible"
    },
    developmentPotential: {
      futureLandValue: "Potencial para desarrollo residencial de lujo",
      potentialLandUse: "Residencial",
      infrastructurePlans: "Proyectos de energía renovable cercanos",
      surroundingDevelopment: "Área de desarrollo residencial exclusivo",
      marketTrends: "Demanda creciente en propiedades de lujo"
    }
  },
  {
    id: 21,
    agentId: 5,
    image: Land5,
    name: '456 Camino Tranquilo, Pueblo Encanto, EE. UU.',
    square: 7500,
    type: "terreno",
    price: 8200,
    rating: 4.7,
    description: "Parcela tranquila con potencial para proyectos agrícolas sostenibles",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9784706,-84.1500714,17z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "222 Calle Silenciosa",
    country: "Estados Unidos",
    state: "California",
    detail: [Land1, Land2, Land3, Land4, Land5],
    terrainFeatures: {
      canItBeDivided: "Sí, en tres parcelas",
      terrainType: "Valle",
      elevation: "Baja elevación",
      soilQuality: "Fértil y bien drenado",
      naturalResources: ["Agricultura sostenible", "Agua de manantial"],
      topography: "Plana con suaves colinas",
      accessibility: "Carretera de acceso privado",
      proximityToAmenities: "25 minutos a la ciudad más cercana",
      environmentalConcerns: "Sin problemas ambientales conocidos"
    },
    legalConsiderations: {
      zoningRegulations: "Agrícola",
      landUseRestrictions: "Ninguna",
      easements: "Derechos de paso para agricultura sostenible",
      propertyTaxStatus: "Al corriente",
      titleIssues: "Ninguno",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "Sistema de riego y pozo",
      sewerSystem: "Fosa séptica (instalada)",
      electricitySource: "Generador solar",
      gasAvailability: "Gas propano",
      internetConnectivity: "Disponible"
    },
    developmentPotential: {
      futureLandValue: "Potencial para desarrollo agrícola sostenible y turismo ecológico",
      potentialLandUse: "Agrícola o Turismo ecológico",
      infrastructurePlans: "Mejoras de carreteras planificadas",
      surroundingDevelopment: "Área enfocada en agricultura sostenible",
      marketTrends: "Interés creciente en proyectos ecológicos"
    }
  }   
]

export const propertiesResidential = [
  {
    id: 1,
    agentId: 1,
    image: Property1,
    name: "Modern Urban Oasis",
    square: 2500,
    type: "residential",
    price: 350000,
    description: "Contemporary 4-bedroom home with city views and smart home features",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "456 Cityscape Avenue",
    country: "United States",
    state: "New York",
    detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5],
    architectureFeatures: {
      buildingType: "Single-Family Home",
      yearBuilt: 2020,
      bedrooms: 4,
      bathrooms: 3,
      garageCapacity: 2,
      flooringMaterial: "Hardwood",
      heatingSystem: "Central Heating",
      coolingSystem: "Central Air Conditioning"
    },
    amenities: {
      kitchenFeatures: ["Granite Countertops", "Stainless Steel Appliances"],
      masterSuite: true,
      fireplace: true,
      pool: false,
      securitySystem: true
    },
    legalConsiderations: {
      zoningRegulations: "Residential",
      hoaFees: 500,
      propertyTaxStatus: "Current",
      titleIssues: "None",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "City Water",
      sewerSystem: "Public Sewer",
      electricitySource: "Local Power Grid",
      gasAvailability: "Natural Gas",
      internetConnectivity: "Fiber Optic"
    },
    neighborhood: {
      schoolDistrict: "City School District",
      proximityToAmenities: "Walking distance to parks, shops, and restaurants",
      crimeRate: "Low",
      communityVibe: "Family-Friendly"
    }
  },
  {
    id: 2,
    agentId: 1,
    image: Property2,
    name: "Modern Urban Oasis",
    square: 2500,
    type: "residential",
    price: 350000,
    description: "Contemporary 4-bedroom home with city views and smart home features",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "456 Cityscape Avenue",
    country: "United States",
    state: "New York",
    detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5],
    architectureFeatures: {
      buildingType: "Single-Family Home",
      yearBuilt: 2020,
      bedrooms: 4,
      bathrooms: 3,
      garageCapacity: 2,
      flooringMaterial: "Hardwood",
      heatingSystem: "Central Heating",
      coolingSystem: "Central Air Conditioning"
    },
    amenities: {
      kitchenFeatures: ["Granite Countertops", "Stainless Steel Appliances"],
      masterSuite: true,
      fireplace: true,
      pool: false,
      securitySystem: true
    },
    legalConsiderations: {
      zoningRegulations: "Residential",
      hoaFees: 500,
      propertyTaxStatus: "Current",
      titleIssues: "None",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "City Water",
      sewerSystem: "Public Sewer",
      electricitySource: "Local Power Grid",
      gasAvailability: "Natural Gas",
      internetConnectivity: "Fiber Optic"
    },
    neighborhood: {
      schoolDistrict: "City School District",
      proximityToAmenities: "Walking distance to parks, shops, and restaurants",
      crimeRate: "Low",
      communityVibe: "Family-Friendly"
    }
  },
  {
    id: 3,
    agentId: 1,
    image: Property3,
    name: "Modern Urban Oasis",
    square: 2500,
    type: "residential",
    price: 350000,
    description: "Contemporary 4-bedroom home with city views and smart home features",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "456 Cityscape Avenue",
    country: "United States",
    state: "New York",
    detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5],
    architectureFeatures: {
      buildingType: "Single-Family Home",
      yearBuilt: 2020,
      bedrooms: 4,
      bathrooms: 3,
      garageCapacity: 2,
      flooringMaterial: "Hardwood",
      heatingSystem: "Central Heating",
      coolingSystem: "Central Air Conditioning"
    },
    amenities: {
      kitchenFeatures: ["Granite Countertops", "Stainless Steel Appliances"],
      masterSuite: true,
      fireplace: true,
      pool: false,
      securitySystem: true
    },
    legalConsiderations: {
      zoningRegulations: "Residential",
      hoaFees: 500,
      propertyTaxStatus: "Current",
      titleIssues: "None",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "City Water",
      sewerSystem: "Public Sewer",
      electricitySource: "Local Power Grid",
      gasAvailability: "Natural Gas",
      internetConnectivity: "Fiber Optic"
    },
    neighborhood: {
      schoolDistrict: "City School District",
      proximityToAmenities: "Walking distance to parks, shops, and restaurants",
      crimeRate: "Low",
      communityVibe: "Family-Friendly"
    }
  },
  {
    id: 4,
    agentId: 1,
    image: Property4,
    name: "Modern Urban Oasis",
    square: 2500,
    type: "residential",
    price: 350000,
    description: "Contemporary 4-bedroom home with city views and smart home features",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "456 Cityscape Avenue",
    country: "United States",
    state: "New York",
    detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5],
    architectureFeatures: {
      buildingType: "Single-Family Home",
      yearBuilt: 2020,
      bedrooms: 4,
      bathrooms: 3,
      garageCapacity: 2,
      flooringMaterial: "Hardwood",
      heatingSystem: "Central Heating",
      coolingSystem: "Central Air Conditioning"
    },
    amenities: {
      kitchenFeatures: ["Granite Countertops", "Stainless Steel Appliances"],
      masterSuite: true,
      fireplace: true,
      pool: false,
      securitySystem: true
    },
    legalConsiderations: {
      zoningRegulations: "Residential",
      hoaFees: 500,
      propertyTaxStatus: "Current",
      titleIssues: "None",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "City Water",
      sewerSystem: "Public Sewer",
      electricitySource: "Local Power Grid",
      gasAvailability: "Natural Gas",
      internetConnectivity: "Fiber Optic"
    },
    neighborhood: {
      schoolDistrict: "City School District",
      proximityToAmenities: "Walking distance to parks, shops, and restaurants",
      crimeRate: "Low",
      communityVibe: "Family-Friendly"
    }
  },
  {
    id: 5,
    agentId: 1,
    image: Property5,
    name: "Modern Urban Oasis",
    square: 2500,
    type: "residential",
    price: 350000,
    description: "Contemporary 4-bedroom home with city views and smart home features",
    googleMapsLink: "https://www.google.com/maps/place/Torres+de+Heredia,+Heredia/@9.9785859,-84.1498362,17.15z/data=!4m15!1m8!3m7!1s0x8fa0fba960ca1987:0x938c6116c6c52900!2sTorres+de+Heredia,+Heredia!3b1!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7!3m5!1s0x8fa0fba960ca1987:0x938c6116c6c52900!8m2!3d9.9784706!4d-84.1474965!16s%2Fg%2F11lm98ccm7?entry=ttu",
    address: "456 Cityscape Avenue",
    country: "United States",
    state: "New York",
    detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5],
    architectureFeatures: {
      buildingType: "Single-Family Home",
      yearBuilt: 2020,
      bedrooms: 4,
      bathrooms: 3,
      garageCapacity: 2,
      flooringMaterial: "Hardwood",
      heatingSystem: "Central Heating",
      coolingSystem: "Central Air Conditioning"
    },
    amenities: {
      kitchenFeatures: ["Granite Countertops", "Stainless Steel Appliances"],
      masterSuite: true,
      fireplace: true,
      pool: false,
      securitySystem: true
    },
    legalConsiderations: {
      zoningRegulations: "Residential",
      hoaFees: 500,
      propertyTaxStatus: "Current",
      titleIssues: "None",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "City Water",
      sewerSystem: "Public Sewer",
      electricitySource: "Local Power Grid",
      gasAvailability: "Natural Gas",
      internetConnectivity: "Fiber Optic"
    },
    neighborhood: {
      schoolDistrict: "City School District",
      proximityToAmenities: "Walking distance to parks, shops, and restaurants",
      crimeRate: "Low",
      communityVibe: "Family-Friendly"
    }
  }
]



export const featureData = [
  {
    icon: FiHome,
    title: 'Creación de tu Cuenta de Agente Inmobiliario',
    desc: 'Programaremos una llamada personal contigo para conocerte mejor y discutir cómo podemos contribuir para tu éxito en nuestro marketplace'
  },
  {
    icon: FiBriefcase,
    title: 'Listado de tus Propiedades',
    desc: 'Proporciona información detallada sobre la ubicación, características, precios y cualquier aspecto relevante que destaque la singularidad de la propiedad'
  },
  {
    icon: FiKey,
    title: 'Recibe Leads de Calidad',
    desc: 'Estos leads serán filtrados y ajustados según tus preferencias para garantizar que se alineen con tus objetivos ¡Prepárate para una experiencia inmobiliaria más efectiva y centrada en tus necesidades como vendedor!'
  },
]
export const review = [
  {
    id: '1',
    profile: client1,
    name: 'Roberto Umaña',
    designation: "Manager",
    description: "Propiedades del Sol hizo que los procesos fueran muy fáciles. Me encantó la forma en que se comunicaron conmigo y me mantuvieron informado. ¡Gracias por todo!"
  },
  {
    id: '2',
    profile: client2,
    name: 'Sandra Alfaro',
    designation: "Manager",
    description: 'Recomiendo ampliamente Propiedades del Sol como la nueva forma de vender su casa. ¡Fue una experiencia increíble!'
  }, {
    id: '3',
    profile: client3,
    name: 'Karla Zamora',
    designation: "Manager",
    description: "Lo que más me gustó de vender mi casa fue que pudimos conocer a la gente personalmente. ¡Esto lo hizo mucho más agradable!"
  }, {
    id: '4',
    profile: client4,
    name: 'Carlos Rodrigez',
    designation: "Manager",
    description: "¡Gran experiencia por todos lados! Fácil de usar y eficiente"
  }
]
export const teamdata = [
  {
    image: client6,
    name: 'Luis Miranda',
    title: 'Offical de Operaciones'
  },
  {
    image: client7,
    name: 'Rolando Argüello',
    title: 'Official de Tecnologîa'
  },
]

export const counterData = [
  {
    target: '5',
    title: 'Propiedades Vendidas'
  },
  {
    target: '25',
    title: 'Clientes Satisfechos'
  },
  {
    target: '4',
    title: 'Años de Experiencia'
  },
]
export const categoriesData = [
  {
    image: cate1,
    name: 'Residential',
    title: '46 Listings'
  },
  {
    image: cate2,
    name: 'Land',
    title: '124 Listings'
  },
  {
    image: cate3,
    name: 'Commercial',
    title: '265 Listings'
  },
  {
    image: cate4,
    name: 'Industrial',
    title: '452 Listings'
  },
  {
    image: cate5,
    name: 'Investment',
    title: '12 Listings'
  },
]
export const featureTwo = [
  {
    icon: 'mdi mdi-cards-heart',
    title: 'Comfortable',
    desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
  },
  {
    icon: 'mdi mdi-shield-sun',
    title: 'Extra Security',
    desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
  },
  {
    icon: 'mdi mdi-star',
    title: 'Luxury',
    desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
  },
  {
    icon: 'mdi mdi-currency-usd',
    title: 'Best Price',
    desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
  },
  {
    icon: 'mdi mdi-map-marker',
    title: 'Stratagic Location',
    desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
  },
  {
    icon: 'mdi mdi-chart-arc',
    title: 'Efficient',
    desc: 'If the distribution of letters and words is random, the reader will not be distracted from making.'
  },
]

export const pricing = [
  {
    icon: CgTrees,
    title: "Basic",
    amount: "19",
    features: ["Full Access", "Source Files", "Free Appointments", "Enhanced Security"]
  },
  {
    icon: BiShieldAlt2,
    title: "Premium",
    amount: "39",
    features: ["Full Access", "Source Files", "Free Appointments", "Enhanced Security"]
  },
  {
    icon: GoRocket,
    title: "Business",
    amount: "99",
    features: ["Full Access", "Source Files", "Free Appointments", "Enhanced Security"]
  }
]
export const accordionData = [
  {
    title: 'How does it work ?',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
  },
  {
    title: 'Do I need a designer to use Propiedades del Sol ?',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
  },
  {
    title: 'What do I need to do to start selling ?',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
  },
  {
    title: 'What happens when I receive an order ?',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
  }
]
export const blogList = [
  {
    id: 1,
    title: "Skills That You Can Learn In The Real Estate Market",
    date: "13th March, 2023",
    type: 'Industrial',
    image: Property1
  },
  {
    id: 2,
    title: "Learn The Truth About Real Estate Industry",
    date: "5th May, 2023",
    type: 'Industrial',
    image: Property2
  },
  {
    id: 3,
    title: "10 Quick Tips About Business Development",
    date: "19th June, 2023",
    type: 'Industrial',
    image: Property3
  },
  {
    id: 4,
    title: "14 Common Misconceptions About Business Development",
    date: "20th June, 2023",
    type: 'Industrial',
    image: Property4
  },
  {
    id: 5,
    title: "10 Things Your Competitors Can Teach You About Real Estate",
    date: "31st Aug, 2023",
    type: 'Industrial',
    image: Property5
  },
  {
    id: 6,
    title: "Why We Love Real Estate",
    date: "1st Sep, 2023",
    type: 'Industrial',
    image: Property6
  }
]
