import * as React from "react";

const PaymentInfoNew = () => {
  return (
    <div className="flex-grow flex flex-row">
      <div className="flex-grow flex flex-col items-center justify-center py-10 min-h-full">
        <h2 className="text-2xl font-semibold mb-4">Membership and Fees</h2>
        <div className="overflow-x-auto max-md:px-2 rounded-2xl">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th rowSpan={2} className="px-4 py-2 border border-gray-300">
                  Membership Type
                </th>
                <th colSpan={2} className="bg-gray-200 text-gray-700 px-4 py-2 border border-gray-300">
                  Playing Fee
                </th>
              </tr>
              <tr className="bg-gray-200 text-gray-700">
                <th colSpan={1} className="px-4 py-2 border border-gray-300">
                  Daily
                  <br />
                  (per day per individual or additional family member)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Single</td>
                <td className="px-4 py-2 border border-gray-300">$3.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Senior <span className="italic">(65 years or above)</span>
                </td>
                <td className="px-4 py-2 border border-gray-300">$2.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Student <span className="italic">(15 - 22 years)</span>
                </td>
                <td className="px-4 py-2 border border-gray-300">$2.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Non-Member</td>
                <td className="px-4 py-2 border border-gray-300">$5.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <p className="text-blue-600 mt-4">
          Payment Mode accepted: Electronic Zelle payment made to{" "}
          <span className="font-semibold">
            "tres@greenvillebadmintonclub.com"
          </span>
        </p> */}
      </div>
    </div>
  );
};

export default PaymentInfoNew;
