import './styles.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className='not-found'>
      <h1>Error page</h1>
      <Link to='/'>Voltar a página principal</Link>
    </div>
  );
};
