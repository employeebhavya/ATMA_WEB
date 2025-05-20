"use client";
import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Link from "next/link";
import Styles from "../register/RegsiterForm.module.css";

export default function DonationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    donationType: "general",
    amount: "",
    isRecurring: false,
    recurringFrequency: "monthly",
    dedication: "",
    agreeTerms: false,
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const router = useRouter();

  const suggestedAmounts = [50, 100, 250, 500, 1000];

  // Validate form
  useEffect(() => {
    const isValid =
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.amount &&
      !isNaN(parseFloat(formData.amount)) &&
      parseFloat(formData.amount) > 0 &&
      formData.agreeTerms;

    setFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSuggestedAmount = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount: amount.toString(),
    }));
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: formData.amount,
            currency_code: "USD",
            breakdown: {
              item_total: {
                value: formData.amount,
                currency_code: "USD",
              },
            },
          },
          items: [
            {
              name: `ATMA ${formData.donationType} Donation`,
              description: formData.dedication || "General Donation",
              unit_amount: {
                value: formData.amount,
                currency_code: "USD",
              },
              quantity: "1",
              category: "DONATION",
            },
          ],
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();

      // Store donation in database and send emails
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          transactionId: details.id,
          paymentStatus: "completed",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process donation");
      }

      setPaymentSuccess(true);
    } catch (error) {
      console.error("Payment processing failed:", error);
      alert("There was an error processing your donation. Please try again.");
      setShowPaymentOptions(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="max-w-md min-h-screen mx-auto mt-10 p-6 bg-green-50 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Donation Successful!
        </h2>
        <p className="text-gray-700 mb-4">
          Thank you for your generous donation of ${formData.amount} to ATMA. A
          receipt has been sent to your email.
        </p>
        <p className="text-gray-600">
          Your support helps us provide healthcare to underserved communities.
        </p>
        <div className="mt-6">
          <Button
            text="Return to ATMA Website"
            onClick={() => router.push("/")}
            bgColor="var(--secondary)"
            color="var(--color-white)"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`-mt-10 md:-mt-28`}>
      <div className="container">
        <form className=" bg-white shadow-lg relative z-1">
          {/* Donor Information Section */}
          <div className="space-y-4 p-6 2xl:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  First Name<span className="text-[#dc1d46]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                  required
                />
              </div>

              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Last Name<span className="text-[#dc1d46]">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Email<span className="text-[#dc1d46]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                  required
                />
              </div>

              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                />
              </div>
            </div>

            <div>
              <label
                className={`${Styles.label} block text-sm font-medium text-gray-700`}
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                />
              </div>

              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                />
              </div>

              <div>
                <label
                  className={`${Styles.label} block text-sm font-medium text-gray-700`}
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                />
              </div>
            </div>
          </div>

          {/* Donation Details Section */}
          <div className="space-y-4 p-6 2xl:p-10">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Donation Details
            </h3>

            <div>
              <label
                className={`${Styles.label} block text-sm font-medium text-gray-700 mb-2`}
              >
                Donation Purpose<span className="text-[#dc1d46]">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    id="donation-general"
                    value="general"
                    checked={formData.donationType === "general"}
                    onChange={handleChange}
                    className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                  />
                  <label
                    htmlFor="donation-general"
                    className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                  >
                    General Fund
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    id="donation-medicalCamp"
                    value="medicalCamp"
                    checked={formData.donationType === "medicalCamp"}
                    onChange={handleChange}
                    className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                  />
                  <label
                    htmlFor="donation-medicalCamp"
                    className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                  >
                    Medical Camps
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    id="donation-scholarship"
                    value="scholarship"
                    checked={formData.donationType === "scholarship"}
                    onChange={handleChange}
                    className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                  />
                  <label
                    htmlFor="donation-scholarship"
                    className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                  >
                    Scholarships
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    id="donation-disasterRelief"
                    value="disasterRelief"
                    checked={formData.donationType === "disasterRelief"}
                    onChange={handleChange}
                    className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                  />
                  <label
                    htmlFor="donation-disasterRelief"
                    className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                  >
                    Disaster Relief
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label
                className={`${Styles.label} block text-sm font-medium text-gray-700 mb-2`}
              >
                Donation Amount (USD)<span className="text-[#dc1d46]">*</span>
              </label>

              <div className="flex flex-wrap gap-2 mb-4">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleSuggestedAmount(amount)}
                    className={`px-4 py-2 rounded-md border ${
                      formData.amount === amount.toString()
                        ? "bg-[#dc1d46] !text-white border-[#dc1d46]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className={`${Styles.input} block w-full pl-16 pr-12 py-2 border-gray-300 rounded-md`}
                  placeholder="0.00"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <span className="text-gray-500 sm:text-sm pr-3">USD</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isRecurring"
                  id="isRecurring"
                  checked={formData.isRecurring}
                  onChange={handleChange}
                  className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                />
                <label
                  htmlFor="isRecurring"
                  className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                >
                  Make this a recurring donation
                </label>
              </div>

              {formData.isRecurring && (
                <div className="mt-2 ml-6">
                  <label
                    className={`${Styles.label} block text-sm font-medium text-gray-700 mb-1`}
                  >
                    Frequency
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="recurringFrequency"
                        id="frequency-monthly"
                        value="monthly"
                        checked={formData.recurringFrequency === "monthly"}
                        onChange={handleChange}
                        className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                      />
                      <label
                        htmlFor="frequency-monthly"
                        className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                      >
                        Monthly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="recurringFrequency"
                        id="frequency-quarterly"
                        value="quarterly"
                        checked={formData.recurringFrequency === "quarterly"}
                        onChange={handleChange}
                        className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                      />
                      <label
                        htmlFor="frequency-quarterly"
                        className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                      >
                        Quarterly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="recurringFrequency"
                        id="frequency-yearly"
                        value="yearly"
                        checked={formData.recurringFrequency === "yearly"}
                        onChange={handleChange}
                        className={`${Styles.circle} h-4 w-4 text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300`}
                      />
                      <label
                        htmlFor="frequency-yearly"
                        className={`${Styles.label} ml-2 block text-sm text-gray-700`}
                      >
                        Yearly
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <label
                className={`${Styles.label} block text-sm font-medium text-gray-700`}
              >
                Dedication (Optional)
              </label>
              <textarea
                name="dedication"
                value={formData.dedication}
                onChange={handleChange}
                rows={3}
                className={`${Styles.input} mt-1 block w-full rounded-md border-gray-300 shadow-sm border`}
                placeholder="In honor/memory of someone, or any special instructions"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="p-6 2xl:p-10">
            <div className="flex items-start">
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className={`${Styles.circle} text-[#dc1d46] focus:ring-[#dc1d46] border-gray-300 rounded`}
                  required
                />
              </div>
              <label
                htmlFor="agreeTerms"
                className={`${Styles.label} ml-3 block text-sm text-gray-700`}
              >
                I understand that my donation to the American Tamil Medical
                Association (ATMA) is tax-deductible to the extent allowed by
                law. ATMA is a 501(c)(3) nonprofit organization (Tax ID: [INSERT
                TAX ID]). No goods or services were provided in exchange for
                this contribution. I authorize ATMA to use my contact
                information to send updates about their work (I may unsubscribe
                at any time).
              </label>
            </div>
          </div>

          {/* Payment Section */}
          <div className="p-6 2xl:p-10 bg-white border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Payment
            </h3>
            <p className="text-lg font-medium mb-4">
              Donation Amount: ${formData.amount || "0.00"}
            </p>

            {!showPaymentOptions ? (
              <div className="text-left">
                <button
                  type="button"
                  onClick={() => {
                    if (!formValid) {
                      alert(
                        "Please fill all required fields before proceeding to payment"
                      );
                      return;
                    }
                    setShowPaymentOptions(true);
                  }}
                  className="px-6 py-3 bg-[#dc1d46] !text-white hover:bg-[#f6f5f1] hover:!text-black"
                >
                  Proceed to Payment
                </button>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <PayPalScriptProvider
                  options={{
                    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                    currency: "USD",
                  }}
                >
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={() => setShowPaymentOptions(false)}
                    onCancel={() => setShowPaymentOptions(false)}
                  />
                </PayPalScriptProvider>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
