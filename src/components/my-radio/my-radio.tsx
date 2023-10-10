import classNames from 'classnames';
import styles from './my-radio.module.scss';

export interface MyRadioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MyRadio = ({ className }: MyRadioProps) => {
    return <div className={classNames(styles.root, className)}>MyRadio</div>;
};
