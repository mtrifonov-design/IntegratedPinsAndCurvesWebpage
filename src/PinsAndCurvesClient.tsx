
import IntegratedPinsAndCurves from '@mtrifonov-design/pinsandcurves-viewlayer';
import { useNavigate, useParams } from 'react-router';


const PinsAndCurvesClient = () => {
  const { serverUrl } = useParams();
  const navigate = useNavigate();
  if (!serverUrl) {

    navigate('/');
  }

  return (
    <IntegratedPinsAndCurves
      serverUrl={decodeURIComponent(serverUrl as string)}
    />
  );
};

export default PinsAndCurvesClient;