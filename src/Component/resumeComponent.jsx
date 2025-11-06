import React, { Fragment, useEffect, useState } from "react";
import "./resumeComponent.scss";
import {
  Button,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
  Table,
  FormFeedback,
  FormGroup,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addToast } from "../Redux/Features/toastSlice";
import ToastComponent from "./ToastComponent";
import printResume from "./printResume";

const ResumeComponent = () => {
  const [resumeData, setResumeData] = useState([]);
  const [toggleAddResume, setToggleAddResume] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);
  const [selectedResumes, setSelectedResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteMultipleModal, setDeleteMultipleModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newLanguageInput, setNewLanguageInput] = useState("");
  const [newSkillInput, setNewSkillInput] = useState("");
  const [errors, setErrors] = useState({});
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  const [newExperience, setNewExperience] = useState({
    company: "",
    job_title: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
  });

  const [newSaveResume, setNewSaveResume] = useState({
    photo: null,
    title: "",
    name: "",
    email: "",
    phone: "",
    location: { city: "", state: "", country: "" },
    languages: [],
    skills: [],
    linkedin: "",
    github: "",
    website: "",
    summary: "",
    experience: [],
    projects: [],
  });

  const dispatch = useDispatch();

  const api_url = `https://backend-resume-mghz.onrender.com/resumes`;

  const toogleResume = () => {
    setToggleAddResume(!toggleAddResume);
    if (!toggleAddResume) {
      resetAllFeild();
      setErrors({});
    }
  };

  useEffect(() => {
    FetchResumeData();
  }, []);

  useEffect(() => {
    if (resumeData.length > 0 && !selectedResume) {
      setSelectedResume(resumeData[0]);
    }
  }, [resumeData]);

  useEffect(() => {
    if (resumeData.length > 0) {
      setSelectAll(selectedResumes.length === resumeData.length);
    }
  }, [selectedResumes, resumeData]);

  // ✅ ENHANCED: Better error handling and logging
  const FetchResumeData = async () => {
    setLoading(true);
    try {
      console.log("🌐 Fetching resumes from:", api_url);

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`
        );
      }

      const json = await response.json();
      console.log("✅ Resumes loaded:", json.length);
      setResumeData(json);
    } catch (error) {
      console.error("❌ Error fetching resume data:", error);
      dispatch(
        addToast({
          message: `Failed to load resumes: ${error.message}`,
          type: "error",
        })
      );
      setResumeData([]);
    } finally {
      setLoading(false);
    }
  };

  const resetAllFeild = () => {
    setNewSaveResume({
      photo: "",
      title: "",
      name: "",
      email: "",
      phone: "",
      location: { city: "", state: "", country: "" },
      languages: [],
      skills: [],
      linkedin: "",
      github: "",
      website: "",
      summary: "",
      experience: [],
      projects: [],
    });
    setNewExperience({
      company: "",
      job_title: "",
      start_date: "",
      end_date: "",
      description: "",
    });
    setNewProject({
      name: "",
      description: "",
    });
    setIsEditMode(false);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!newSaveResume.title?.trim()) {
      newErrors.title = "Resume title is required";
    }
    if (!newSaveResume.name?.trim()) {
      newErrors.name = "Name is required";
    }
    if (!newSaveResume.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(newSaveResume.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!newSaveResume.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Experience validation
    newSaveResume.experience.forEach((exp, index) => {
      if (!exp.company?.trim()) {
        newErrors[`experience_${index}_company`] = "Company name is required";
      }
      if (!exp.job_title?.trim()) {
        newErrors[`experience_${index}_job_title`] = "Job title is required";
      }
      if (!exp.start_date?.trim()) {
        newErrors[`experience_${index}_start_date`] = "Start date is required";
      }
    });

    // Project validation
    newSaveResume.projects.forEach((proj, index) => {
      if (!proj.name?.trim()) {
        newErrors[`project_${index}_name`] = "Project name is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showErrorModal = (message) => {
    setErrorMessage(message);
    setErrorModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSaveResume((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleNestedInputChange = (e, fieldName) => {
    const { name, value } = e.target;
    setNewSaveResume((prevState) => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        [name]: value,
      },
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateExperience = (index, field, value) => {
    setNewSaveResume((prev) => {
      const updatedExperience = [...prev.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      };
      return {
        ...prev,
        experience: updatedExperience,
      };
    });
  };

  const handleUpdateProject = (index, field, value) => {
    setNewSaveResume((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects[index] = {
        ...updatedProjects[index],
        [field]: value,
      };
      return {
        ...prev,
        projects: updatedProjects,
      };
    });
  };

  const handleUpdateLanguage = (index, value) => {
    setNewSaveResume((prev) => {
      const updatedLanguages = [...prev.languages];
      updatedLanguages[index] = value;
      return {
        ...prev,
        languages: updatedLanguages,
      };
    });
  };

  const handleUpdateSkill = (index, value) => {
    setNewSaveResume((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = value;
      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  const handleAddExperience = () => {
    if (
      !newExperience.company?.trim() ||
      !newExperience.job_title?.trim() ||
      !newExperience.start_date?.trim()
    ) {
      showErrorModal(
        "Company, Job Title, and Start Date are required for experience"
      );
      return;
    }

    setNewSaveResume((prev) => ({
      ...prev,
      experience: [...prev.experience, { ...newExperience }],
    }));

    setNewExperience({
      company: "",
      job_title: "",
      start_date: "",
      end_date: "",
      description: "",
    });
  };

  const handleRemoveExperience = (index) => {
    setNewSaveResume((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const handleAddProject = () => {
    if (!newProject.name?.trim()) {
      showErrorModal("Project name is required");
      return;
    }

    setNewSaveResume((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...newProject }],
    }));

    setNewProject({
      name: "",
      description: "",
    });
  };

  const handleRemoveProject = (index) => {
    setNewSaveResume((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  // ✅ ENHANCED: Better error handling for API calls
  const handleSaveResume = async () => {
    if (!validateForm()) {
      showErrorModal("Please fill all required fields correctly");
      return;
    }

    try {
      console.log("💾 Saving resume to:", api_url);

      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSaveResume),
      });

      if (response.ok) {
        const savedResume = await response.json();
        console.log("✅ Resume saved successfully:", savedResume._id);
        setResumeData([...resumeData, savedResume]);
        setSelectedResume(savedResume);
        setToggleAddResume(false);
        resetAllFeild();
        dispatch(
          addToast({ message: "Resume added successfully", type: "success" })
        );
      } else {
        const errorText = await response.text();
        let errorMessage = "Failed to save resume";
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status}`;
        }
        console.error("❌ Save error:", errorMessage);
        showErrorModal(errorMessage);
      }
    } catch (error) {
      console.error("❌ Network error saving resume:", error);
      showErrorModal("Network error: Unable to connect to server");
    }
  };

  const toggleEdit = () => {
    if (selectedResume) {
      setNewSaveResume(selectedResume);
      setIsEditMode(true);
      setToggleAddResume(true);
    }
  };

  const handleEdit = async () => {
    if (!validateForm()) {
      showErrorModal("Please fill all required fields correctly");
      return;
    }

    try {
      const response = await fetch(`${api_url}/${selectedResume._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSaveResume),
      });

      if (response.ok) {
        const updatedResume = await response.json();
        setResumeData((prevData) =>
          prevData.map((resume) =>
            resume._id === updatedResume._id ? updatedResume : resume
          )
        );
        setSelectedResume(updatedResume);
        setToggleAddResume(false);
        resetAllFeild();
        dispatch(
          addToast({
            message: "Resume updated successfully",
            type: "success",
          })
        );
      } else {
        const errorText = await response.text();
        let errorMessage = "Failed to update resume";
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status}`;
        }
        showErrorModal(errorMessage);
      }
    } catch (error) {
      console.error("❌ Error updating resume:", error);
      showErrorModal("Network error: Unable to connect to server");
    }
  };

  const SwitchAddEdit = () => {
    if (isEditMode) {
      handleEdit();
    } else {
      handleSaveResume();
    }
  };

  const confirmDeleteResume = (resume) => {
    setSelectedResume(resume);
    setDeleteModal(true);
  };

  const handleDeleteResume = async () => {
    setDeleteModal(false);
    try {
      const response = await fetch(`${api_url}/${selectedResume._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setResumeData(
          resumeData.filter((resume) => resume._id !== selectedResume._id)
        );
        setSelectedResumes(
          selectedResumes.filter((id) => id !== selectedResume._id)
        );
        setSelectedResume(resumeData.length > 1 ? resumeData[0] : null);
        dispatch(
          addToast({ message: "Resume deleted successfully", type: "delete" })
        );
      } else {
        const errorText = await response.text();
        let errorMessage = "Failed to delete resume";
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status}`;
        }
        showErrorModal(errorMessage);
      }
    } catch (error) {
      console.error("❌ Error deleting resume", error);
      showErrorModal("Network error: Unable to connect to server");
    }
  };

  const handleSelectResume = (resumeId) => {
    setSelectedResumes((prev) => {
      if (prev.includes(resumeId)) {
        return prev.filter((id) => id !== resumeId);
      } else {
        return [...prev, resumeId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedResumes([]);
    } else {
      setSelectedResumes(resumeData.map((resume) => resume._id));
    }
    setSelectAll(!selectAll);
  };

  const confirmDeleteMultiple = () => {
    if (selectedResumes.length === 0) {
      showErrorModal("Please select at least one resume to delete");
      return;
    }
    setDeleteMultipleModal(true);
  };

  const handleDeleteMultipleResumes = async () => {
    setDeleteMultipleModal(false);

    try {
      const deletePromises = selectedResumes.map((resumeId) =>
        fetch(`${api_url}/${resumeId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
      );

      const results = await Promise.allSettled(deletePromises);

      const allSuccessful = results.every(
        (result) => result.status === "fulfilled" && result.value.ok
      );

      if (allSuccessful) {
        setResumeData((prev) =>
          prev.filter((resume) => !selectedResumes.includes(resume._id))
        );

        setSelectedResumes([]);

        if (selectedResume && selectedResumes.includes(selectedResume._id)) {
          const remainingResumes = resumeData.filter(
            (resume) => !selectedResumes.includes(resume._id)
          );
          setSelectedResume(
            remainingResumes.length > 0 ? remainingResumes[0] : null
          );
        }

        dispatch(
          addToast({
            message: `${selectedResumes.length} resume(s) deleted successfully`,
            type: "delete",
          })
        );
      } else {
        showErrorModal("Some resumes could not be deleted. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error deleting resumes", error);
      showErrorModal("Network error: Unable to connect to server");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        showErrorModal("Please upload an image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        showErrorModal("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setNewSaveResume((prevState) => ({
          ...prevState,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddLanguage = () => {
    if (newLanguageInput.trim() !== "") {
      setNewSaveResume((prev) => ({
        ...prev,
        languages: [...prev.languages, newLanguageInput.trim()],
      }));
      setNewLanguageInput("");
    }
  };

  const handleRemoveLanguage = (indexToRemove) => {
    setNewSaveResume((prevState) => ({
      ...prevState,
      languages: prevState.languages.filter((_, idx) => idx !== indexToRemove),
    }));
  };

  const handleAddSkill = () => {
    if (newSkillInput.trim() !== "") {
      setNewSaveResume((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkillInput.trim()],
      }));
      setNewSkillInput("");
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setNewSaveResume((prevState) => ({
      ...prevState,
      skills: prevState.skills.filter((_, idx) => idx !== indexToRemove),
    }));
  };

  const handleCopyResume = async () => {
    if (!selectedResume) return;

    const resumeCopy = {
      ...selectedResume,
      _id: undefined,
      title: `${selectedResume.title} (copy)`,
    };

    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resumeCopy),
      });

      if (response.ok) {
        const savedResume = await response.json();
        setResumeData([...resumeData, savedResume]);
        setSelectedResume(savedResume);
        dispatch(
          addToast({ message: "Resume copied successfully", type: "success" })
        );
      } else {
        const errorText = await response.text();
        let errorMessage = "Failed to copy resume";
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status}`;
        }
        showErrorModal(errorMessage);
      }
    } catch (error) {
      console.error("❌ Error copying resume:", error);
      showErrorModal("Network error: Unable to connect to server");
    }
  };

  return (
    <Fragment>
      <ToastComponent />

      <Row className="ResumeHead">
        <Col md={6}>
          <h2>Resume Management</h2>
          {selectedResumes.length > 0 && (
            <div className="selection-info">
              <span className="selected-count">
                {selectedResumes.length} resume(s) selected
              </span>
            </div>
          )}
        </Col>
        <Col md={6} style={{ textAlign: "end" }}>
          {selectedResumes.length > 0 && (
            <Button
              color="danger"
              style={{ margin: "0px 5px" }}
              onClick={confirmDeleteMultiple}
            >
              Delete Selected ({selectedResumes.length})
            </Button>
          )}
          <Button color="primary" onClick={toogleResume}>
            Add Resume
          </Button>
        </Col>
      </Row>

      <div className="loadingCSS">
        {loading ? (
          <div className="text-center py-5">
            <Spinner className="loading" size="lg" color="info" type="grow" />
            <p className="mt-2">Loading resumes from server...</p>
          </div>
        ) : (
          <Row>
            <Col md={4}>
              <Table className="table-sticky">
                <thead>
                  <tr>
                    <th style={{ width: "50px" }}>
                      <FormGroup check>
                        <Input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                        />
                      </FormGroup>
                    </th>
                    <th>Resume List ({resumeData.length})</th>
                  </tr>
                </thead>
                <tbody>
                  {resumeData.map((resume) => (
                    <tr
                      key={resume._id}
                      onClick={() => setSelectedResume(resume)}
                      className={
                        selectedResume?._id === resume._id ? "selectedRow" : ""
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <td
                        style={{ width: "50px" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            checked={selectedResumes.includes(resume._id)}
                            onChange={() => handleSelectResume(resume._id)}
                          />
                        </FormGroup>
                      </td>
                      <td>{resume.title}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>

            <Col md={8}>
              {selectedResume ? (
                <Fragment>
                  <Row className="ResumeDisplayHead">
                    <Col md={6}>
                      <h4>{selectedResume.title}</h4>
                    </Col>
                    <Col md={6} style={{ textAlign: "end" }}>
                      <Button
                        color="primary"
                        style={{ margin: "0px 5px" }}
                        onClick={toggleEdit}
                      >
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        style={{ margin: "0px 5px" }}
                        onClick={() => confirmDeleteResume(selectedResume)}
                      >
                        Delete
                      </Button>
                      <Button
                        color="warning"
                        style={{ margin: "0px 5px" }}
                        onClick={() => printResume(selectedResume)}
                      >
                        Print
                      </Button>
                      <Button color="info" onClick={handleCopyResume}>
                        Copy
                      </Button>
                    </Col>
                  </Row>
                  <Row style={{ borderLeft: "2px solid #c7adad" }}>
                    <Col md={4} className="colLeft">
                      <div className="image-container">
                        <img
                          src={
                            selectedResume.photo ||
                            "https://www.freeiconspng.com/uploads/profile-icon-28.png"
                          }
                          alt={selectedResume.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://www.freeiconspng.com/uploads/profile-icon-28.png";
                          }}
                        />
                      </div>

                      <div className="resumeMiniContainer">
                        <h6>Contact</h6>
                        <span> {selectedResume.email}</span>
                        <br />
                        <span> {selectedResume.phone}</span>
                      </div>
                      <div className="resumeMiniContainer">
                        <h6>Address</h6>
                        {selectedResume.location
                          ? `${selectedResume.location.city}, ${selectedResume.location.state}, ${selectedResume.location.country}`
                          : "Location not available"}
                      </div>
                      <div className="resumeMiniContainer">
                        <h6>Languages:</h6>
                        <ul>
                          {selectedResume.languages?.map((language, index) => (
                            <li key={index}>{language}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="resumeMiniContainer">
                        <h6>Skills</h6>
                        <ul>
                          {selectedResume.skills?.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="resumeMiniContainer">
                        <h6>Links</h6>
                        {selectedResume.linkedin && (
                          <a
                            href={selectedResume.linkedin}
                            className="linkWeb"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </a>
                        )}
                        {selectedResume.github && (
                          <a
                            href={selectedResume.github}
                            className="linkWeb"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        )}
                        {selectedResume.website && (
                          <a
                            href={selectedResume.website}
                            className="linkWeb"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website
                          </a>
                        )}
                      </div>
                    </Col>
                    <Col md={8} className="ColRight">
                      <h1 className="empName">{selectedResume.name} </h1>
                      <h6 className="empTitle">{selectedResume.title}</h6>
                      <div className="resumeMiniContainer">
                        <h5>Summary</h5>
                        <p>{selectedResume.summary || "No summary provided"}</p>
                      </div>

                      <div className="resumeMiniContainer">
                        <h5>Experience</h5>
                        {selectedResume.experience?.length > 0 ? (
                          selectedResume.experience.map((experience, index) => (
                            <div key={index} className="experience-item">
                              <h6>
                                {experience.job_title} at {experience.company}
                              </h6>
                              <span className="date-range">
                                {experience.start_date} to{" "}
                                {experience.end_date || "Present"}
                              </span>
                              <p>{experience.description}</p>
                            </div>
                          ))
                        ) : (
                          <p>No experience added</p>
                        )}
                      </div>
                      <div className="resumeMiniContainer">
                        <h5>Projects</h5>
                        {selectedResume.projects?.length > 0 ? (
                          selectedResume.projects.map((project, index) => (
                            <div key={index} className="project-item">
                              <h6>{project.name}</h6>
                              <p>{project.description}</p>
                            </div>
                          ))
                        ) : (
                          <p>No projects added</p>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Fragment>
              ) : (
                <div className="no-data text-center py-5">
                  <p>Select a resume to view details</p>
                </div>
              )}
            </Col>
          </Row>
        )}
      </div>

      {!loading && resumeData.length === 0 && (
        <div className="noData text-center py-5">
          <h6>
            No resumes found! Click "Add Resume" to create your first resume.
          </h6>
        </div>
      )}

      {/* Add/Edit Resume Form */}
      <div className={`resume-container ${toggleAddResume ? "open" : ""}`}>
        <Row className="ResumeToggleHead">
          <Col md={6}>
            <Label>Resume Title *</Label>
            <Input
              autoComplete="off"
              name="title"
              value={newSaveResume.title}
              onChange={handleInputChange}
              invalid={!!errors.title}
              placeholder="e.g., Senior Developer Resume"
            />
            <FormFeedback>{errors.title}</FormFeedback>
          </Col>
          <Col md={6} style={{ textAlign: "end" }}>
            <span
              onClick={toogleResume}
              style={{ cursor: "pointer", fontSize: "24px" }}
              className="text-muted"
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="colLeft">
            <h6>Profile Image</h6>
            <div className="image-upload-wrapper image-container-add">
              <label htmlFor="photoUpload" className="image-upload-label">
                <div className="profile-image-circle">
                  {newSaveResume.photo ? (
                    <img
                      src={newSaveResume.photo}
                      alt="Profile Preview"
                      className="circular-preview"
                    />
                  ) : (
                    <img
                      src="https://www.freeiconspng.com/uploads/profile-icon-28.png"
                      alt="Default Profile"
                      style={{ width: "190px" }}
                    />
                  )}
                  <div>
                    <i className="fa-solid fa-pen-to-square iconEdit" />
                  </div>
                </div>
              </label>
              <Input
                id="photoUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>

            <div className="resumeMiniContainer">
              <h6>Contact</h6>
              <Label>Email *</Label>
              <Input
                type="email"
                name="email"
                value={newSaveResume.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                invalid={!!errors.email}
              />
              <FormFeedback>{errors.email}</FormFeedback>

              <Label>Phone *</Label>
              <Input
                autoComplete="off"
                name="phone"
                value={newSaveResume.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                invalid={!!errors.phone}
              />
              <FormFeedback>{errors.phone}</FormFeedback>
            </div>

            <div className="resumeMiniContainer">
              <h6>Address</h6>
              <Label>City</Label>
              <Input
                type="text"
                autoComplete="off"
                name="city"
                value={newSaveResume.location.city}
                onChange={(e) => handleNestedInputChange(e, "location")}
                placeholder="City"
              />

              <Label>State</Label>
              <Input
                type="text"
                autoComplete="off"
                name="state"
                value={newSaveResume.location.state}
                onChange={(e) => handleNestedInputChange(e, "location")}
                placeholder="State"
              />

              <Label>Country</Label>
              <Input
                type="text"
                autoComplete="off"
                name="country"
                value={newSaveResume.location.country}
                onChange={(e) => handleNestedInputChange(e, "location")}
                placeholder="Country"
              />
            </div>

            <div className="resumeMiniContainer">
              <h6>Languages</h6>
              <Row className="mb-2">
                <Col md="9" className="colPadding">
                  <Input
                    type="text"
                    placeholder="Add a language"
                    value={newLanguageInput}
                    onChange={(e) => setNewLanguageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAddLanguage();
                      }
                    }}
                  />
                </Col>
                <Col md="2" className="colPadding">
                  <Button
                    className="addButton"
                    color="primary"
                    onClick={handleAddLanguage}
                    disabled={!newLanguageInput.trim()}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </Button>
                </Col>
              </Row>

              {newSaveResume.languages.length > 0 && (
                <div>
                  <h6>Added Languages:</h6>
                  {newSaveResume.languages.map((lang, idx) => (
                    <Row key={idx} className="mb-2 align-items-center">
                      <Col md="9">
                        <Input
                          value={lang}
                          onChange={(e) =>
                            handleUpdateLanguage(idx, e.target.value)
                          }
                          placeholder="Language"
                        />
                      </Col>
                      <Col md="2">
                        <Button
                          color="danger"
                          onClick={() => handleRemoveLanguage(idx)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </div>
              )}
            </div>

            <div className="resumeMiniContainer">
              <h6>Skills</h6>
              <Row className="mb-2">
                <Col md="9" className="colPadding">
                  <Input
                    type="text"
                    placeholder="Add a Skill"
                    value={newSkillInput}
                    onChange={(e) => setNewSkillInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAddSkill();
                      }
                    }}
                  />
                </Col>
                <Col md="2" className="colPadding">
                  <Button
                    className="addButton"
                    color="primary"
                    onClick={handleAddSkill}
                    disabled={!newSkillInput.trim()}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </Button>
                </Col>
              </Row>

              {newSaveResume.skills.length > 0 && (
                <div>
                  <h6>Added Skills:</h6>
                  {newSaveResume.skills.map((skill, idx) => (
                    <Row key={idx} className="mb-2 align-items-center">
                      <Col md="9">
                        <Input
                          value={skill}
                          onChange={(e) =>
                            handleUpdateSkill(idx, e.target.value)
                          }
                          placeholder="Skill"
                        />
                      </Col>
                      <Col md="2">
                        <Button
                          color="danger"
                          onClick={() => handleRemoveSkill(idx)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </div>
              )}
            </div>

            <div className="resumeMiniContainer links">
              <h6>Links</h6>
              <Input
                placeholder="LinkedIn URL"
                name="linkedin"
                value={newSaveResume.linkedin}
                onChange={handleInputChange}
              />
              <Input
                placeholder="GitHub URL"
                name="github"
                value={newSaveResume.github}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Website URL"
                name="website"
                value={newSaveResume.website}
                onChange={handleInputChange}
              />
            </div>
          </Col>

          <Col md={8} className="ColRight">
            <div className="resumeMiniContainer">
              <h6>Name *</h6>
              <Input
                placeholder="Full Name"
                type="text"
                name="name"
                value={newSaveResume.name}
                onChange={handleInputChange}
                invalid={!!errors.name}
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </div>

            <div className="resumeMiniContainer">
              <h6>Summary</h6>
              <Input
                placeholder="Professional summary about your experience and skills..."
                type="textarea"
                name="summary"
                value={newSaveResume.summary}
                onChange={handleInputChange}
                rows={4}
              />
            </div>

            {/* Experience Section */}
            <div className="resumeMiniContainer">
              <h5>Experience</h5>
              <Row className="mb-2">
                <Col md="12">
                  <Label>Company *</Label>
                  <Input
                    placeholder="Company Name"
                    name="company"
                    value={newExperience.company}
                    onChange={handleExperienceChange}
                  />

                  <Label>Job Title *</Label>
                  <Input
                    placeholder="Job Title"
                    name="job_title"
                    value={newExperience.job_title}
                    onChange={handleExperienceChange}
                  />

                  <Row>
                    <Col md="6">
                      <Label>Start Date *</Label>
                      <Input
                        type="month"
                        name="start_date"
                        value={newExperience.start_date}
                        onChange={handleExperienceChange}
                      />
                    </Col>
                    <Col md="6">
                      <Label>End Date</Label>
                      <Input
                        type="month"
                        name="end_date"
                        value={newExperience.end_date}
                        onChange={handleExperienceChange}
                        placeholder="Present if empty"
                      />
                    </Col>
                  </Row>

                  <Label>Description</Label>
                  <Input
                    type="textarea"
                    placeholder="Job description and responsibilities"
                    name="description"
                    value={newExperience.description}
                    onChange={handleExperienceChange}
                    rows={3}
                  />
                </Col>
              </Row>
              <Button
                color="primary"
                onClick={handleAddExperience}
                disabled={
                  !newExperience.company ||
                  !newExperience.job_title ||
                  !newExperience.start_date
                }
                className="mb-3"
              >
                <i className="fa-solid fa-plus"></i> Add Experience
              </Button>

              {/* Display Added Experiences */}
              {newSaveResume.experience.length > 0 && (
                <div className="added-items">
                  <h6>Added Experiences:</h6>
                  {newSaveResume.experience.map((exp, idx) => (
                    <div key={idx} className="added-item">
                      <Row className="align-items-center">
                        <Col md="10">
                          <Label>Company *</Label>
                          <Input
                            value={exp.company}
                            onChange={(e) =>
                              handleUpdateExperience(
                                idx,
                                "company",
                                e.target.value
                              )
                            }
                            invalid={!!errors[`experience_${idx}_company`]}
                            className="mb-2"
                          />
                          {errors[`experience_${idx}_company`] && (
                            <FormFeedback>
                              {errors[`experience_${idx}_company`]}
                            </FormFeedback>
                          )}

                          <Label>Job Title *</Label>
                          <Input
                            value={exp.job_title}
                            onChange={(e) =>
                              handleUpdateExperience(
                                idx,
                                "job_title",
                                e.target.value
                              )
                            }
                            invalid={!!errors[`experience_${idx}_job_title`]}
                            className="mb-2"
                          />
                          {errors[`experience_${idx}_job_title`] && (
                            <FormFeedback>
                              {errors[`experience_${idx}_job_title`]}
                            </FormFeedback>
                          )}

                          <Row>
                            <Col md="6">
                              <Label>Start Date *</Label>
                              <Input
                                type="month"
                                value={exp.start_date}
                                onChange={(e) =>
                                  handleUpdateExperience(
                                    idx,
                                    "start_date",
                                    e.target.value
                                  )
                                }
                                invalid={
                                  !!errors[`experience_${idx}_start_date`]
                                }
                              />
                              {errors[`experience_${idx}_start_date`] && (
                                <FormFeedback>
                                  {errors[`experience_${idx}_start_date`]}
                                </FormFeedback>
                              )}
                            </Col>
                            <Col md="6">
                              <Label>End Date</Label>
                              <Input
                                type="month"
                                value={exp.end_date}
                                onChange={(e) =>
                                  handleUpdateExperience(
                                    idx,
                                    "end_date",
                                    e.target.value
                                  )
                                }
                                placeholder="Present if empty"
                              />
                            </Col>
                          </Row>

                          <Label>Description</Label>
                          <Input
                            type="textarea"
                            value={exp.description}
                            onChange={(e) =>
                              handleUpdateExperience(
                                idx,
                                "description",
                                e.target.value
                              )
                            }
                            rows={2}
                            className="mb-2"
                          />
                        </Col>
                        <Col md="2">
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => handleRemoveExperience(idx)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Projects Section */}
            <div className="resumeMiniContainer">
              <h5>Projects</h5>
              <Row className="mb-2">
                <Col md="12">
                  <Label>Project Name *</Label>
                  <Input
                    placeholder="Project Name"
                    name="name"
                    value={newProject.name}
                    onChange={handleProjectChange}
                  />

                  <Label>Description</Label>
                  <Input
                    type="textarea"
                    placeholder="Project description and technologies used"
                    name="description"
                    value={newProject.description}
                    onChange={handleProjectChange}
                    rows={3}
                  />
                </Col>
              </Row>
              <Button
                color="primary"
                onClick={handleAddProject}
                disabled={!newProject.name}
                className="mb-3"
              >
                <i className="fa-solid fa-plus"></i> Add Project
              </Button>

              {/* Display Added Projects */}
              {newSaveResume.projects.length > 0 && (
                <div className="added-items">
                  <h6>Added Projects:</h6>
                  {newSaveResume.projects.map((proj, idx) => (
                    <div key={idx} className="added-item">
                      <Row className="align-items-center">
                        <Col md="10">
                          <Label>Project Name *</Label>
                          <Input
                            value={proj.name}
                            onChange={(e) =>
                              handleUpdateProject(idx, "name", e.target.value)
                            }
                            invalid={!!errors[`project_${idx}_name`]}
                            className="mb-2"
                          />
                          {errors[`project_${idx}_name`] && (
                            <FormFeedback>
                              {errors[`project_${idx}_name`]}
                            </FormFeedback>
                          )}

                          <Label>Description</Label>
                          <Input
                            type="textarea"
                            value={proj.description}
                            onChange={(e) =>
                              handleUpdateProject(
                                idx,
                                "description",
                                e.target.value
                              )
                            }
                            rows={2}
                          />
                        </Col>
                        <Col md="2">
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => handleRemoveProject(idx)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ textAlign: "end", marginTop: "20px" }}>
              <Button color="success" onClick={SwitchAddEdit} size="lg">
                {isEditMode ? "Update Resume" : "Save Resume"}
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Single Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal}
        toggle={() => setDeleteModal(!deleteModal)}
        centered
        style={{ borderRadius: "12px" }}
      >
        <ModalHeader
          toggle={() => setDeleteModal(!deleteModal)}
          style={{
            borderBottom: "none",
            fontWeight: "600",
            fontSize: "1.25rem",
            padding: "1.2rem 1.5rem",
          }}
        >
          Confirm Delete
        </ModalHeader>
        <ModalBody
          style={{
            padding: "1rem 1.5rem",
            textAlign: "center",
            fontSize: "18px",
            color: "#555",
          }}
        >
          Are you sure you want to delete the resume "{selectedResume?.title}"?
        </ModalBody>
        <ModalFooter
          style={{
            borderTop: "none",
            padding: "1rem 1.5rem",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <Button
            color="danger"
            style={{ minWidth: "100px", fontWeight: "500" }}
            onClick={handleDeleteResume}
          >
            Delete
          </Button>
          <Button
            color="secondary"
            style={{ minWidth: "100px", fontWeight: "500" }}
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Multiple Delete Confirmation Modal */}
      <Modal
        isOpen={deleteMultipleModal}
        toggle={() => setDeleteMultipleModal(false)}
        centered
        style={{ borderRadius: "12px" }}
      >
        <ModalHeader
          toggle={() => setDeleteMultipleModal(false)}
          style={{
            borderBottom: "none",
            fontWeight: "600",
            fontSize: "1.25rem",
            padding: "1.2rem 1.5rem",
          }}
        >
          Confirm Multiple Delete
        </ModalHeader>
        <ModalBody
          style={{
            padding: "1rem 1.5rem",
            textAlign: "center",
            fontSize: "18px",
            color: "#555",
          }}
        >
          Are you sure you want to delete {selectedResumes.length} selected
          resume(s)? This action cannot be undone.
        </ModalBody>
        <ModalFooter
          style={{
            borderTop: "none",
            padding: "1rem 1.5rem",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <Button
            color="danger"
            style={{ minWidth: "100px", fontWeight: "500" }}
            onClick={handleDeleteMultipleResumes}
          >
            Delete All
          </Button>
          <Button
            color="secondary"
            style={{ minWidth: "100px", fontWeight: "500" }}
            onClick={() => setDeleteMultipleModal(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={errorModal}
        toggle={() => setErrorModal(false)}
        centered
        style={{ borderRadius: "12px" }}
      >
        <ModalHeader
          toggle={() => setErrorModal(false)}
          style={{
            borderBottom: "none",
            fontWeight: "600",
            fontSize: "1.25rem",
            padding: "1.2rem 1.5rem",
            color: "#dc3545",
          }}
        >
          <i className="fa-solid fa-triangle-exclamation me-2"></i>
          Validation Error
        </ModalHeader>
        <ModalBody
          style={{
            padding: "1rem 1.5rem",
            textAlign: "center",
            fontSize: "16px",
            color: "#555",
          }}
        >
          {errorMessage}
        </ModalBody>
        <ModalFooter
          style={{
            borderTop: "none",
            padding: "1rem 1.5rem",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <Button
            color="primary"
            style={{ minWidth: "100px", fontWeight: "500" }}
            onClick={() => setErrorModal(false)}
          >
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ResumeComponent;
