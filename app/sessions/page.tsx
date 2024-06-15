"use client"
import CalendarDayView from "@/components/CalendarDayView"
import PageHeading from "@/components/PageHeading"
import SessionPhotos from "@/components/SessionPhotos"
export default function Page() {
  return (
    <main>
      
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 ">
      <SessionPhotos />
      </div>
    </main>
  );
} 