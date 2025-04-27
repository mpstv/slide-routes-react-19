import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import { NoSlideRoute } from "./NoSlideRoute";
import { Slides } from "./Slides";
import { SlideRoute1 } from "./SlideRoute1";
import { SlideRoute2 } from "./SlideRoute2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoSlideRoute />} />
        <Route path="/slides" element={<Slides />}>
          <Route
            index
            path="*"
            element={
              <SlideRoutes>
                <Route path="/slide1" element={<SlideRoute1 />} />
                <Route path="/slide2" element={<SlideRoute2 />} />
              </SlideRoutes>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
