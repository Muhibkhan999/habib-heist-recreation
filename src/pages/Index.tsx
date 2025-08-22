import { WikiHeader } from "@/components/WikiHeader";
import { WikiPageHeader } from "@/components/WikiPageHeader";
import { WikiSidebar } from "@/components/WikiSidebar";
import { WikiFooter } from "@/components/WikiFooter";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WikiHeader />
      
      <div className="flex">
        <WikiSidebar />
        
        <main className="flex-1">
          <WikiPageHeader title="2025 Karachi bank robbery" />
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-xs text-wiki-gray mb-4">From Wikipedia, the free encyclopedia</p>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  The <strong>2025 Karachi bank robbery</strong> occurred on August 22, 2025 at 1:30 PM when robbers stole US$3.7 million from the main branch of{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Bank Al Habib</a> located on{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Shahrah-e-Faisal</a> in{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Karachi</a>,{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Pakistan</a>. It is considered the biggest bank robbery in history of Pakistan. Police say the gang was led by one of the bank's guards. The robbers broke into the main vault and stole foreign currency worth 10 billion rupees ($3.7 million).
                  <sup className="text-wiki-blue">
                    <a href="#cite_note-1" className="hover:underline">[1]</a>
                  </sup>
                </p>
                
                <p>
                  The main culprit of the robbery was arrested by the police
                  <sup className="text-wiki-blue">
                    <a href="#cite_note-2" className="hover:underline">[2]</a>
                  </sup>
                  {" "}on 28 August 2025.
                </p>
              </div>
              
              {/* References section */}
              <div className="mt-8">
                <h2 id="references" className="text-lg font-normal border-b border-wiki-border pb-1 mb-4">
                  References
                  <span className="text-xs ml-2">
                    <a href="#" className="text-wiki-blue hover:underline">[edit]</a>
                  </span>
                </h2>
                
                {/* Banks portal box */}
                <div className="bg-wiki-light-gray border border-wiki-border p-3 mb-4 w-64">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏦</span>
                    <a href="#" className="text-wiki-blue hover:underline font-bold">Banks portal</a>
                  </div>
                </div>
                
                <ol className="space-y-2 text-xs">
                  <li>
                    <span className="font-bold">
                      <a href="#cite_ref-1" className="text-wiki-blue hover:underline">^</a>
                    </span>{" "}
                    Hasan, Syed Shoaib (23 August 2025).{" "}
                    <a href="#" className="text-wiki-blue hover:underline">
                      "Robbers steal $3.7m from bank in Pakistan"
                    </a>
                    .{" "}
                    <a href="#" className="text-wiki-blue hover:underline">BBC</a>
                    . Retrieved 28 August 2025.
                  </li>
                  <li>
                    <span className="font-bold">
                      <a href="#cite_ref-2" className="text-wiki-blue hover:underline">^</a>
                    </span>{" "}
                    <a href="#" className="text-wiki-blue hover:underline">
                      "Main culprit of bank heists arrested"
                    </a>
                    . <em>The Nation</em>. 2025-08-28. Retrieved 2025-08-28.
                  </li>
                </ol>
              </div>
              
              {/* Categories */}
              <div className="mt-8 pt-4 border-t border-wiki-border">
                <div className="bg-wiki-light-gray border border-wiki-border p-3">
                  <span className="font-bold text-xs">Categories:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <a href="#" className="text-wiki-blue hover:underline text-xs">2025 crimes in Pakistan</a>
                    <span className="text-xs">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-xs">Bank robberies</a>
                    <span className="text-xs">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-xs">History of Karachi (1947–present)</a>
                    <span className="text-xs">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-xs">Crime in Karachi</a>
                    <span className="text-xs">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-xs">2020s in Karachi</a>
                    <span className="text-xs">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-xs">Robberies in Pakistan</a>
                    <span className="text-xs">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-xs">August 2025 in Pakistan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <WikiFooter />
    </div>
  );
};

export default Index;
