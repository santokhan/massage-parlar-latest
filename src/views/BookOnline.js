import Header from "../components/header/Header";
import SLayout, {
  SHeader,
  SMain,
  STitle,
} from "../components/section-layout/SectionLayout";
import Footer from "../components/footer/Footer";
import Appointment from "../components/mui/apppointment/Appointment";
import PageLoader from "../components/page-loader/PageLoader";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
  },
});

export default function BookOnline() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <PageLoader></PageLoader>
        <Header></Header>
        <div className="pt-16">
          <SLayout>
            <div className="bg-white py-8">
              <SHeader>
                <STitle>appointments</STitle>
              </SHeader>
              <SMain>
                <Appointment></Appointment>
              </SMain>
            </div>
          </SLayout>
        </div>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
