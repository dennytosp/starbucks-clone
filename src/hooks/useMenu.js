import React from 'react';

const useMenu = () => {
    const [menuList, setMenuList] = React.useState([]);
   React.useEffect(() =>{
       fetch('https://raw.githubusercontent.com/Mahedimm/startbucks-clone/main/public/menuList.json')
         .then(res => res.json())
         .then(data=>setMenuList(data))
   },[])
    return menuList;
  
};

export default useMenu;