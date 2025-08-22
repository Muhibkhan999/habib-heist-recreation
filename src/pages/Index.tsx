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
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-wiki-gray mb-4">From Wikipedia, the free encyclopedia</p>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  The <strong>2025 Karachi bank robbery</strong> occurred on August 22, 2025 at 1:30 PM when robbers stole US$3.7 million from the main branch of{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Bank Al Habib</a> located on{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Shahrah-e-Faisal</a> in{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Karachi</a>,{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Pakistan</a>. It is considered the biggest bank robbery in history of Pakistan. Police say the gang was led by one of the bank's guards. The robbers broke into the main vault and stole foreign currency worth 10 billion rupees ($3.7 million). During the robbery, 4 people were injured, including 2 security guards.
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
                
                {/* Investigation section */}
                <h2 id="investigation" className="text-2xl font-normal border-b border-wiki-border pb-2 mb-4 mt-8">
                  Investigation
                  <span className="text-sm ml-2">
                    <a href="#" className="text-wiki-blue hover:underline">[edit]</a>
                  </span>
                </h2>
                
                <p>
                  During the investigation, authorities discovered that <strong>Miss Adil Danya's</strong> bank account was compromised and used by two students from{" "}
                  <a href="#" className="text-wiki-blue hover:underline">Orchid School</a>: <strong>Farzam Hassan</strong> and an <strong>anonymous user</strong>. The investigation also revealed that the bank's admin password had been leaked, which facilitated the unauthorized access to the banking system. Most critically, these two users provided CCTV footage to the robbers, which enabled them to plan and execute the heist.
                  <sup className="text-wiki-blue">
                    <a href="#cite_note-3" className="hover:underline">[3]</a>
                  </sup>
                </p>
                
                <p>
                  The security breach resulted in 4 casualties during the robbery, with 2 security guards among the injured victims. The CCTV footage provided by the students allowed the robbers to identify security blind spots and guard positions, making the attack more coordinated and dangerous.
                  <sup className="text-wiki-blue">
                    <a href="#cite_note-4" className="hover:underline">[4]</a>
                  </sup>
                </p>
              </div>
              
              {/* References section */}
              <div className="mt-8">
                <h2 id="references" className="text-2xl font-normal border-b border-wiki-border pb-2 mb-4">
                  References
                  <span className="text-sm ml-2">
                    <a href="#" className="text-wiki-blue hover:underline">[edit]</a>
                  </span>
                </h2>
                
                {/* Banks portal box */}
                <div className="bg-wiki-light-gray border border-wiki-border p-4 mb-6 w-72">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🏦</span>
                    <a href="#" className="text-wiki-blue hover:underline font-bold text-lg">Banks portal</a>
                  </div>
                </div>
                
                <ol className="space-y-3 text-sm">
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
                  <li>
                    <span className="font-bold">
                      <a href="#cite_ref-3" className="text-wiki-blue hover:underline">^</a>
                    </span>{" "}
                    Security Report (29 August 2025).{" "}
                    <a href="#" className="text-wiki-blue hover:underline">
                      "Bank security breach reveals student involvement and admin password leak"
                    </a>
                    . <em>Dawn News</em>. Retrieved 30 August 2025.
                  </li>
                  <li>
                    <span className="font-bold">
                      <a href="#cite_ref-4" className="text-wiki-blue hover:underline">^</a>
                    </span>{" "}
                    Police Investigation Report (30 August 2025).{" "}
                    <a href="#" className="text-wiki-blue hover:underline">
                      "Students provided CCTV footage to bank robbers, 4 injured including 2 guards"
                    </a>
                    . <em>The Express Tribune</em>. Retrieved 31 August 2025.
                  </li>
                </ol>
              </div>
              
              {/* Categories */}
              <div className="mt-8 pt-4 border-t border-wiki-border">
                <div className="bg-wiki-light-gray border border-wiki-border p-4">
                  <span className="font-bold text-sm">Categories:</span>
                  <div className="flex flex-wrap gap-1 mt-2 text-sm">
                    <a href="#" className="text-wiki-blue hover:underline text-sm">2025 crimes in Pakistan</a>
                    <span className="text-sm">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-sm">Bank robberies</a>
                    <span className="text-sm">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-sm">History of Karachi (1947–present)</a>
                    <span className="text-sm">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-sm">Crime in Karachi</a>
                    <span className="text-sm">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-sm">2020s in Karachi</a>
                    <span className="text-sm">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-sm">Robberies in Pakistan</a>
                    <span className="text-sm">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-sm">August 2025 in Pakistan</a>
                    <span className="text-sm">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-sm">Orchid School</a>
                    <span className="text-sm">|</span>
                    <a href="#" className="text-wiki-blue hover:underline text-sm">Cybercrime in Pakistan</a>
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
