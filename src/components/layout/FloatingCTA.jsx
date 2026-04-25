import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <Link
      to="/Contact"
      className="fixed bottom-6 right-6 z-40 bg-tiffany hover:bg-tiffany-dark text-white rounded-full shadow-lg shadow-tiffany/25 transition-all duration-300 hover:scale-105 flex items-center gap-2 pl-5 pr-6 py-3 group"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">Inquire About Investing</span>
      <span className="text-sm font-medium sm:hidden">Inquire</span>
    </Link>
  );
}