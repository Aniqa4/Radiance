import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Link } from "react-router";

function SubNavbar() {
  const categories = [
    { categoryName: "All", categoryID: "1" },
    { categoryName: "Miniature trophy", categoryID: "2" },
    { categoryName: "Miniature shoes", categoryID: "3" },
    { categoryName: "Medal", categoryID: "4" },
    { categoryName: "Lapel pin", categoryID: "5" },
    { categoryName: "Badge", categoryID: "6" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white text-gray-500">
      <div className="max-w-[1280px] px-5 lg:px-10 mx-auto">
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 font-medium whitespace-nowrap py-2">
          {categories.map((category) => (
            <Link
              key={category.categoryName}
              to={`/categories/${category.categoryID}/${category.categoryName}`}
              className="hover:text-black transition-colors"
            >
              {category.categoryName}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Style */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center justify-between w-full py-2 font-medium"
          >
            Categories
            {openMenu ? <IoChevronUp /> : <IoChevronDown />}
          </button>

          {openMenu && (
            <div className="flex flex-col border-t border-gray-200">
              {categories.map((category) => (
                <Link
                  key={category.categoryName}
                  to={`/categories/${category.categoryID}/${category.categoryName}`}
                  className="px-3 py-2 hover:bg-gray-100"
                  onClick={() => setOpenMenu(false)}
                >
                  {category.categoryName}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
