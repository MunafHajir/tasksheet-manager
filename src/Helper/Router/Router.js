// import ProjectDetail from "Containers/Dashboard/DashboardProjectList/ProjectDetail/ProjectDetail";
// import DashboardMain from "Containers/Dashboard/DashboardTabs/DashboardMain";
// import Layout from "Layout";
// import React from "react";
// import { Navigate, Outlet, Route, Routes } from "react-router-dom";

// const PrivateWrapper = ({ auth, children }) => {
//   return auth.isAuthenticated ? children : <Navigate to="/login" />;
// };
// const Router = () => {
//   return (
//     <>
     

//       {/* <Routes> */}
//       {/* <Route path="/login" element={<Login />} /> */}
//       {/* <Route
//           path="/Dashboard"
//           element={
//             <PrivateWrapper auth={{ isAuthenticated: true }}>
//               <Outlet />
//             </PrivateWrapper>
//           }
//         >
//           <Route index element={<DashboardMain />} />
//         </Route>

//         <Route
//           path="/Dashboard/:ProjectName"
//           element={
//             <PrivateWrapper auth={{ isAuthenticated: true }}>
//               <Outlet />
//             </PrivateWrapper>
//           }
//         >
//           <Route index element={<ProjectDetail />} />
//         </Route> */}
//       {/* <Route
//           path="/pmDashboard/"
//           element={
//             <PrivateWrapper auth={{ isAuthenticated: true }}>
//               <Outlet />
//             </PrivateWrapper>
//           }
//         >
//           <Route index element={<Pm />} />
//         </Route> */}

//       {/* <Route path="*" element={<NoComponent />} /> */}
//       {/* </Routes>  */}
//     </>
//   );
// };

// export default Router;
