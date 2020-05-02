import Axios from "axios";

import React, { useState, useEffect } from "react";
import useResources from "./useResources";



export default function ResourceList({ resource }) {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
}
