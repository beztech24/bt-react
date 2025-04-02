import BTTypography from "../../components/BTTypography";
import DashboardLayout from "../../Layouts/Layoutcontainers";
import BTBox from "../../components/BTBox";
import BTButton from "../../components/BTButton";
const Home = () => {
  return (
    <DashboardLayout>
      <BTTypography>Buttons</BTTypography>
      <BTBox padding={5} bgColor={"light"} variant="gradient">
        <BTTypography textTransform={"capitalize"} variant="h5">
          contained Buttons
        </BTTypography>
        <BTButton
          variant="contained"
          color="info"
          type="submit"
          size={"small"}
          // disabled={true}
          borderRadius={"lg"}
        >
          info
        </BTButton>
        <BTButton
          variant="contained"
          color="primary"
          type="submit"
          size={"small"}
          borderRadius={"xs"}
          // disabled={true}
        >
          primary
        </BTButton>
        <BTButton
          variant="contained"
          color="secondary"
          type="submit"
          size={"small"}
          borderRadius={"sm"}
          // disabled={true}
        >
          secondary
        </BTButton>
        <BTButton
          variant="contained"
          color="dark"
          type="submit"
          size={"small"}
          borderRadius={"md"}
        >
          dark
        </BTButton>
        <BTButton
          variant="contained"
          color="text"
          type="submit"
          size={"small"}
          borderRadius={"xl"}
        >
          text
        </BTButton>
        <BTButton
          variant="contained"
          color="success"
          type="submit"
          size={"small"}
          borderRadius={"xxl"}
        >
          success
        </BTButton>
        <BTButton
          variant="contained"
          color="warning"
          type="submit"
          size={"small"}
          borderRadius={"section"}
        >
          warning
        </BTButton>
        <BTButton
          variant="contained"
          color="error"
          type="submit"
          size={"small"}
          borderRadius={"xl"}
        >
          error
        </BTButton>
        <BTButton
          variant="contained"
          color="ligth"
          type="submit"
          size={"small"}
          borderRadius={"xl"}
          // disabled={true}
        >
          ligth
        </BTButton>
        <BTButton borderRadius={"50px"} variant={"contained"} color={"dark"}>
          borderRadius 50px
        </BTButton>
      </BTBox>
    </DashboardLayout>
  );
};
export default Home;
