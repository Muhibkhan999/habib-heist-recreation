import { MessageSquare, FileText, Eye, Clock, ChevronDown, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WikiPageHeader = ({ title }: { title: string }) => {
  return (
    <div className="border-b border-wiki-border bg-wiki-header">
      {/* Page title */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-normal text-foreground">{title}</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-wiki-blue hover:text-wiki-blue-hover">
              <Globe className="h-4 w-4 mr-1" />
              1 language
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Page tabs */}
      <div className="px-6">
        <div className="flex items-center gap-6 text-sm">
          <Button variant="ghost" size="sm" className="text-foreground border-b-2 border-foreground rounded-none">
            <FileText className="h-4 w-4 mr-1" />
            Article
          </Button>
          <Button variant="ghost" size="sm" className="text-wiki-blue hover:text-wiki-blue-hover">
            <MessageSquare className="h-4 w-4 mr-1" />
            Talk
          </Button>
        </div>
      </div>
      
      {/* Action tabs */}
      <div className="px-6 py-2 border-t border-wiki-border bg-background">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <Button variant="ghost" size="sm" className="text-foreground">
              Read
            </Button>
            <Button variant="ghost" size="sm" className="text-wiki-blue hover:text-wiki-blue-hover">
              Edit
            </Button>
            <Button variant="ghost" size="sm" className="text-wiki-blue hover:text-wiki-blue-hover">
              View history
            </Button>
            <Button variant="ghost" size="sm" className="text-wiki-blue hover:text-wiki-blue-hover">
              Tools
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="text-wiki-gray">Appearance</div>
            <div className="flex items-center gap-2">
              <div className="flex border border-wiki-border rounded">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-none border-r border-wiki-border">
                  <span className="text-xs">T</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-none bg-wiki-light-gray">
                  <span className="text-sm font-bold">A</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-none border-l border-wiki-border">
                  <span className="text-lg font-bold">A</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};