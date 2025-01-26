import Sidebar from "../component/Sidebar";
import Loader from "../component/Loader";
import { useDispatch, useSelector } from "react-redux";
// import { getUserByEmail } from "../../store/apiSlice";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
function Dashboard() {
  // const location = useLocation();
  // const { state } = location; // Retrieve the state object
  // const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.api);
  const [data, setData] = useState({
    "name" : "Neelabh sharma",
    "email" : "",
    "password":"",
    "bloodGroup": "NA",
    "phoneNo": "",
    "medicalHistory": "Diabetic",
    "appointment": [],
    "gender": "Other",
    "address": "123 Main Street, Springfield",
    "dateOfBirth": "1990-07-15T00:00:00.000Z",    
  });
  // const handleFetchUser = async () => {
    
  //     try {
  //       const response = await dispatch(getUserByEmail('neelabhsharma123@gmail.com')).unwrap(); // Unwrap the resolved value
  //       // setData(response); // Set the user data
  //       console.log(response)
  //     } catch (err) {
  //       console.error('Failed to fetch user:', err);
  //       // setData(null); // Clear data in case of an error
  //     }
  // };
  // handleFetchUser();
  return (
    <div className=" bg-gray-100">
      {status === 'loading' ? (
        <>
          <Loader />
          {/* {error && <p>Error: {error}</p>}/ */}
        </>
      ) : (
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-3 place-items-center">
            <div className="py-5">
              <main className="h-full overflow-y-auto">
                <div className="container mx-auto grid">
                  {/* Cards */}
                  <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    {/* Card */}
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                      <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                         Name
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          {data.name}
                        </p>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                      <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Blood Group
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          {data.bloodGroup}
                        </p>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                      <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Age
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          35
                        </p>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                      <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Gender
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                          {data.gender}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          {/* card list */}
          <div className="grid grid-cols-3 gap-4 p-4 place-items-center">
             {
                  data.appointment.map((item) => (
                    <>
                         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     {item.test}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.doctor}
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
                    </>
                  ))
             }
           
            </div>
          {/* end */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
