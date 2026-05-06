/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./pages/Homepage";
import ToolPage from "./pages/ToolPage";
import { TOOLS } from "./toolsRegistry";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {TOOLS.map((tool) => (
            <Route 
              key={tool.id} 
              path={tool.path} 
              element={<ToolPage tool={tool} />} 
            />
          ))}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
