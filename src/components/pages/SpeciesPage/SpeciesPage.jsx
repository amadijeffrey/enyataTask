import React, { useContext } from "react";
import { useGetSWSpecies } from "../../../hooks/useSWQueries";
import DashboardWrapper from "../../templates/DashboardWrapper/DashboardWrapper";
import Table from "../../molecules/Table/Table";
import { verifySelectedStatus } from "../../utils/helpers";
import speciesPicture from "../../../assets/image4.png";
import Details from "../../molecules/Details/Details";
import { AppContext } from "../../../Context";

const headers = [
  "Name",
  "Birth year",
  "Eye Colors",
  "Hair Color",
  "Height",
  "Created",
];

const SpeciesPage = () => {
  const { data: speciesData } = useGetSWSpecies();
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  const handleSelected = (data) => {
    const { name, average_lifespan, eye_colors, designation, language } = data;

    setSelectedItem({
      ...selectedItem,
      image: speciesPicture,
      name,
      designation,
      eyeColors: eye_colors,
      averageLifeSpan: average_lifespan,
      language
    });
  };

  return (
    <DashboardWrapper>
      {verifySelectedStatus(selectedItem) ? (
        <Details
          imageSrc={selectedItem.image}
          name={selectedItem.name}
          designation={selectedItem.designation}
          eyeColors={selectedItem.eyeColors}
          averageLifeSpan={selectedItem.averageLifeSpan}
          language={selectedItem.language}
        />
      ) : (
        <Table
          title="Species"
          headers={headers}
          tableData={speciesData?.data?.results}
          handleSelected={handleSelected}
        />
      )}
    </DashboardWrapper>
  );
};

export default SpeciesPage;
