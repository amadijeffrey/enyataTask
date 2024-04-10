import React, { useContext } from "react";
import { useGetSWStarships } from "../../../hooks/useSWQueries";
import DashboardWrapper from "../../templates/DashboardWrapper/DashboardWrapper";
import Table from "../../molecules/Table/Table";
import { verifySelectedStatus } from "../../utils/helpers";
import starshipPicture from "../../../assets/image2.png";
import Details from "../../molecules/Details/Details";
import { AppContext } from "../../../Context";

const headers = ["Name", "Model", "Class", "Passengers", "Length", "Character"];

const StarshipsPage = () => {
  const { data: starshipsData } = useGetSWStarships();
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  const handleSelected = (data) => {
    const { name, model, passengers } = data;


    setSelectedItem({
      ...selectedItem,
      image: starshipPicture,
      name,
      model,
      passengers,
      pilots: "Dior, Kingley, Jamal",
    });
  };

  return (
    <DashboardWrapper>
      {verifySelectedStatus(selectedItem) ? (
        <Details
          imageSrc={selectedItem.image}
          name={selectedItem.name}
          model={selectedItem.model}
          passengers={selectedItem.passengers}
          pilots={selectedItem.pilots}
        />
      ) : (
        <Table
          title="Starships"
          headers={headers}
          tableData={starshipsData?.data?.results}
          handleSelected={handleSelected}
        />
      )}
    </DashboardWrapper>
  );
};

export default StarshipsPage;
