import TiltViewRoute from "@/pages/home/tilt_view";
import { CloseCircleOutlined, ToolOutlined } from "@ant-design/icons";
import {
  Agriculture,
  Bathroom,
  Check,
  Close,
  Countertops,
  DoorFront,
  ElectricBoltRounded,
  FireplaceOutlined,
  Flood,
  FoodBank,
  Hardware,
  HeatPump,
  HomeWorkOutlined,
  Hvac,
  Kitchen,
  Light,
  Plumbing,
  Roofing,
  RoofingSharp,
  SwitchAccessShortcut,
  TimeToLeave,
  Wallpaper,
  Window,
} from "@mui/icons-material";
import { BsHouseHeart } from "react-icons/bs";
import { FaLaugh, FaSpinner } from "react-icons/fa";
import { PiPaintBrushFill } from "react-icons/pi";

export const categories = [
  {
    name: "Roofing",
    icon: <Roofing />,
    subcategories: [
      {
        name: "RoofingMaterials",
        subSubcategories: ["Shingles", "Cap Shingles"],
      },
    ],
  },
  {
    name: "RoughLumber",
    icon: <Agriculture />,
    subcategories: [
      {
        name: "Farming Lumber",
      },
    ],
  },
  {
    name: "Siding",
    icon: <HomeWorkOutlined />,
    subcategories: [
      {
        name: "Gutters",
      },
      {
        name: "Downspouts",
      },

      {
        name: "J-channel",
      },
      {
        name: "Wood Siding",
      },
      {
        name: "Fascia",
      },
      {
        name: "Soffit",
      },
      {
        name: "Exterior Trim",
      },
      {
        name: "Exposed Fastened Corrugated Wall ",
      },
      {
        name: "Vinyl",
      },
    ],
  },
  {
    name: "Windows",
    icon: <Window />,
    subcategories: [
      {
        name: "Exterior Sliding Glass Door",
      },
      {
        name: "Awning Window",
      },

      {
        name: "Casement Window",
      },
      {
        name: "Picture Window",
      },
      {
        name: "Hopper Window",
      },
      {
        name: "Sliding Window",
      },
      {
        name: "Single-Hung Window",
      },
      {
        name: "Double-Hung Window",
      },
    ],
  },
  {
    name: "Doors",
    icon: <DoorFront />,
    subcategories: [
      {
        name: "Exterior Door",
      },
      {
        name: "Exterior Keyed Entry",
      },

      {
        name: "Garage Door",
      },
      {
        name: "Garage Door Openar",
      },
      {
        name: "Interior Door",
      },
      {
        name: "Finish Plywood Door",
      },
      {
        name: "Single-Hung Window",
      },
      {
        name: "Double-Hung Window",
      },
    ],
  },

  {
    name: "Roof Plumbing",
    icon: <RoofingSharp />,
    subcategories: [
      {
        name: "Steam Generator",
      },
      {
        name: "Shower Valve",
      },

      {
        name: "P Trap",
      },
      {
        name: "Freestanding Tub",
      },
      {
        name: "Floor Filler Mount / Glue",
      },
      {
        name: "Standard Tub",
      },
    ],
  },
  {
    name: "Rough Electric",
    icon: <ElectricBoltRounded />,
    subcategories: [
      {
        name: "Roof Floor Heat",
        icon: <HeatPump />,
        subSubcategories: ["Heated Flooring"],
      },
      {
        name: "SmokeandCarbonMonoxideDetector",
      },

      {
        name: "220 volt",
      },
      {
        name: "Generator",
      },
      {
        name: "Electric Beheicle Charger",
      },
      {
        name: "Lighting Fixures",
        icon: <Light />,
        subSubcategories: [
          "Exterior Flood Light",
          "Exterior sconce light",
          "Interior Ceiling Light Fixture",
          "Recessed Light",
          "Transformer",
          "Electric Bridge",
          "Utility Light",
          "Landscape Light",
          "Chandelier",
        ],
      },
      {
        name: "Switches",
        icon: <SwitchAccessShortcut />,
        subSubcategories: [
          "Outlet",
          "Outlet Cover",
          "Switch",
          "Landscape Light",
          "Switch Plate Standard",
        ],
      },
      {
        name: "HVAC Fixtures",
        icon: <Hvac />,
        subSubcategories: [
          "Extraction Fan",
          "Supply Register",
          "Thermostat",
          "Floor Boot",
          "Wall/Ceiling Boot",
        ],
      },
    ],
  },
  {
    name: "Plumbing Fixtures",
    icon: <Plumbing />,
    subcategories: [
      {
        name: "Bathroom/Plumbing",
        icon: <Bathroom />,
        subSubcategories: [
          "Faucet",
          "Shower Head",
          "Shower Drain",
          "Drain Cap",
          "Tub Filter",
          "Toilet",
          "Sink",
          "Steam Generator Control Kit",
          "Shower/Tub Faucet",
          "Tub Drain",
          "Kitchen Faucet",
          "Sink Drain",
          "Potfiller",
          "Utility Sink",
          "Shower Pan",
          "Pressure Driver",
          "Digital Interfac",
          "System Controller Module",
          "Thermostatic Valve",
          "Six Port Valve",
          "Hand Shower",
          "Body Spray",
          "Overhead Rain Shower Head",
          "Real Rain Shower Head",
          "Shower Arm and Flange",
        ],
      },
      {
        name: "Bathroom Accessories",
        icon: <Bathroom />,
        subSubcategories: [
          "Toilet Paper Holder",
          "Towel Warmer",
          "Shower Basket",
          "Medicine Cabinet",
          "Shower Glass",
          "Towel Holder",
          "Mirror",
          "Shower Rod",
        ],
      },
    ],
  },

  {
    name: "Appliances",
    icon: <ToolOutlined />,
    subcategories: [
      {
        name: "HouseHold Appliances",
        icon: <BsHouseHeart />,
        subSubcategories: [
          "Dishwasher",
          "Steamer",
          "Washer",
          "Dryer",
          "Hot Water Heater",
        ],
      },
      {
        name: "Kitchen Appliances",
        icon: <Kitchen />,
        subSubcategories: [
          "Refrigerator",
          "Single Wall Oven",
          "Microwave",
          "Cooktop",
          "Beverage Refrigerator",
          "Outdoor Refrigerator",
          "Outdoor Grill",
          "Wall Oven / Microwave Combination",
          "Range",
          "Wood Burning Stove",
          "Freestanding Gas Burning Stove",
        ],
      },
    ],
  },
  {
    name: "Counter Tops",
    icon: <Countertops />,
    subcategories: [{ name: "Sintered Stone" }],
  },
  {
    name: "Home Entertainment",
    icon: <FaLaugh />,
    subcategories: [
      { name: "Doorbell" },
      { name: "Wifi" },
      { name: "Security Camera" },
      { name: "Light Switch" },
      { name: "Speaker" },
    ],
  },
  {
    name: "Fire Place",
    icon: <FireplaceOutlined />,
    subcategories: [{ name: "Fireplace Insert" }, { name: "Fire Pit (outdoor)" }],
  },

  {
    name: "Tile",
    icon: <TimeToLeave />,
    subcategories: [
      { name: "Tile" },
      { name: "Tile Edge Treatment" },
      { name: "Grout" },
      { name: "Tile Underlayment" },
    ],
  },

  {
    name: "Hardware",
    icon: <Hardware />,
    subcategories: [
      { name: "Interior Knob / Lever Hardware" },
      { name: "Entry Door Hardware" },
      { name: "Deadbolt" },
      { name: "Interior Door Stop" },
      { name: "Thresholds" },
      { name: "Pocket Door Rail Kit" },
      { name: "Pocket Door Hardware" },
      { name: "Pool" },
      { name: "Mailbox" },
    ],
  },
  {
    name: "Millwork",
    icon: <FoodBank />,
    subcategories: [
      { name: "Double Sink Vanity" },
      { name: "Single Sink Vanity" },
      { name: "Custom Closet" },
      { name: "Base Cabinet" },
      { name: "Pull Out Trash Cabinet" },
      { name: "Dishwasher Panel" },
      { name: "Sink Base Cabinet" },
      { name: "Drawer Base Cabinet" },
      { name: "Tall Cabinet" },
      { name: "Upper Cabinet" },
      { name: "Double Oven Base Cabinet" },
      { name: "Refrigerator Panel" },
      { name: "Floating Shelf Bracket" },
      { name: "Floating Shelf" },
      { name: "Door Panel" },
    ],
  },
  {
    name: "Stairs And Railing",

    icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M4 20h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2H6v2H4v2zm2-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2zm2-4h2v-2h2v-2h2v-2h2V8h-2V6h-2v2h-2v2h-2v2zm0-4h2V6h2V4h-2v2h-2v2z" />
      </svg>
    ,
    subcategories: [
      { name: "Exterior Railing" },
      { name: "Hand Rails" },
      { name: "Hand Rail Bracket" },
      {
        name: "Cable Railing",
      },
      {
        name: "Stair Treads and lisers",
        icon: 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 20h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2H6v2H4v2zm2-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2zm2-4h2v-2h2v-2h2v-2h2V8h-2V6h-2v2h-2v2h-2v2zm0-4h2V6h2V4h-2v2h-2v2z" />
          </svg>
        ,
        subSubcategories: ["Stair Tread", "Stair Riser"],
      },
    ],
  },
  {
    name: "Paint And wallcovering",
    icon: <PiPaintBrushFill />,
    subcategories: [
      { name: "Interior Paint" },
      { name: "Exterior Paint" },
      { name: "Interior Primer" },
      { name: "Interior Trim" },
      { name: "Wood Stain" },
      {
        name: "Wallpaper/wallcovering",
        icon: <Wallpaper />,
        subSubcategories: ["Wallcovering"],
      },
    ],
  },

  {
    name: "Flooring",
    icon: <Flood />,
    subcategories: [
      { name: "Hardwood Underlayment" },
      { name: "Hardwood Floor" },
      { name: "Vinyl Floor" },
    ],
  },

  {
    name: "Finish Lumber",
    icon: <Check />,
    subcategories: [
      { name: "Finish Plywood" },
      { name: "Composite Decking" },
      { name: "Vinyl Floor" },
      { name: "Pressure Treated Decking" },
      {
        name: "Spindles Balusters",
        icon: <FaSpinner />,
        subSubcategories: ["Full Height Spindles", "Composite Decking"],
      },
    ],
  },
  {
    name: "Closets",
    icon: <Close />,
    subcategories: [
      {
        name: "Closets Accessories Shelving",
        icon: <CloseCircleOutlined />,
        subSubcategories: ["Shelving"],
      },
    ],
  },
];
