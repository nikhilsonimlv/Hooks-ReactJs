import { useEffect, useState } from "react";
import Axios from "axios";

const useResources = (resource) => {
    const [resources, setResources] = useState([]);
  
    useEffect(() => {
      (async (resource) => {
        const response = await Axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
  
        setResources(response.data);
      })(resource);
    }, [resource]);
  
    return resources;
  };

  export default useResources;