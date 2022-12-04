import { useNavigate } from 'react-router-dom';
import Button from './Button';

interface Props {
  id: number;
}

function GoDocsButton({ id }: Props) {
  const navigate = useNavigate();

  const goDocs = (i: number) => {
    navigate(`/docs/${i}`);
  };

  return <Button onClick={() => goDocs(id)}>Docs</Button>;
}

export default GoDocsButton;
