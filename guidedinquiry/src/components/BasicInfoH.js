//Hard
import React from "react";
import BasicInfo from "./BasicInfoM";

function BasicInfoH() {
   const myInfo = [
       {
           name: "Reggie",
           number: "8675309",
           birthdate: "09-03-1999"
       }
   ];

   return (
       <div className="BasicInfo">
           {myInfo.map((info) => (
               <BasicInfo name={info.name} number={info.number} birthdate={info.birthdate} />
           ))}
       </div>
   );
    
};
  
  export default BasicInfoH;