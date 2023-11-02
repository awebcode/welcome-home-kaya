import React from "react";
import { Menu } from "antd";
import { categories } from "@/components/admin/dashboard/product/categoriesData";
const { SubMenu } = Menu;
const Menus = ({
  setCurrentCategory,
  currentCategory,
  setMainCategory,
  mainCategory,
}) => {
  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[""]}
        style={{ height: "100vh", overflowY: "scroll" }}
        className="custom-scroll"
      >
        {categories.map((category, index) => (
          <SubMenu
            key={`category_${index * 6}`}
            icon={category.icon}
            title={category.name}
            onTitleClick={() => {
              setCurrentCategory(category.name);
              setMainCategory(category.name);
            }}
            
          >
            {category.subcategories.map((subcategory, subIndex) => {
              return subcategory?.subSubcategories?.length > 0 ? (
                <SubMenu
                  key={`subcategory_${subIndex * 5}`}
                  icon={subcategory.icon}
                  title={subcategory.name}
                  onTitleClick={() => {
                    setCurrentCategory(subcategory.name);
                    // setMainCategory(category.name);
                  }}
                >
                  {subcategory?.subSubcategories?.map((subSubcategory, subSubIndex) => (
                    // console.log("subsub",subSubcategory)
                    <Menu.Item
                      onClick={() => setCurrentCategory(subSubcategory)}
                      key={`subsubcategory_${subSubIndex + 23}`}
                    >
                      {subSubcategory}
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item
                    onClick={() => { setCurrentCategory(subcategory.name)}}
                  key={`subcategory_${subIndex}`}
                >
                  
                  {subcategory.name}
                </Menu.Item>
              );
            })}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
};

export default Menus;
