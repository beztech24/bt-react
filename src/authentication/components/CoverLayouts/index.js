import PropTypes from "prop-types";
import { Grid2 as Grid } from "@mui/material";
import BTBox from "../../../components/BTBox";
import PageLayout from "../Pagelayouts";
function CoverLayout({ coverHeight, image, children }) {
  return (
    <PageLayout>
      <BTBox
        width="calc(100% - 2rem)"
        minHeight={coverHeight}
        borderRadius="xl"
        mx={2}
        my={2}
        pt={6}
        pb={28}
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.4),
              rgba(gradients.dark.state, 0.4)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <BTBox
        mt={{ xs: -18, lg: -18 }}
        px={1}
        width="calc(100% - 2rem)"
        mx="auto"
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </BTBox>
    </PageLayout>
  );
}

// Setting default props for the CoverLayout
CoverLayout.defaultProps = {
  coverHeight: "35vh",
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  coverHeight: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
