import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import ContactInformationForm from "../common/ContactInformationForm";
import OrderHistory from "../common/OrderHistory";

const ChangePasswordForm = () => (
  <div>
    <h2 className="text-lg font-medium mb-4">Change Password</h2>
    {/* Add form fields for changing password */}
  </div>
);

const AddressesForm = () => (
  <div>
    <h2 className="text-lg font-medium mb-4">Addresses</h2>
    {/* Add form fields for addresses */}
  </div>
);

const OrdersTable = () => (
  <div>
    <h2 className="text-lg font-medium mb-4">Orders</h2>
  </div>
);

const WishlistTable = () => (
  <div>
    <h2 className="text-lg font-medium mb-4">Wishlist</h2>
  </div>
);

const AccountPage = ({ cartItems, updateQuantity }) => {
  const [activeSection, setActiveSection] = useState("Contact information");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="mt-16">
      <div className="flex flex-col lg:flex-row items-start justify-center h-full min-h-screen w-full p-4 lg:p-6">
        <div className="lg:flex w-full max-w-4xl">
          <div className="lg:w-1/3 mb-4 lg:mb-0 mr-0 lg:mr-4 border p-4 rounded bg-white shadow w-full">
            <div className="space-y-2">
              {[
                "Contact information",
                "Change password",
                "Addresses",
                "Orders",
                "Wishlist",
              ].map((section) => (
                <div
                  key={section}
                  className={`cursor-pointer hover:bg-gray-100 rounded-md p-3 flex justify-between items-center ${
                    activeSection === section
                      ? "bg-gray-100 font-medium text-primary-color"
                      : "font-normal"
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  <span>{section}</span>
                  {section === "Orders" || section === "Wishlist" ? (
                    <ChevronRight className="text-gray-500" />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 p-4 w-full">
            {activeSection === "Contact information" && (
              <ContactInformationForm />
            )}
            {activeSection === "Change password" && <ChangePasswordForm />}
            {activeSection === "Addresses" && <AddressesForm />}
            {activeSection === "Orders" && (
              <OrderHistory cartItems={cartItems} updateQuantity={updateQuantity} />
            )}
            {activeSection === "Wishlist" && <WishlistTable />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
