import React from "react";
import TextField from "@material-ui/core/TextField";

class Logger extends React.Component {
  render() {
    return (
      <div className="logger">
        <TextField id="standard-basic" label="Title" />
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Story"
            multiline
            rows="20"
            defaultValue=""
            className="logger-textarea"
            margin="normal"
            variant="outlined"
          />
        </div>
      </div>
    );
  }
}

export default Logger;
