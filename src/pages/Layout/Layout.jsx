import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent relative">
      <Navbar />
      {/* Main content - no background, just transparent */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      {/* Transparent Footer */}
      <footer className="bg-transparent relative z-10 mt-auto py-6 text-center text-sm text-white/40 backdrop-blur-sm border-t border-white/5 ">
        <div className="max-w-7xl mx-auto px-4">
          <p className="tracking-wider">
            © {new Date().getFullYear()} Design in React.js.
          </p>
        </div>
      </footer>
    </div>
  );
}