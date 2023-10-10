import { createBoard } from '@wixc3/react-board';
import { MyForm } from '../../../components/my-form/my-form';

export default createBoard({
    name: 'MyForm',
    Board: () => <MyForm />,
    isSnippet: true,
});
