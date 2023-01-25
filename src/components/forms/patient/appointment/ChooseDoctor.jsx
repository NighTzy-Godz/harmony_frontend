import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { getAllDoctors } from "../../../../services/doctorDataServices";
import { getSearchedDoctor } from "../../../../services/patientDataService";
import { doctorSpecialties } from "../../../../utils/helper";
import { paginate } from "../../../../utils/paginate";
import DoctorProfileCard from "../../../common/DoctorProfileCard";
import Filter from "../../../common/Filter";
import { FormContext } from "../../../common/Form";
import Paginate from "../../../common/Paginate";
import SearchBar from "../../../common/SearchBar";
import NoData from "../../../common/NoData";
import AppointmentDocDisplay from "../../../common/AppointmentDocDisplay";

const ChooseDoctor = (props) => {
  let count = 0;
  const {
    step,
    currDocId,
    onStepChange,
    onDocIdChange,
    removeDocDisplay,
    onRemoveDocDisplay,
  } = props;

  const formContext = useContext(FormContext);
  const { data } = formContext;
  const [specialtiesList, setSpecialtiesList] = useState([]);

  const [currSpecialty, setCurrSpecialty] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [paginateValues, setPaginateValues] = useState({
    currPage: 1,
    pageSize: 5,
  });

  useEffect(() => {
    const initializeSpecialties = () => {
      const specialty = doctorSpecialties();

      specialty.shift();
      const specialties = [{ name: "All Specialties" }, ...specialty];
      setSpecialtiesList(specialties);

      setCurrSpecialty(specialties[0].name);
    };
    initializeSpecialties();
  }, []);

  useEffect(() => {
    const getDoctors = async () => {
      if (searchTerm) {
        const { data } = await getSearchedDoctor(searchTerm);
        setDoctors(data);
        return;
      }
      const { data: doctors } = await getAllDoctors();

      setDoctors(doctors);
    };

    const setDoctor = () => {
      data.doctorId = currDocId;
    };

    getDoctors();
    setDoctor();
  }, [
    data,
    count,
    step,
    onStepChange,
    searchTerm,
    currDocId,
    onRemoveDocDisplay,
    removeDocDisplay,
  ]);

  const handleDoctorSelect = (id) => {
    // setDoctorId(id);
    onDocIdChange(id);
  };

  const handleSpecialtyChange = (specialty) => {
    setCurrSpecialty(specialty);

    onDocIdChange("");
  };

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const handlePageChange = (page) => {
    setPaginateValues({ ...paginateValues, currPage: page });
  };

  const handleRemoveDoc = () => {
    onDocIdChange("");
  };

  let filteredDoctor = doctors;

  if (currSpecialty && currSpecialty.id) {
    filteredDoctor = doctors.filter((doc) => {
      return doc.specialty === currSpecialty.name;
    });
  }

  const paginatedDoctor = paginate(
    filteredDoctor,
    paginateValues.pageSize,
    paginateValues.currPage
  );
  const renderDoctors = () => {
    if (paginatedDoctor.length === 0)
      return <NoData message="Doctor Did Not Found." />;
    return paginatedDoctor.map((doc) => {
      return (
        <React.Fragment key={doc._id}>
          <DoctorProfileCard
            data={doc}
            buttonText="Select Me"
            buttonEvent={handleDoctorSelect}
            currDocId={data.doctorId}
          />
        </React.Fragment>
      );
    });
  };

  const renderDocInfo = () => {
    if (!data.doctorId) return;

    return (
      <AppointmentDocDisplay
        displayBtn={true}
        docId={data.doctorId}
        onRemoveDoc={handleRemoveDoc}
      />
    );
  };

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
            {renderDocInfo()}
            <SearchBar onSearchChange={handleSearch} value={searchTerm} />
            <div className="doctors_grid">{renderDoctors()}</div>
            <div className="nxtBtn">
              <button
                style={{ cursor: "pointer" }}
                onClick={() => onStepChange(step + 1)}
                disabled={!data.doctorId}
                className="font_reg "
              >
                Next
              </button>
            </div>
            <Paginate
              itemCount={filteredDoctor.length}
              currPage={paginateValues.currPage}
              pageSize={paginateValues.pageSize}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseDoctor;
