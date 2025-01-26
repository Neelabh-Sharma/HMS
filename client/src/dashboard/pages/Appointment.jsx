import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Loader from "../component/Loader";
function Appointment() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <React.Fragment>
       <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
                <Sidebar/>
            </div>
            <div className="col-span-3">
                          {isLoading ? (
                      <>
                        <Loader />
                      </>
                    ) : (
                      <>
                        appointment
                      </>
                    )}
            </div>
        </div>
      
      
    </React.Fragment>
  );
}

export default Appointment;
