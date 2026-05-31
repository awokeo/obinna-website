import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import ContactIntro from "@/components/contact/ContactIntro";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactLinks from "@/components/contact/ContactLinks";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-12 gap-12">

          <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Sidebar />
          </aside>

          <div className="col-span-12 lg:col-span-8 xl:col-span-9">

            <ContactIntro />

            <ContactDetails />

            <ContactLinks />

          </div>

        </div>

      </main>
    </>
  );
}