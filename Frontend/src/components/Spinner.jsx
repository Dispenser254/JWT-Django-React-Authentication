// import React from 'react'
import { Button, Spinner } from "flowbite-react";

export const CustomSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="lg" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );
}

export default CustomSpinner