import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ProjectList } from "Containers/DashboardUserList/UserDetail/PaticularUser/PaticularUserSection/ProjectList";
// import { ProjectList } from "Component/PmFlow/PaticularUserSection/ProjectList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  boxShadow: 24,
  borderRadius: ".5rem",
  p: 4,
};

export default function ModalComp({ open, setOpen, paticularUserName }) {
  const handleClose = () => setOpen(false);
  const [project, setProject] = React.useState('');
  const handleChange = (event) => {
    setProject(event.target.value);
  };
  const projectList =ProjectList;
  let projectDropDown =projectList.map((item,index)=>{
return(
    <MenuItem value={index+1} key={index}>{item.projectName}</MenuItem>
)
  })
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Assign project to {paticularUserName}
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
              <FormHelperText>Project</FormHelperText>
            <Select
              value={project}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Select project</em>
              </MenuItem>
              {
                projectDropDown
              }
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
