import { createBoard } from '@wixc3/react-board';
import { MyForm } from '../../../components/my-form/my-form';

export default createBoard({
    name: 'Inheritance through many scopes',
    Board: () => <MyForm />,
    isSnippet: true,
});
