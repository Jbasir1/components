import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample(props) {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;