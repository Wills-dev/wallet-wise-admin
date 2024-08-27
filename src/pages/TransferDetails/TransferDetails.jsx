import { Link } from "react-router-dom";
import { useRef } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const TransferDetails = () => {
  const pageRef = useRef();

  const handleDownloadImage = () => {
    html2canvas(pageRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "transaction-details.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const handleDownloadPDF = () => {
    html2canvas(pageRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("transaction-details.pdf");
    });
  };
  const transactionDetails = {
    user: {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1234567890",
      address: "1234 Main St, Springfield",
    },
    recipient: {
      name: "Jane Smith",
      email: "janesmith@example.com",
    },
    transaction: {
      id: "1234567890",
      date: "August 27, 2024",
      amount: 500.0,
      method: "Transfer",
      paymentType: "Local Transfer",
      status: "completed",
    },
  };

  return (
    <DashboardLayout>
      <div className="padding-x py-24  dark:text-white" ref={pageRef}>
        <div className="p-4 bg-white dark:bg-secondary-dark-bg shadow-lg rounded-lg">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Transaction Details
            </h1>
            <span
              className={`mt-2 text-center flex justify-center items-center h-8 px-2.5 py-0.5 rounded text-sm font-medium w-fit ${
                transactionDetails.transaction.status === "completed"
                  ? "bg-green-100 text-green-500"
                  : transactionDetails.transaction.status === "pending"
                  ? "bg-yellow-100 text-yellow-500"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {transactionDetails.transaction.status}
            </span>
          </div>

          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              User Details
            </h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Name:</span>
                  <Link
                    to={`/manage-user/user-info/${transactionDetails.user.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {transactionDetails.user.name}
                  </Link>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  {transactionDetails.user.email}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span>{" "}
                  {transactionDetails.user.phone}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Address:</span>{" "}
                  {transactionDetails.user.address}
                </p>
              </div>
            </div>
          </div>

          {/* Recipient Details */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Recipient Details
            </h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Name:</span>{" "}
                  {transactionDetails.recipient.name}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  {transactionDetails.recipient.email}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Account details:</span>{" "}
                  {transactionDetails.recipient.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Transaction Details
            </h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Transaction ID:</span>{" "}
                  {transactionDetails.transaction.id}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Date:</span>{" "}
                  {transactionDetails.transaction.date}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-medium">Amount:</span> $
                  {transactionDetails.transaction.amount}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Payment Method:</span>{" "}
                  {transactionDetails.transaction.method}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Payment Type:</span>{" "}
                  {transactionDetails.transaction.paymentType}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              className="bg-gray-200 text-gray-800 px-4 text-center flex justify-center items-center h-11 rounded-lg hover:bg-gray-300"
              onClick={handleDownloadImage}
            >
              Download as Image
            </button>
            <button
              className="bg-blue-600 text-white px-4 text-center flex justify-center items-center h-11 rounded-lg hover:bg-blue-700"
              onClick={handleDownloadPDF}
            >
              Download as PDF
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransferDetails;
