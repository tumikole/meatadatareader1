import React, { useState } from "react";
import { Card, CardBody, CardTitle, Button, Row, Col, CardText, FormGroup, Label, Input } from "reactstrap";

function FormData() {
  const [selectedFile, setSelectedFile] = useState({});
  const [files, setFilesList] = useState([]);
  	 const [image,  setImage] = useState("")

const handleChange = (e) =>{
       setImage(URL.createObjectURL(e.target.files[0]))
     }

  const onClickShow = (props) => {
    const { name, type, size } = props;
    console.log(`props`, props);
    setSelectedFile({
      name,
      type,
      size,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    let file = document.getElementsByName("file")[0].files["0"];
    const { name, type, size } = file;
    if (name && type && size) {
      setFilesList([
        ...files,
        {
          name: file.name,
          type: file.type,
          size: file.size,
        },
      ]);

      console.log("tumisang",file.name)
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmission(e)}>
        <FormGroup>
    <Input
      type="file" name="file" 
      onChange={handleChange}
    />
    </FormGroup>

        <div>
          <Button>Submit</Button>
        </div>
      </form>

      <div>
  <Card
  >
    <CardBody>
    <div>
    <object data={image} type="application/pdf" width="100%" height="100%"></object>
    </div>

      <CardTitle tag="h1">
      <h4>Click on file name to show file information</h4>
{files.map((val) => {
            return  <Button onClick={() => onClickShow(val)}  color="success"
    outline style={{color:"red", }}>File Name: {val.name}</Button>;
          })}     
<div>
 
</div>
          
           </CardTitle>
       
    </CardBody>
  </Card>
</div>


<Row >
  <Col sm="12">
    <Card body >
      <CardTitle tag="h5">
File Information     
 </CardTitle>
      <CardText className="CardText">
 <Button disabled color="success" outline>Name: {selectedFile.name}</Button>
 <br />
          <Button disabled color="info" outline>Type: {selectedFile.type}</Button>
           <br />

          <Button disabled color="warning" outline>Size: {selectedFile.size}</Button>
                    {/* <Button disabled color="warning" outline>Blob: {selectedFile}</Button> */}


      </CardText>
      
    </Card>
  </Col>
 
</Row>
    </div>
  );
}

export default FormData;