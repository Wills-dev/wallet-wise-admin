import { useParams } from "react-router-dom";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const KycInfo = () => {
  const { kycId } = useParams();

  const kycDetails = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    status: "Pending",
    submissionDate: "2024-08-15",
    verificationDate: null,
    address: "123 Main St, Anytown, USA",
    dateOfBirth: "1990-05-20",
    idType: "Passport",
    idNumber: "A12345678",
    idIssuedDate: "2019-01-01",
    idExpiryDate: "2029-01-01",
    nationality: "American",
    kycDocuments: [
      { name: "Passport", url: "/path/to/passport.pdf" },
      { name: "Utility Bill", url: "/path/to/utility-bill.pdf" },
    ],
  };
  return (
    <DashboardLayout>
      <div className="padding-x py-24 flex flex-col gap-6 dark:text-white">
        <div className=" sidebar">
          <div className="min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                KYC Details for {kycDetails.name}
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner flex-1">
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p>
                    <strong>Name:</strong> {kycDetails.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {kycDetails.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {kycDetails.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {kycDetails.address}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {kycDetails.dateOfBirth}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner flex-1">
                  <h4 className="font-semibold mb-2">Identification</h4>
                  <p>
                    <strong>ID Type:</strong> {kycDetails.idType}
                  </p>
                  <p>
                    <strong>ID Number:</strong> {kycDetails.idNumber}
                  </p>
                  <p>
                    <strong>Issued Date:</strong> {kycDetails.idIssuedDate}
                  </p>
                  <p>
                    <strong>Expiry Date:</strong> {kycDetails.idExpiryDate}
                  </p>
                  <p>
                    <strong>Nationality:</strong> {kycDetails.nationality}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">KYC Status</h4>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      kycDetails.status === "Pending"
                        ? "text-yellow-500"
                        : kycDetails.status === "Approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {kycDetails.status}
                  </span>
                </p>
                <p>
                  <strong>Submission Date:</strong> {kycDetails.submissionDate}
                </p>
                <p>
                  <strong>Verification Date:</strong>{" "}
                  {kycDetails.verificationDate || "N/A"}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">KYC Documents</h4>
                <ul className="list-disc pl-5">
                  {kycDetails.kycDocuments.map((doc, index) => (
                    <li key={index}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {doc.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KycInfo;
