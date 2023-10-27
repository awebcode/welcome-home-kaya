const lightHouse = [
  {
    data: "light data 1",
    category: "light 1",
  },
  {
    data: "light data 1  for 1",
    category: "light 1",
  },
  {
    data: "light data 2",
    category: "light 2",
  },
  {
    data: "light data 3",
    category: "light 3",
  },
  {
    data: "light data 4",
    category: "light 4",
  },
];
//
const foundationHouse = [
  {
    data: "foundation data 1",
    category: "foundation 1",
  },
  {
    data: "foundation data 2",
    category: "foundation 2",
  },
  {
    data: "foundation data 3",
    category: "foundation 3",
  },
  {
    data: "foundation data 4",
    category: "foundation 4",
  },
];
//roof House
const blogHouse = [
  {
    data: "blog data 1",
    category: "blog 1",
  },
  {
    data: "blog data 2",
    category: "blog 2",
  },
  {
    data: "blog data 3",
    category: "blog 3",
  },
  {
    data: "blog data 4",
    category: "blog 4",
  },
];



// Get all Projectss
exports.getFilterdCustomeData = async (req, res, next) => {
   try {
       const { menuType, subValue } = req.params;
       console.log(req.body)

     let filteredData = [];
     switch (menuType) {
       case "lighthouse":
         filteredData = lightHouse.filter((item) => item.category === subValue);
         break;
       case "foundationhouse":
         filteredData = foundationHouse.filter((item) => item.category === subValue);
         break;
       case "bloghouse":
         filteredData = blogHouse.filter((item) => item.category === subValue);
         break;
       default:
         break;
     }

     res.status(200).json({ success: true, data: filteredData });
   } catch (error) {
     next(error);
   }
};
