import React from "react";

type Props = {
  hasTopLoader: boolean;
};

const PageLoader: React.FC<Props> = ({ hasTopLoader }) => {
  return (
    <div>
      Page Loader {hasTopLoader ? "" : ""}
    </div>
  );
};

export default PageLoader;
