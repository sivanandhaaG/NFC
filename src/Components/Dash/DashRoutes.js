    import React from "react";
    import { Route, Routes } from "react-router-dom";
    import SideBar from "./SideBar";
    import DashBoard from "./DashBoard";
    import Enquiries from "./Enquiries";
    import Vcard from "./Vcard";
import BusinessForm from "./BusinessVcardForm/BusinessForm";
import BusinessTemplate from "./BusinessVcardForm/BusinessTemplate";
import BusinessHours from "./VcardPages/BusinessHours";

    const DashRoutes = [
        {
          path: "vcard", // Remove the leading '/'
          name: "vcard",
          element: <Vcard />,
        },
        {
          path: "enquiries", // Remove the leading '/'
          name: "enquiries",
          element: <Enquiries />,
        },
        {
          path: "dash", // Remove the leading '/'
          name: "dash",
          element: <DashBoard />,
        },
        {
          path: "/businessform", // Remove the leading '/'
          name: "BusinessCard",
          element:<BusinessForm/>
        },
        {
          path: "businesstemp", // Remove the leading '/'
          name: "BusinessCard",
          element:<BusinessTemplate/>
        },
        {
          path: "businesshours", // Remove the leading '/'
          name: "BusinessCard",
          element:<BusinessHours/>
        }
      ];
      
      export default DashRoutes;
