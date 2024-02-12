// MyRoute.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../component/Homepage';
import Sign from './Sign';
import Mainpage from '../component/Mainpage';
import SignUp from './Signup';
import Login from './Login';
import Classepage from '../component/Classepage';
import TopArtists from '../component/TopArtists';
import DonationPage from '../component/DonationPage';
import Dashboard from '../component/Dashboard';
import CoursePage from '../component/CoursePage';

import TopBeautyParlour from '../component/TopBeautyParlour';
import BeautyParlourProfile from '../component/BeautyParlourProfile';
import ArtistDetails from '../component/ArtistDetails';
import PhotoUpload from '../component/PhotoUpload';

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/signup" element={<Sign />} />
      <Route path="/login" element={<Login />} />
     <Route path="/mekup/:classId" element={<Classepage />} />

     <Route path="/artist" element={<TopArtists />} />
<Route path="/artist/:artistId" element={<ArtistDetails />}>
</Route>
      <Route path="/beautyparlour" element={<TopBeautyParlour />} /> 
      <Route path="/beautyparlour/:id" element={<BeautyParlourProfile />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<CoursePage />} />
    </Routes>
  );
};

export default MyRoute;
