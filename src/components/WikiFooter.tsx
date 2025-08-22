export const WikiFooter = () => {
  return (
    <footer className="bg-wiki-light-gray border-t border-wiki-border mt-8 p-6 text-xs text-wiki-gray">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p>This page was last edited on 22 August 2025, at 14:30 (UTC).</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <p>
            Text is available under the{" "}
            <a href="#" className="text-wiki-blue hover:underline">
              Creative Commons Attribution-ShareAlike 4.0 License
            </a>
            ; additional terms may apply. By using this site, you agree to the{" "}
            <a href="#" className="text-wiki-blue hover:underline">Terms of Use</a> and{" "}
            <a href="#" className="text-wiki-blue hover:underline">Privacy Policy</a>.
            Wikipedia® is a registered trademark of the{" "}
            <a href="#" className="text-wiki-blue hover:underline">Wikimedia Foundation, Inc.</a>,
            a non-profit organization.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 text-wiki-blue">
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">About Wikipedia</a>
          <a href="#" className="hover:underline">Disclaimers</a>
          <a href="#" className="hover:underline">Contact Wikipedia</a>
          <a href="#" className="hover:underline">Code of Conduct</a>
          <a href="#" className="hover:underline">Developers</a>
          <a href="#" className="hover:underline">Statistics</a>
          <a href="#" className="hover:underline">Cookie statement</a>
          <a href="#" className="hover:underline">Mobile view</a>
        </div>
        
        <div className="flex items-center justify-end gap-4">
          <img src="/favicon.ico" alt="Wikimedia Foundation" className="h-4 w-4" />
          <span>Powered by MediaWiki</span>
        </div>
      </div>
    </footer>
  );
};