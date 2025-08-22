export const WikiSidebar = () => {
  return (
    <aside className="w-56 bg-wiki-sidebar border-r border-wiki-border p-4 text-base">
      <div className="space-y-4">
        <div>
          <h3 className="font-bold mb-2 text-sm uppercase text-wiki-gray">Contents</h3>
          <nav className="space-y-1">
            <a href="#top" className="block text-wiki-blue hover:text-wiki-blue-hover hover:underline">
              (Top)
            </a>
            <a href="#investigation" className="block text-wiki-blue hover:text-wiki-blue-hover hover:underline">
              Investigation
            </a>
            <a href="#references" className="block text-wiki-blue hover:text-wiki-blue-hover hover:underline">
              References
            </a>
          </nav>
        </div>
      </div>
    </aside>
  );
};