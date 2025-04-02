import { useState } from "react";
import DashboardLayout from "../../Layouts/Layoutcontainers";
import BTDropzone from "../../components/BTDropzone";
const Dropzone = () => {
  const [files, setFiles] = useState([]);
  return (
    <DashboardLayout>
      <BTDropzone files={files} setFiles={setFiles} />
    </DashboardLayout>
  );
};
export default Dropzone;
