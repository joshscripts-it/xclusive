import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function Page() {
  return (
    <div className="container mx-auto mb-4 w-full h-auto p-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs separator={"/"}>
        <BreadcrumbItem>/Contact</BreadcrumbItem>
        <BreadcrumbItem>/</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex items-start  justify-between space-x-4 lg:space-x-6">
        <div className="flex flex-col w-5/12 md:w-4/12 lg:w-3/12 items-start justify-center shadow-md p-6 space-y-16 divide-y divide-gray-400">
          <div className="flex-1 flex flex-col space-y-4  w-full">
            <div className="flex items-center space-x-6">
              <div className="p-2 rounded-full bg-red-500">
                <IoCallOutline className="w-4 h-4 lg:w-6 lg:h-6 text-gray-50 font-bold" />
              </div>
              <h2 className="text-gray-700 text-sm lg:text-base font-medium text-ellipsis overflow-hidden">
                Call To Us
              </h2>
            </div>
            <span className="text-xs md:text-sm text-gray-600 text-ellipsis overflow-hidden">
              We are available 24/7, 7 days a week.
            </span>
            <span className="text-xs md:text-sm text-gray-600 text-ellipsis overflow-hidden">
              Phone: +8801611112222
            </span>
          </div>

          <div className="flex-1 flex pt-8 flex-col space-y-4  w-full">
            <div className="flex items-center space-x-6">
              <div className="p-2 rounded-full bg-red-500">
                <IoMailOutline className="w-4 h-4 lg:w-6 lg:h-6 text-gray-50 font-bold" />
              </div>
              <h2 className="text-gray-700 text-sm lg:text-base font-medium text-ellipsis overflow-hidden">
                Write To Us
              </h2>
            </div>
            <span className="text-xs md:text-sm text-gray-600 text-clip overflow-hidden">
              Fill out our form and we will contact you within 24 hours.
            </span>
            <span className="text-xs md:text-sm text-gray-600 text-ellipsis overflow-hidden">
              Emails: customer@exclusive.com
            </span>

            <span className="text-xs md:text-sm text-gray-600 text-ellipsis overflow-hidden">
              Emails: support@exclusive.com
            </span>
          </div>
        </div>

        <div className="flex-1  p-6 space-y-16 shadow-sm">
          <form className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <label className="block flex-1">
                <span className="block text-xs md:text-sm text-slate-500">
                  Name<span className="text-red-400">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full p-2 md:p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
              <label className="block flex-1">
                <span className="block text-xs md:text-sm text-slate-500">
                  Email<span className="text-red-400">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full p-2 md:p-3 bg-white border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block flex-1">
                <span className="block text-xs md:text-sm text-slate-500">
                  Phone<span className="text-red-400">*</span>
                </span>
                <input
                  type="text"
                  name="phone"
                  className="mt-1 block w-full p-2 md:p-3 bg-white border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
            </div>

            <textarea
              rows={40}
              name="message"
              placeholder="Your Message"
              className="max-h-72 block w-full p-3 bg-white border border-slate-300 rounded-md text-xs md:text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <button className="self-end p-2 flex items-center justify-center text-sm md:text-base font-medium text-gray-50 bg-red-500 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
