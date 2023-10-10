import { createBoard } from '@wixc3/react-board';
import { MyRadio } from '../../../components/my-radio/my-radio';

export default createBoard({
    name: 'MyRadio',
    Board: () => <MyRadio />,
    isSnippet: true,
});
