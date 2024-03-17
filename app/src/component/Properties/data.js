import { FiHome, FiBriefcase, FiKey, CgTrees, BiShieldAlt2, GoRocket, } from "../../assets/icons/vander"
import Property1 from "../../assets/images/property/1.jpg";
import Property2 from "../../assets/images/property/2.jpg";
import Property3 from "../../assets/images/property/3.jpg";
import Property4 from "../../assets/images/property/4.jpg";
import Property5 from "../../assets/images/property/5.jpg";
import Property6 from "../../assets/images/property/6.jpg";

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

// Real Real Estate LT01 Assets
import lt0101 from "../../assets/properties/LT01/01.jpeg";
import lt0102 from "../../assets/properties/LT01/02.jpeg";
import lt0103 from "../../assets/properties/LT01/03.jpg";
import lt0104 from "../../assets/properties/LT01/04.jpg";
import lt0105 from "../../assets/properties/LT01/05.jpg";
import lt0106 from "../../assets/properties/LT01/06.jpg";
import lt0107 from "../../assets/properties/LT01/07.jpg";

// Real Real Estate LT02 Assets
import lt0201 from "../../assets/properties/LT02/01.png";
import lt0202 from "../../assets/properties/LT02/02.jpg";
import lt0203 from "../../assets/properties/LT02/03.jpg";
import lt0204 from "../../assets/properties/LT02/04.jpg";
import lt0205 from "../../assets/properties/LT02/05.jpg";
import lt0206 from "../../assets/properties/LT02/06.jpg";

export const propertiesLand = [
  {
    id: 1,
    agentId: 1,
    image: lt0105,
    name: 'Lote de 712mts2 a 15min de Playa Samara, media hora de Nicoya, listo para construir',
    square: 712,
    type: "Terreno",
    price: '30,000',
    rating: 5.0,
    description: "",
    googleMapsLink: "https://www.google.com/maps/place/9%C2%B058'36.5%22N+85%C2%B030'56.0%22W/@9.9768076,-85.5181389,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.9768076!4d-85.515564?hl=en&entry=ttu",
    address: "Maquenco Samara",
    country: "Costa Rica",
    state: "Guanacaste",
    phone: "+50683080167",
    detail: [lt0105, lt0102, lt0103, lt0104, lt0101, lt0106, lt0107],
    terrainFeatures: {
      canItBeDivided: "",
      terrainType: "",
      elevation: "",
      soilQuality: "",
      naturalResources: ["", ""],
      topography: "",
      accessibility: "Camino asfaltado",
      proximityToAmenities: "",
      environmentalConcerns: ""
    },
    legalConsiderations: {
      zoningRegulations: "",
      landUseRestrictions: "Todo uso de suelo",
      easements: "",
      propertyTaxStatus: "",
      titleIssues: "Título en mano",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "Agua de poso",
      sewerSystem: "",
      electricitySource: "Luz disponible",
      gasAvailability: "",
      internetConnectivity: ""
    },
    developmentPotential: {
      futureLandValue: "",
      potentialLandUse: "",
      infrastructurePlans: "",
      surroundingDevelopment: "",
      marketTrends: ""
    }
  },
  {
    id: 2,
    agentId: 1,
    image: lt0205,
    name: 'Lote en Bagaces a 1km de la autopista, 15min de Liberia centro, 5min de llanos de cortes',
    square: 1000,
    type: "Terreno",
    price: '20,000',
    rating: 4,
    description: "",
    googleMapsLink: "https://www.google.com/maps/place/10%C2%B032'13.9%22N+85%C2%B015'54.6%22W/@10.5372028,-85.2677421,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.5372028!4d-85.2651672?hl=en&entry=ttu",
    address: "Bagaces Centro",
    country: "Costa RIca",
    state: "Guanaacaste",
    phone: "+50683080167",
    detail: [lt0205, lt0202, lt0203, lt0204, lt0201, lt0206],
    terrainFeatures: {
      canItBeDivided: "",
      terrainType: "",
      elevation: "",
      soilQuality: "",
      naturalResources: ["", ""],
      topography: "",
      accessibility: "Autopista",
      proximityToAmenities: "",
      environmentalConcerns: ""
    },
    legalConsiderations: {
      zoningRegulations: "",
      landUseRestrictions: "",
      easements: "",
      propertyTaxStatus: "",
      titleIssues: "Falta inscripción",
      surveyAvailable: true
    },
    utilityInformation: {
      waterSource: "Permiso Pendiente",
      sewerSystem: "",
      electricitySource: "Permiso Pendiente",
      gasAvailability: "",
      internetConnectivity: ""
    },
    developmentPotential: {
      futureLandValue: "",
      potentialLandUse: "",
      infrastructurePlans: "",
      surroundingDevelopment: "",
      marketTrends: ""
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
