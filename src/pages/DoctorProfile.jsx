import React, { useState } from "react";
import "../styles/DoctorProfile.css";

const DoctorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [careerInfo, setCareerInfo] = useState({
    experience: "10 Years",
    education: "MD, XYZ University",
    biography:
      "A dedicated cardiologist with a passion for improving patient outcomes.",
    certifications: "Board Certified in Cardiology, ACLS Certified",
    languages: "English, Spanish",
    awards: "Best Cardiologist Award 2022",
    researchInterests: "Heart Diseases, Preventative Cardiology",
    professionalMemberships:
      "American College of Cardiology, European Society of Cardiology",
    workHistory:
      "Cardiologist at ABC Hospital (2015-Present), Resident at DEF Hospital (2012-2015)",
    volunteerExperience: "Health Camp Volunteer, Local Community Clinic",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setCareerInfo({
      ...careerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can also add functionality to save the data if needed
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div
          src="doctor_photo.jpg"
          alt="Doctor"
          className="profile-photo"
        ></div>
        <div className="profile-header-detail">
          <h2>Dr. John Doe</h2>
          <p style={{ fontSize: "18px", color: "#005679" }}>
            Specialty: Cardiology
          </p>
          <p style={{ fontSize: "16px", color: "#555" }}>Age: 40</p>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Email: johndoe@example.com
          </p>
          <p style={{ fontSize: "16px", color: "#555" }}>Phone: +1234567890</p>
        </div>
      </div>
      <table className="profile-details">
        <thead>
          <tr>
            <th>Detail</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Experience</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="experience"
                  className="edit-input"
                  value={careerInfo.experience}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.experience
              )}
            </td>
          </tr>
          <tr>
            <td>Education</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="education"
                  className="edit-input"
                  value={careerInfo.education}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.education
              )}
            </td>
          </tr>
          <tr>
            <td>Biography</td>
            <td>
              {isEditing ? (
                <textarea
                  name="biography"
                  className="edit-input"
                  value={careerInfo.biography}
                  onChange={handleChange}
                  style={{ width: "100%", height: "60px" }}
                />
              ) : (
                careerInfo.biography
              )}
            </td>
          </tr>
          <tr>
            <td>Certifications</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="certifications"
                  className="edit-input"
                  value={careerInfo.certifications}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.certifications
              )}
            </td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="languages"
                  className="edit-input"
                  value={careerInfo.languages}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.languages
              )}
            </td>
          </tr>
          <tr>
            <td>Awards</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="awards"
                  className="edit-input"
                  value={careerInfo.awards}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.awards
              )}
            </td>
          </tr>
          <tr>
            <td>Research Interests</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  className="edit-input"
                  name="researchInterests"
                  value={careerInfo.researchInterests}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.researchInterests
              )}
            </td>
          </tr>
          <tr>
            <td>Professional Memberships</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  className="edit-input"
                  name="professionalMemberships"
                  value={careerInfo.professionalMemberships}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.professionalMemberships
              )}
            </td>
          </tr>
          <tr>
            <td>Work History</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="workHistory"
                  className="edit-input"
                  value={careerInfo.workHistory}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.workHistory
              )}
            </td>
          </tr>
          <tr>
            <td>Volunteer Experience</td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  className="edit-input"
                  name="volunteerExperience"
                  value={careerInfo.volunteerExperience}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              ) : (
                careerInfo.volunteerExperience
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button-container">
        <button
          className="edit-button"
          onClick={isEditing ? handleSave : handleEditToggle}
        >
          {isEditing ? "Save Changes" : "Edit Career Info"}
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
