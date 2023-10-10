import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'One scope inheritance',
    Board: () => <App />,
});
