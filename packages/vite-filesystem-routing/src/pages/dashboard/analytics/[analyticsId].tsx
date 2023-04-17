import { useParams } from 'react-router-dom';

const DynamicAnalytics = () => {
  const { analyticsId } = useParams();

  return <div>Dynamic Analytics Page, Param: {analyticsId}</div>;
};

export default DynamicAnalytics;
