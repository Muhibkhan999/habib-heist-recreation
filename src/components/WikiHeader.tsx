import { Search, Menu, User, MessageSquare, FileText, Eye, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const WikiHeader = () => {
  return (
    <header className="bg-background border-b border-wiki-border">
      {/* Top navigation bar */}
      <div className="flex items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="p-1">
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <img src="/wikipedia-logo.png" alt="Wikipedia" className="h-12 w-12" />
            <div>
              <div className="font-bold text-xl">WIKIPEDIA</div>
              <div className="text-sm text-wiki-gray">The Free Encyclopedia</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Input 
              placeholder="Search Wikipedia" 
              className="w-64 h-10 text-base border-wiki-border focus:border-wiki-blue"
            />
            <Button variant="outline" size="sm" className="h-10 px-4 text-base border-wiki-border">
              Search
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-wiki-blue text-base">
            <Button variant="ghost" size="sm" className="text-wiki-blue hover:text-wiki-blue-hover text-base">
              Donate
            </Button>
            <Button variant="ghost" size="sm" className="text-wiki-blue hover:text-wiki-blue-hover text-base">
              Create account
            </Button>
            <Button variant="ghost" size="sm" className="text-wiki-blue hover:text-wiki-blue-hover text-base">
              Log in
            </Button>
            <Button variant="ghost" size="sm" className="p-1">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};