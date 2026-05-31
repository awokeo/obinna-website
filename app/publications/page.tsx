import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import ScholarProfile from "@/components/publications/ScholarProfile";
import BookChapters from "@/components/publications/BookChapters";
import ConferencePapers from "@/components/publications/ConferencePapers";
import JournalArticles from "@/components/publications/JournalArticles";

export default function PublicationsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-12 gap-12">

          <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Sidebar />
          </aside>

          <div className="col-span-12 lg:col-span-8 xl:col-span-9">

            <ScholarProfile />

            <BookChapters />

            <ConferencePapers />

            <JournalArticles />

          </div>

        </div>

      </main>
    </>
  );
}