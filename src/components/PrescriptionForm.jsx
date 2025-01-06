import React, { useState } from "react";
import "./PrescriptionForm.css";
import { useNavigate } from "react-router-dom";

const PrescriptionForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    patientAllergies: "",
    medications: [],
    specialInstructions: "",
    duration: "",
    refills: "",
  });

  const medicationTypes = [
    "Tablets",
    "Capsules",
    "Injections",
    "Liquids",
    "Topical Applications",
    "Suppositories",
  ];

  const medicationData = {
    Tablets: ["Paracetamol", "Ibuprofen", "Aspirin"],
    Capsules: ["Amoxicillin", "Vitamin D", "Omega 3"],
    Injections: ["Insulin", "Morphine", "B12"],
    Liquids: ["Cough Syrup", "Antacid", "Liquid Pain Reliever"],
    "Topical Applications": [
      "Hydrocortisone Cream",
      "Bacitracin",
      "Antifungal Cream",
    ],
    Suppositories: ["Acetaminophen", "Glycerin", "Bisacodyl"],
  };

  const dosages = {
    Tablets: ["500mg", "250mg", "1000mg"],
    Capsules: ["100mg", "200mg", "400mg"],
    Injections: ["10ml", "5ml"],
    Liquids: ["15ml", "30ml"],
    "Topical Applications": ["1g", "5g"],
    Suppositories: ["100mg", "200mg"],
  };

  const frequencies = [
    { label: "Once Daily", value: "once-daily" },
    { label: "Twice Daily", value: "twice-daily" },
    { label: "Three Times Daily", value: "three-times-daily" },
    { label: "Before Meals", value: "before-meals" },
    { label: "After Meals", value: "after-meals" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addMedication = () => {
    setFormData((prevData) => ({
      ...prevData,
      medications: [
        ...prevData.medications,
        { type: "", name: "", dosage: "", frequency: "", beforeEating: true },
      ],
    }));
  };

  const handleMedicationChange = (index, e) => {
    const { name, value } = e.target;
    const newMedications = [...formData.medications];
    newMedications[index][name] = value;
    setFormData((prevData) => ({ ...prevData, medications: newMedications }));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can send the data to the backend
  };

  const navigate = useNavigate();

  const handleSubmitPrescription = () => {
    navigate("/dashboard");
  };

  return (
    <form className="prescription-form" onSubmit={handleSubmit}>
      <h2>Prescription Form</h2>

      {step === 1 && (
        <div className="step">
          <h3>Patient Information</h3>
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="patientAge"
            placeholder="Patient Age"
            value={formData.patientAge}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="patientAllergies"
            placeholder="Patient Allergies"
            value={formData.patientAllergies}
            onChange={handleInputChange}
          />
        </div>
      )}

      {step === 2 && (
        <div className="step">
          <h3>Medications</h3>
          {formData.medications.map((med, index) => (
            <div key={index} className="medication-form">
              <select
                name="type"
                value={med.type}
                onChange={(e) => handleMedicationChange(index, e)}
                required
              >
                <option value="">Select Type of Medication</option>
                {medicationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {med.type && (
                <>
                  <select
                    name="name"
                    value={med.name}
                    onChange={(e) => handleMedicationChange(index, e)}
                    required
                  >
                    <option value="">Select Medication</option>
                    {medicationData[med.type].map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <select
                    name="dosage"
                    value={med.dosage}
                    onChange={(e) => handleMedicationChange(index, e)}
                    required
                  >
                    <option value="">Select Dosage</option>
                    {dosages[med.type].map((dosage) => (
                      <option key={dosage} value={dosage}>
                        {dosage}
                      </option>
                    ))}
                  </select>
                  <select
                    name="frequency"
                    value={med.frequency}
                    onChange={(e) => handleMedicationChange(index, e)}
                    required
                  >
                    <option value="">Select Frequency</option>
                    {frequencies.map((freq) => (
                      <option key={freq.value} value={freq.value}>
                        {freq.label}
                      </option>
                    ))}
                  </select>
                  <div className="table-when">
                    <div className="table-when-check">
                      <input
                        type="checkbox"
                        checked={med.beforeEating}
                        onChange={() =>
                          handleMedicationChange(index, {
                            target: {
                              name: "beforeEating",
                              value: !med.beforeEating,
                            },
                          })
                        }
                      />
                    </div>
                    <p>Take {med.beforeEating ? "after" : "before"} eating</p>
                  </div>
                </>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-medication-button"
            onClick={addMedication}
          >
            Add Another Medication
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <select
            className="select-duration"
            name="duration"
            required
            value={formData.duration}
            onChange={handleInputChange}
          >
            <option value="">Select Duration</option>
            <option value="1 Day">1 Day</option>
            <option value="2 Days">2 Days</option>
            <option value="3 Days">3 Days</option>
            <option value="1 Week">1 Week</option>
            <option value="2 Weeks">2 Weeks</option>
            <option value="1 Month">1 Month</option>
            <option value="2 Months">2 Months</option>
          </select>
        </div>
      )}

      <div className="buttons">
        {step > 1 && (
          <button type="button" onClick={handlePreviousStep}>
            Back
          </button>
        )}
        {step < 3 ? (
          <button type="button" onClick={handleNextStep}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmitPrescription} type="submit">
            Submit Prescription
          </button>
        )}
      </div>
    </form>
  );
};

export default PrescriptionForm;
