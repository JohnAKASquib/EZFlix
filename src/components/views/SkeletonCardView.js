import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCardView = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      {Array(9)
        .fill()
        .map((item, index) => (
          <div
            className="card mb-5 text-center"
            key={index}
            style={{ width: 28.5 + "rem" }}
          >
            <div className="card-header">
              <h3 className="text-warning">
                <Skeleton duration={2} height={36} width={`80%`} />
              </h3>
            </div>
            <div className="card-body">
              <Skeleton height={225} width={150} />
              <p>
                <Skeleton height={150} width={`90%`} />
              </p>
            </div>
            <div className="card-footer text-muted">
              <p>
                <Skeleton width={`20%`} />
              </p>
            </div>
          </div>
        ))}
    </SkeletonTheme>
  );
};

export default SkeletonCardView;
