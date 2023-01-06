import React, { useEffect } from "react";
import { useState } from "react";
import { getAllDoctors } from "../../services/doctorDataServices";
import DoctorProfileCard from "../common/DoctorProfileCard";
import SearchBar from "../common/SearchBar";
import "../../static/css/all_doctors.css";
import Paginate from "../common/Paginate";
import { paginate } from "../../utils/paginate";
import Filter from "../common/Filter";
import LoadingData from "../common/LoadingData";
import { doctorSpecialties } from "../../utils/helper";
import { getSearchedDoctor } from "../../services/patientDataService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllDoctors = ({ user }) => {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);
  const [pageSize] = useState(5);
  const [currPage, setCurrPage] = useState(1);
  const [currSpecialty, setCurrSpecialty] = useState("");
  const [specialtiesList, setSpecialtiesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (searchTerm) {
        const { data } = await getSearchedDoctor(searchTerm);
        setDoctors(data);
        return;
      }

      const { data } = await getAllDoctors();
      setDoctors(data);
    };
    getData();

    const specialty = doctorSpecialties();
    specialty.shift();
    const specialties = [{ name: "All Specialties" }, ...specialty];
    setSpecialtiesList(specialties);
    setCurrSpecialty(specialties[0].name);
  }, [searchTerm]);

  const handlePageChange = (page) => {
    setCurrPage(page);
  };

  const handleSpecialtyChange = (specialty) => {
    setCurrSpecialty(specialty);
    setCurrPage(1);
  };

  const handleSearch = (term) => {
    setCurrPage(1);
    setSearchTerm(term);
  };

  let filteredDoctor = doctors;

  if (currSpecialty && currSpecialty.id) {
    filteredDoctor = doctors.filter((doc) => {
      return doc.specialty === currSpecialty.name;
    });
  }

  const onButtonClick = (id) => {
    if (!user) {
      toast.info(
        "Login first to book the Doctor, then proceed to 'Create Appointment'"
      );
      return navigate("/patient/login");
    }
  };

  const paginatedDoctors = paginate(filteredDoctor, pageSize, currPage);

  const renderDoctorsProfile = () => {
    if (paginatedDoctors.length === 0) {
      return <LoadingData msg="Doctor did not found." />;
    }
    return paginatedDoctors.map((item) => {
      return (
        <React.Fragment key={item._id}>
          <DoctorProfileCard
            data={item}
            user={user}
            buttonText="Book Me"
            buttonEvent={onButtonClick}
          />
        </React.Fragment>
      );
    });
  };

  if (user && Object.keys(user).length !== 0) {
    toast.error("You cannot do that action", { toastId: "All doctors" });
    navigate(`/${user.isPatient ? "patient" : "doctor"}/me/dashboard`);
    return;
  }

  return (
    <div className="all_doctors">
      <div className="container">
        <div className="all_doctors_container">
          <div className="all_doctors_left">
            <Filter
              listCategories={specialtiesList}
              currSpecialty={currSpecialty}
              onSpecialtyChange={handleSpecialtyChange}
            />
          </div>
          <div className="all_doctors_right">
            <SearchBar onSearchChange={handleSearch} value={searchTerm} />
            <div className="doctors_grid">{renderDoctorsProfile()}</div>
            <Paginate
              itemCount={filteredDoctor.length}
              currPage={currPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
