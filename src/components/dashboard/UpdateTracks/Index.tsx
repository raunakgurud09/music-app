
import Error from "../../Error"
import AudioUpdate from "./AudioUpdate";
import ImageUpdate from "./ImageUpdate";
import Meta from "./Meta";


function Index({ value = 0 }) {
    return (
      <div>
        {(() => {
          if (value === 0) {
            return <Meta />;
          } else if (value === 1) {
            return <ImageUpdate />;
          } else if (value === 2) {
            return <AudioUpdate />;
          } else {
            return <Error message='Error in loading' />;
          }
        })()}
      </div>
    );
  }
  
  export default Index;
  