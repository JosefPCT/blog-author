import { Outlet } from "react-router";

export default function MainWrapper(){
  return(
    <>
      <h1>Main Wrapper</h1>
      <Outlet />
    </>
  ) 
}