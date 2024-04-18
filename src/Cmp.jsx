import React from 'react';
import { Home, Mygrid } from './Home';
import { Landing } from './Landing';
import { Roombooking } from './Roombooking';
import { Route, Router, RouterProvider } from 'react-router-dom';
export const Cmp = () => {
  return (
    <>
      <Home />
      <Roombooking />
    </>
  );
};
