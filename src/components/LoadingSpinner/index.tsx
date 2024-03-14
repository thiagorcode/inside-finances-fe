import React, { CSSProperties, useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/MoonLoader';

function LoandingSpinner() {
  const [loading, setLoading] = useState<boolean>(true);

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      <ClipLoader
        color={'#233dc7'}
        cssOverride={override}
        loading={loading}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

export default LoandingSpinner;
