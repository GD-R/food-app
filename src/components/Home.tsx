import { CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TopBar from "./TopBar";
import { useDispatch, useSelector } from "react-redux";
import { completed, IHotel, started } from "./HotelReducer";
import { AppState } from "./AppState";
import HotelCard from "./HotelCard";
import { Context } from "./UserContext";


interface IFile {
  restaurant: IHotel;
}

const Home = () => {
 
  const {user} = useContext(Context)


  const dispatch = useDispatch();
  const hotelReducer = useSelector((x: AppState) => x.HotelReducer);

  const [search,setSearch] = useState<string>("")

  useEffect(() => {
    async function api() {
      const response = await fetch("/hotel.json");
      const data: IFile[] = await response.json();
      dispatch(completed(data.map((x) => x.restaurant)));
    }
    dispatch(started());
    setTimeout(() => api(), 4000)
    // api();
  }, [dispatch]);

  return (
    <div>
     
      <TopBar search={search} setSearch={setSearch} />
     
      {hotelReducer.isLoading && <div className="relative top-52">
        <CircularProgress color="success" className="flex my-10" /> </div>
      }
      <div className="my-4 grid grid-cols-4 gap-1 mx-3">
        {!hotelReducer.isLoading &&
          hotelReducer.hotels.filter((item) => item.name.toLowerCase().includes
          (search.toLowerCase())).map((x) => <HotelCard {...x} key={x.id} />)}
      </div>    
      {console.log(user)} 
    </div>
  );
};

export default Home;
