import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  AppstoreOutlined,
  BookOutlined,
  BarChartOutlined,
  BulbOutlined,
  CloudOutlined,
  EnterOutlined,
  PlusOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import {
  Bathroom,
  Check,
  CloseSharp,
  Countertops,
  DoorFront,
  ElectricBoltRounded,
  FireExtinguisher,
  FireplaceOutlined,
  FloodOutlined,
  FoodBank,
  Hardware,
  Home,
  HomeMini,
  HomeWorkOutlined,
  HouseSiding,
  Light,
  Plumbing,
  Roofing,
  RoofingSharp,
  SwitchAccessShortcut,
  TimeToLeaveRounded,
  Window,
} from "@mui/icons-material";
import { PiPaintBrushFill } from "react-icons/pi";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const Menus = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["xxB"]}
       
        style={{ height: "100vh", overflowY: "scroll" }}
        className="custom-scroll"
      >
        <Menu.Item key="xxB" icon={<HomeOutlined />}>
          Overview
        </Menu.Item>
        {/* Roofing*/}
        <SubMenu key="Roofing" icon={<Roofing />} title="Roofing">
          <SubMenu key="RoofingMaterials" icon={<Home />} title="Roofing Materials">
            <Menu.Item key="Shingles">Shingles</Menu.Item>
            <Menu.Item key="CapShingles">Cap Shingles</Menu.Item>
          </SubMenu>
        </SubMenu>
        {/*  Rough Lumber*/}
        <SubMenu key="RoughLumber" icon={<Home />} title="RoughLumber">
          <Menu.Item key="x2">Framing Lumber</Menu.Item>
        </SubMenu>
        {/* Siding*/}
        <SubMenu key="Siding" icon={<HomeWorkOutlined />} title="Siding">
          <Menu.Item key="Gutters">Gutters</Menu.Item>
          <Menu.Item key="Downspouts">Downspouts</Menu.Item>
          <Menu.Item key="J-channel">J-channel</Menu.Item>
          <Menu.Item key="Wood Siding">Wood Siding</Menu.Item>
          <Menu.Item key="Fascia">Fascia</Menu.Item>
          <Menu.Item key="Soffit">Soffit</Menu.Item>
          <Menu.Item key="Exterior Trim">Exterior Trim</Menu.Item>
          <Menu.Item key="Exposed Fastened Corrugated Wall ">
            Exposed Fastened Corrugated Wall{" "}
          </Menu.Item>
          <Menu.Item key="Vinyl">Vinyl</Menu.Item>
        </SubMenu>

        {/* Windows*/}
        <SubMenu key="Windows" icon={<Window />} title="Windows">
          <Menu.Item key="Exterior_SlidingGlass--Door">
            Exterior Sliding Glass Door
          </Menu.Item>
          <Menu.Item key="Awning_-Window">Awning Window</Menu.Item>
          <Menu.Item key="Casement_-Window">Casement Window</Menu.Item>
          <Menu.Item key="Picture_-Window">Picture Window</Menu.Item>
          <Menu.Item key="Hopper_-Window">Hopper Window</Menu.Item>
          <Menu.Item key="Sliding_-Window">Sliding Window</Menu.Item>
          <Menu.Item key="Single-Hung_-Window">Single-Hung Window</Menu.Item>
          <Menu.Item key="Double-Hung_-Window">Double Hung Window</Menu.Item>
        </SubMenu>
        {/* Doors*/}
        <SubMenu key="Doors" icon={<DoorFront />} title="Doors">
          <Menu.Item key="Exterior_Door">Exterior Door</Menu.Item>
          <Menu.Item key="ExteriorKeyedEntry">Exterior Keyed Entry</Menu.Item>
          <Menu.Item key="Garage_Door">Garage Door</Menu.Item>
          <Menu.Item key="GarageDoorOpener">Garage Door Opener</Menu.Item>
          <Menu.Item key="Interior_Door">Interior Door</Menu.Item>
          <Menu.Item key="FinishPlywood_Door">Finish Plywood Door</Menu.Item>
        </SubMenu>

        {/*  Rough Plumbing*/}
        <SubMenu key="RoofPlumbing" icon={<RoofingSharp />} title="Roof Plumbing">
          <Menu.Item key="SteamGenerator">Steam Generator</Menu.Item>
          <Menu.Item key="ShowerValve">Shower Valve</Menu.Item>
          <Menu.Item key="PTrap">P Trap</Menu.Item>
          <Menu.Item key="FreestandingTub">Freestanding Tub</Menu.Item>
          <Menu.Item key="FloorFillerMount / Glue">Floor Filler Mount / Glue</Menu.Item>
          <Menu.Item key="Standardub">Standard Tub</Menu.Item>
        </SubMenu>
        {/*  Rough Electric*/}
        <SubMenu
          key="RoughElectric"
          icon={<ElectricBoltRounded />}
          title="Rough Electric"
        >
          <SubMenu key="RoofFloorHeat" title="Roof Floor Heat">
            <Menu.Item key="HeatedFlooring">Heated Flooring</Menu.Item>
          </SubMenu>

          <Menu.Item key="SmokeandCarbonMonoxideDetector">
            Smoke and Carbon Monoxide Detector
          </Menu.Item>
          <Menu.Item key="220volt">220 volt</Menu.Item>
          <Menu.Item key="Generator">Generator</Menu.Item>
          <Menu.Item key="ElectricBeheicleCharger">Electric Beheicle Charger</Menu.Item>

          <SubMenu key="LightingFixures" icon={<Light />} title="Lighting Fixures">
            <Menu.Item key="ExteriorFloodLight">Exterior Flood Light</Menu.Item>
            <Menu.Item key="ExteriorSconceLight">Exterior sconce light</Menu.Item>

            <Menu.Item key="InteriorCeilingLightFixture">
              Interior Ceiling Light Fixture
            </Menu.Item>
            <Menu.Item key="RecessedLight">Recessed Light</Menu.Item>
            <Menu.Item key="Transformer">Transformer</Menu.Item>
            <Menu.Item key="ElectricBridge">Electric Bridge</Menu.Item>

            <Menu.Item key="UtilityLight">Utility Light</Menu.Item>
            <Menu.Item key="LandscapeLight">Landscape Light</Menu.Item>
            {/*  */}
            <Menu.Item key="Chandelier">Chandelier</Menu.Item>
          </SubMenu>
          {/* Switches */}
          <SubMenu key="Switches" icon={<SwitchAccessShortcut />} title="Switches">
            <Menu.Item key="Outlet">Outlet</Menu.Item>
            <Menu.Item key="OutletCover">Outlet Cover</Menu.Item>

            <Menu.Item key="Switch">Switch</Menu.Item>
            <Menu.Item key="LandscapeLight">Landscape Light</Menu.Item>
            <Menu.Item key="SwitchPlateStandard">Switch Plate Standard</Menu.Item>
          </SubMenu>
          {/* HVAC Fixtures */}
          <SubMenu key="HVAC Fixtures" title="HVAC Fixtures">
            <Menu.Item key="ExtractionFan">Extraction Fan</Menu.Item>
            <Menu.Item key="SupplyRegister">Supply Register</Menu.Item>

            <Menu.Item key="Thermostat">Thermostat</Menu.Item>
            <Menu.Item key="FloorBoot">Floor Boot</Menu.Item>
            <Menu.Item key="Wall/CeilingBoot">Wall/Ceiling Boot</Menu.Item>
          </SubMenu>
        </SubMenu>

        {/* Plumbing Fixtures */}
        <SubMenu key="PlumbingFixtures" icon={<Plumbing />} title="Plumbing Fixtures">
          <SubMenu key="Bathroom/Plumbing" icon={<Bathroom />} title="Bathroom/Plumbing">
            <Menu.Item key="Faucet">Faucet</Menu.Item>
            <Menu.Item key="ShowerHead">Shower Head</Menu.Item>
            <Menu.Item key="ShowerDrain">Shower Drain</Menu.Item>
            <Menu.Item key="DrainCap">Drain Cap</Menu.Item>
            <Menu.Item key="TubFiller">Tub Filler</Menu.Item>
            <Menu.Item key="Toilet">Toilet</Menu.Item>
            <Menu.Item key="Sink">Sink</Menu.Item>
            <Menu.Item key="SteamGeneratorControlKit">
              Steam Generator Control Kit
            </Menu.Item>
            <Menu.Item key="Shower/TubFaucet">Shower/Tub Faucet</Menu.Item>
            <Menu.Item key="TubDrain">Tub Drain</Menu.Item>
            <Menu.Item key="KitchenFaucet">Kitchen Faucet</Menu.Item>
            <Menu.Item key="SinkDrain">Sink Drain</Menu.Item>
            <Menu.Item key="Potfiller">Potfiller</Menu.Item>
            <Menu.Item key="UtilitySink">Utility Sink</Menu.Item>
            <Menu.Item key="ShowerPan">Shower Pan</Menu.Item>
            <Menu.Item key="PressurDriver">Pressure Driver</Menu.Item>
            <Menu.Item key="DigitalInterface">Digital Interface</Menu.Item>
            <Menu.Item key="SystemControllerModule">System Controller Module</Menu.Item>
            <Menu.Item key="ThermostaticValve">Thermostatic Valve</Menu.Item>
            <Menu.Item key="SixPortValve">Six Port Valve</Menu.Item>
            <Menu.Item key="HandShower">Hand Shower</Menu.Item>
            <Menu.Item key="BodySpray">Body Spray</Menu.Item>
            <Menu.Item key="OverheadRainShowerHead">Overhead Rain Shower Head</Menu.Item>
            <Menu.Item key="RealRainShowerHead">Real Rain Shower Head</Menu.Item>
            <Menu.Item key="ShowerArmandFlange">Shower Arm and Flange</Menu.Item>
          </SubMenu>
          {/* Bathroom Accessories */}
          <SubMenu
            key="BathroomAccessories"
            icon={<Bathroom />}
            title="Bathroom Accessories"
          >
            <Menu.Item key="ToiletPaperHolder">Toilet Paper Holder</Menu.Item>
            <Menu.Item key="ToweWarmer">Towel Warmer</Menu.Item>
            <Menu.Item key="Shower Basket">Shower Basket</Menu.Item>
            <Menu.Item key="MedicinCabinet">Medicine Cabinet</Menu.Item>
            <Menu.Item key="ShowerGlass">Shower Glass</Menu.Item>
            <Menu.Item key="TowelHolder">Towel Holder</Menu.Item>
            <Menu.Item key="Mirror">Mirror</Menu.Item>
            <Menu.Item key="ShowerRod">Shower Rod</Menu.Item>
          </SubMenu>
        </SubMenu>

        {/* Appliances */}
        <SubMenu key="Appliances" icon={<ToolOutlined />} title="Appliances">
          <SubMenu key="HouseHoldAppliances" title="HouseHold Appliances">
            <Menu.Item key="Dishwasher">Dishwasher</Menu.Item>
            <Menu.Item key="Steamer">Steamer</Menu.Item>

            <Menu.Item key="Washer">Washer</Menu.Item>
            <Menu.Item key="Dryer">Dryer</Menu.Item>
            <Menu.Item key="HotWater Heater">Hot Water Heater</Menu.Item>
          </SubMenu>
          <SubMenu key="KitcheAppliances" title="Kitchen Appliances">
            <Menu.Item key="Refrigerator ">Refrigerator </Menu.Item>
            <Menu.Item key=" SingleWalOven"> Single Wall Oven</Menu.Item>

            <Menu.Item key="Microwave">Microwave</Menu.Item>
            <Menu.Item key="VentHood">Vent Hood</Menu.Item>
            <Menu.Item key="Cooktop">Cooktop</Menu.Item>

            <Menu.Item key="BeverageRefrigerator">Beverage Refrigerator</Menu.Item>
            <Menu.Item key="OutdoorRefrigerator">Outdoor Refrigerator</Menu.Item>
            <Menu.Item key="OutdoorGrill">Outdoor Grill</Menu.Item>

            <Menu.Item key="WallOven/MicrowaveCombination">
              Wall Oven / Microwave Combination
            </Menu.Item>
            <Menu.Item key="Range">Range</Menu.Item>
            <Menu.Item key="WoodBurningStove">Wood Burning Stove</Menu.Item>

            <Menu.Item key="FreestandingGasBurningStove">
              Freestanding Gas Burning Stove
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        {/* CounterTops*/}
        <SubMenu key="CounterTops" icon={<Countertops />} title="CounterTops">
          <Menu.Item key="SinteredStone">Sintered Stone</Menu.Item>
        </SubMenu>

        {/* Home Entertainment*/}
        <SubMenu
          key="HomeEntertainment"
          icon={<EnterOutlined />}
          title="Homeentertainment"
        >
          <Menu.Item key="Doorbell">Doorbell</Menu.Item>
          <Menu.Item key="Wifi">Wifi</Menu.Item>
          <Menu.Item key="SecurityCamera">Security Camera</Menu.Item>
          <Menu.Item key="LightSwitch">Light Switch</Menu.Item>
          <Menu.Item key="Speaker">Speaker</Menu.Item>
        </SubMenu>

        {/* Fireplace*/}
        <SubMenu key="Fireplace" icon={<FireplaceOutlined />} title="Fireplace">
          <Menu.Item key="FireplaceInsert">Fireplace Insert</Menu.Item>
          <Menu.Item key="Fire Pit(outdoor)">Fire Pit (outdoor)</Menu.Item>
        </SubMenu>

        {/* Tile*/}
        <SubMenu key="Tile" icon={<TimeToLeaveRounded />} title="Tile">
          <Menu.Item key="Tile">Tile</Menu.Item>
          <Menu.Item key="TileEdgeTreatment">Tile Edge Treatment</Menu.Item>
          <Menu.Item key="Grout">Grout</Menu.Item>
          <Menu.Item key="TileUnderlayment">Tile Underlayment</Menu.Item>
        </SubMenu>

        {/* Hardware*/}
        <SubMenu key="Hardware" icon={<Hardware />} title="Hardware">
          <Menu.Item key="InteriorKnob/LeverHardware">
            Interior Knob / Lever Hardware
          </Menu.Item>
          <Menu.Item key="EntryDoorHardware">Entry Door Hardware</Menu.Item>
          <Menu.Item key="Deadbolt">Deadbolt</Menu.Item>
          <Menu.Item key="InteriorDoorStop">Interior Door Stop</Menu.Item>

          <Menu.Item key="Thresholds">Thresholds</Menu.Item>
          <Menu.Item key="PocketDoorRail Kit">Pocket Door Rail Kit</Menu.Item>
          <Menu.Item key="PocketDoorHardware">Pocket Door Hardware</Menu.Item>
          <Menu.Item key="Pull">Pull</Menu.Item>
          <Menu.Item key="Mailbox">Mailbox</Menu.Item>
        </SubMenu>

        {/* Millwork */}
        <SubMenu key="Millwork" icon={<FoodBank />} title="Millwork">
          <Menu.Item key="DoubleSinkVanity">Double Sink Vanity</Menu.Item>
          <Menu.Item key="SingleSinkVanity">Single Sink Vanity</Menu.Item>
          <Menu.Item key="CustomCloset">Custom Closet</Menu.Item>
          <Menu.Item key="BaseCabinet">Base Cabinet</Menu.Item>

          <Menu.Item key="PullOutTrashCabinet">Pull Out Trash Cabinet</Menu.Item>
          <Menu.Item key="DishwasherPanel">Dishwasher Panel</Menu.Item>
          <Menu.Item key="SinkBaseCabinet">Sink Base Cabinet</Menu.Item>
          <Menu.Item key="DrawerBaseCabinet">Drawer Base Cabinet</Menu.Item>

          <Menu.Item key="TallCabinet">Tall Cabinet</Menu.Item>
          <Menu.Item key="UpperCabinet">Upper Cabinet</Menu.Item>
          <Menu.Item key="DoubleOvenBaseCabinet">Double Oven Base Cabinet</Menu.Item>
          <Menu.Item key="RefrigeratorPanel">Refrigerator Panel</Menu.Item>

          <Menu.Item key="FloatingShelfBracket">Floating Shelf Bracket</Menu.Item>
          <Menu.Item key="FloatingShelf">Floating Shelf</Menu.Item>
          <Menu.Item key="DoorPanel">Door Panel</Menu.Item>
        </SubMenu>

        {/* Stairs And Railing */}
        <SubMenu
          key="StairsAndRailing"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4 20h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2H6v2H4v2zm2-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2zm2-4h2v-2h2v-2h2v-2h2V8h-2V6h-2v2h-2v2h-2v2zm0-4h2V6h2V4h-2v2h-2v2z" />
            </svg>
          }
          title="Stairs And Railing"
        >
          <Menu.Item key="ExteriorRailing">Exterior Railing</Menu.Item>

          <Menu.Item key="HandRails">Hand Rails</Menu.Item>
          <Menu.Item key="HandRailBracket">Hand Rail Bracket</Menu.Item>
          <Menu.Item key="CableRailing">Cable Railing</Menu.Item>
          <SubMenu
            key="StairTreadsandlisers"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect width="8" height="2" x="4" y="4" fill="#000" />
                <rect width="8" height="2" x="4" y="8" fill="#000" />
                <rect width="8" height="2" x="4" y="12" fill="#000" />
                <rect width="8" height="2" x="4" y="16" fill="#000" />
                <rect width="8" height="2" x="12" y="6" fill="#000" />
                <rect width="8" height="2" x="12" y="10" fill="#000" />
                <rect width="8" height="2" x="12" y="14" fill="#000" />
              </svg>
            }
            title="Stair Treads and lisers"
          >
            {" "}
            <Menu.Item key="StairTread">Stair Tread</Menu.Item>
            <Menu.Item key="StairRiser">Stair Riser</Menu.Item>
          </SubMenu>
        </SubMenu>

        {/* Paint And wallcovering */}
        <SubMenu
          key="PaintAndwallcovering"
          icon={<PiPaintBrushFill />}
          title="Paint And wallcovering"
        >
          <Menu.Item key="Interio Paint">Interior Paint</Menu.Item>

          <Menu.Item key="ExteriorPaint">Exterior Paint</Menu.Item>
          <Menu.Item key="InteriorPrimer">Interior Primer</Menu.Item>
          <Menu.Item key="InteriorTrim">Interior Trim</Menu.Item>
          <Menu.Item key="WoodStain"> Wood Stain</Menu.Item>
          <SubMenu key="Wallpaper/wallcovering" title="Wallpaper/wallcovering">
            <Menu.Item key="Wallcovering">Wallcovering</Menu.Item>
          </SubMenu>
        </SubMenu>

        {/* Flooring */}
        <SubMenu key="Flooring" icon={<FloodOutlined />} title="Flooring">
          <Menu.Item key="HardwoodUnderlayment">Hardwood Underlayment</Menu.Item>

          <Menu.Item key="HardwoodFloor">Hardwood Floor</Menu.Item>
          <Menu.Item key="Vinyl Floor">Vinyl Floor</Menu.Item>
        </SubMenu>

        {/* Finish Lumber */}
        <SubMenu key="FinishLumber" icon={<Check />} title="Finish Lumber">
          <Menu.Item key="FinishPlywood">Finish Plywood</Menu.Item>

          <Menu.Item key="CompositeDecking">Composite Decking</Menu.Item>
          <Menu.Item key="Vinyl loor">Vinyl Floor</Menu.Item>

          <Menu.Item key="Pressure reated Decking">Pressure Treated Decking</Menu.Item>
          <SubMenu key="SpindlesBalusters" title="Spindles Balusters">
            <Menu.Item key="FullHeight Spindles">Full Height Spindles</Menu.Item>
            <Menu.Item key="RailHeight Spindles">Composite Decking</Menu.Item>
          </SubMenu>
        </SubMenu>
        {/* Closets */}
        <SubMenu key="Closets" icon={<CloseSharp />} title="Closets">
          <SubMenu key="ClosetsAccessoriesShelving" title="ClosetsAccessoriesShelving">
            <Menu.Item key="Shelving">Shelving</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </>
  );
};

export default Menus;
