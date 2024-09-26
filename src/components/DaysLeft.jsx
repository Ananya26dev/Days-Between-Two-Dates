import React, { useState } from "react";

const DaysLeft = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [difference, setDifference] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fromDate && toDate) {
      const differenceInTime = new Date(toDate) - new Date(fromDate);
      const differenceInDays = Math.ceil(
        differenceInTime / (1000 * 60 * 60 * 24)
      );
      setDifference(differenceInDays);
    }
  };
  return (
    <>
      <div className="container w-50 vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-4 text-center">Days Between Two Dates</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="mb-2">
                <label htmlFor="fromDate" className="form-group mb-2">
                  From Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fromDate"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-2">
                <label htmlFor="toDate" className="form-group mb-2">
                  To Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="toDate"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-sm my-2">
            Calculate Difference
          </button>
          {difference !== null && <p>{difference} days are left</p>}
        </form>
      </div>
    </>
  );
};

export default DaysLeft;
