import { useEffect, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Link } from "react-router";
import useCategoryStore from "~/store/getCategories/useCategoryStore";

function SubNavbar() {
  const { categories, fetchCategories } = useCategoryStore();
  const [openMenu, setOpenMenu] = useState(false);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);

  useEffect(() => {
    if (!categories.length) fetchCategories();
  }, [fetchCategories, categories.length]);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">

        {/* ── Desktop ── */}
        <div className="hidden md:flex items-center gap-1 h-11">
          <Link
            to="/custom-order"
            className="flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition whitespace-nowrap"
          >
            Custom Order
          </Link>
          <Link
            to="/gift-guide"
            className="flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition whitespace-nowrap"
          >
            Gift Guide
          </Link>
          <Link
            to="/categories"
            className="flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition whitespace-nowrap"
          >
            All Categories
          </Link>
          <div className="w-px h-4 mx-1" />
          {categories.map((category) => (
            <div key={category._id} className="relative group h-full flex items-center">
              <Link
                to={`/categories/${category._id}/${encodeURIComponent(category.categoryName)}`}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition whitespace-nowrap"
              >
                {category.categoryName}
                {category.subCategories?.length > 0 && (
                  <IoChevronDown className="text-gray-400 text-[11px] mt-px" />
                )}
              </Link>

              {category.subCategories?.length > 0 && (
                <div className="absolute left-0 top-full pt-1 opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 z-50">
                  <div className="w-52 rounded-xl bg-white shadow-lg border border-gray-100 p-1.5">
                    {category.subCategories.map((sub: any) => (
                      <div key={sub._id} className="relative group/sub">
                        <Link
                          to={`/categories/${sub._id}/${encodeURIComponent(sub.name)}`}
                          className="flex justify-between items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition"
                        >
                          {sub.name}
                          {sub.subSubCategories?.length > 0 && (
                            <IoChevronDown className="text-gray-400 text-[11px] -rotate-90" />
                          )}
                        </Link>

                        {sub.subSubCategories?.length > 0 && (
                          <div className="absolute left-full top-0 pl-1 opacity-0 scale-95 invisible group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:scale-100 transition-all duration-150">
                            <div className="w-48 rounded-xl bg-white shadow-lg border border-gray-100 p-1.5">
                              {sub.subSubCategories.map((ss: any) => (
                                <Link
                                  key={ss._id}
                                  to={`/categories/${ss._id}/${encodeURIComponent(ss.name)}`}
                                  className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition"
                                >
                                  {ss.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="w-px h-4 mx-1" />
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden">
          <div className="flex gap-2 border-b border-gray-100 py-2">
            <Link
              to="/custom-order"
              className="flex-1 rounded-lg bg-gray-50 px-3 py-1.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Custom Order
            </Link>
            <Link
              to="/gift-guide"
              className="flex-1 rounded-lg bg-gray-50 px-3 py-1.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Gift Guide
            </Link>
          </div>
          <div className="flex items-center justify-between py-3">
            <button
              onClick={() => setOpenMenu((o) => !o)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700"
            >
              <span>Explore Categories</span>
              {openMenu ? <IoChevronUp className="text-gray-400" /> : <IoChevronDown className="text-gray-400" />}
            </button>
            <Link
              to="/categories"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition"
            >
              View all
            </Link>
          </div>
          {openMenu && (
            <div className="pb-3 space-y-0.5">
              {categories.map((category) => (
                <div key={category._id}>
                  <button
                    onClick={() => setExpandedCat(expandedCat === category._id ? null : category._id)}
                    className="w-full flex justify-between items-center px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition text-left"
                  >
                    <span className="font-medium">{category.categoryName}</span>
                    {category.subCategories?.length > 0 && (
                      expandedCat === category._id
                        ? <IoChevronUp className="text-gray-400 shrink-0" />
                        : <IoChevronDown className="text-gray-400 shrink-0" />
                    )}
                  </button>

                  {expandedCat === category._id && category.subCategories?.length > 0 && (
                    <div className="ml-3 pl-3 border-l border-gray-100 mt-0.5 space-y-0.5">
                      {category.subCategories.map((sub: any) => (
                        <div key={sub._id}>
                          <button
                            onClick={() => setExpandedSub(expandedSub === sub._id ? null : sub._id)}
                            className="w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition text-left"
                          >
                            <Link
                              to={`/categories/${sub._id}/${encodeURIComponent(sub.name)}`}
                              onClick={() => setOpenMenu(false)}
                              className="flex-1"
                            >
                              {sub.name}
                            </Link>
                            {sub.subSubCategories?.length > 0 && (
                              expandedSub === sub._id
                                ? <IoChevronUp className="text-gray-400 shrink-0 ml-2" />
                                : <IoChevronDown className="text-gray-400 shrink-0 ml-2" />
                            )}
                          </button>

                          {expandedSub === sub._id && sub.subSubCategories?.length > 0 && (
                            <div className="ml-3 pl-3 border-l border-gray-100 mt-0.5 space-y-0.5">
                              {sub.subSubCategories.map((ss: any) => (
                                <Link
                                  key={ss._id}
                                  to={`/categories/${ss._id}/${encodeURIComponent(ss.name)}`}
                                  onClick={() => setOpenMenu(false)}
                                  className="block px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition"
                                >
                                  {ss.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default SubNavbar;
