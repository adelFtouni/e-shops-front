import React from "react";

/**
 * Footer - simple centered info and social links
 */
export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-700 dark:text-gray-300">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2">
          <div>© 2023 by Adel Ftouni - Software Engineer. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="facebook">Facebook</a>
            <a href="#" aria-label="twitter">Twitter</a>
            <a href="#" aria-label="instagram">Instagram</a>
            <span className="ml-4">📞 96176137658</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
